package io.github.chanfirstproject.chan_firstproject.service;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.chanfirstproject.chan_firstproject.domain.User;
import io.github.chanfirstproject.chan_firstproject.dto.UserDto;
import io.github.chanfirstproject.chan_firstproject.repository.UserRepository;
import io.github.chanfirstproject.chan_firstproject.security.jwt.provider.JwtTokenProvider;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtTokenProvider jwtTokenProvider;
  private final JavaMailSender emailSender;
  private final EmailService emailService;

  // 로그인 처리
  public UserDto.Response login(UserDto.LoginRequest request){
      
    // 1. 입력값 검증
    if (request.getUsername() == null || request.getPassword() == null) {
      throw new IllegalArgumentException("아이디와 비밀번호를 입력해주세요.");
    }
    
    // 2. 사용자 조회 및 비밀번호 검증
    User user = userRepository.findByUsername(request.getUsername()).orElseThrow(() -> new UsernameNotFoundException("존재하지 않는 사용자입니다."));
    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
      throw new BadCredentialsException("잘못된 비밀번호입니다.");
    }
    // 3. JWT토큰 생성
    String token = jwtTokenProvider.createAccessToken(user.getUsername());
    // 4. 응답 데이터 생성
    return UserDto.Response.builder()
      .accessToken(token)
      .username(user.getUsername())
      .build();
  
  }

  // 회원가입 처리
  @Transactional
  public User register(UserDto.RegisterRequest request) {
    // 1. 입력값 검증
    validateRegisterRequest(request);
   
    // 2. 사용자 생성 및 저장 (암호화된 비밀번호 사용)
    User user = User.builder()
      .username(request.getUsername())
      .password(passwordEncoder.encode(request.getPassword()))
      .email(request.getEmail())
      .emailVerificationCode(generateVerificationCode())
      .emailVerified(false)
      .build();

    // 3. 인증 메일 발송
    emailService.sendVerificationEmail(user.getEmail(), user.getEmailVerificationCode());
    
    return userRepository.save(user);
  }

  // 중복 검사
  private void validateRegisterRequest(UserDto.RegisterRequest request){
    if(userRepository.existsByUsername(request.getUsername())) {
      throw new DuplicateKeyException("이미 존재하는 사용자입니다.");
    }
    if (userRepository.existsByEmail(request.getEmail())) {
      throw new DuplicateKeyException("이미 사용중인 이메일입니다.");
    }
  }

  // 이메일 인증 코드 생성 및 발송
  public void sendVerificationEmail(String email, String code){
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo();
    message.setSubject("이메일 인증");
    message.setText("인증 코드" + code);
    emailSender.send(message);
  }

  @Transactional
  public void verifyEmail(String email, String code){
    User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    if (!code.equals(user.getEmailVerificationCode())) {
      throw new InvalidVerificationCodeException("잘못된 인증코드 입니다.");
    }

    user.setEmailVerified(true);
    user.setEmailVerificationCode(null);
    userRepository.save(user);
  }

  @Transactional
  public void resetPassword(String token, String newPassword){
    User user = userRepository.findByPasswordResetToken(token).orElseThrow(() -> new InvalidTokenException("유효하지 않는 토큰입니다."));
    if (user.getPasswordResetTokenExpiry().isBefore(LocalDateTime.now())) {
      throw new TokenExpiredException("만료된 토큰입니다.");
    }

    user.setPassword(passwordEncoder.encode(newPassword));
    user.setPasswordResetToken(null);
    user.setPasswordResetTokenExpiry(null);
    userRepository.save(user);
  }

  public void sendPasswordResetEmail(String email){
    User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    String resetToken = generatePasswordResetToken();
    user.setPasswordResetToken(resetToken);
    user.setPasswordResetTokenExpiry(LocalDateTime.now().plusHours(24));

    // 비밀번호 재설정 이메일 발송
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo(email);
    message.setSubject("비밀번호 재설정");
    emailSender.send(message);
  } 

  // 사용자 정보 수정
  @Transactional
  public UserDto.Response updateProfile(String username, UserDto.UpdateRequest request){
    User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    if (request.getNewPassword() != null) {
      // 현재 비밀번호 확인
      if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
        throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
      }
      user.setPassword(passwordEncoder.encode(request.getNewPassword()));
    }
    // 이메일이 변경된 경우
    if (request.getEmail() != null && !request.getEmail().equals(user.getEmail())) {
      user.setEmail(request.getEmail());
      user.setEmailVerified(false);
      String verificationCode = generateVerificationCode();
      user.setEmailVerificationCode(verificationCode);
      sendVerificationEmail(user.getEmail(), verificationCode);
    }
    // 변경된 내용 저장
    userRepository.save(user);
    // 응답 데이터 생성
    return UserDto.Response.builder()
      .id(user.getId())
      .username(user.getUsername())
      .email(user.getEmail())
      .accessToken(jwtTokenProvider.createAccessToken(user.getUsername()))
      .build();
  }
 
  private String generateVerificationCode(){
    return UUID.randomUUID().toString().substring(0, 8);
  }

  private String generatePasswordResetToken(){
    return UUID.randomUUID().toString();
  }
  // 각종 예외 클래스들을 내부 static 클래스로 정의
  public static class InvalidVerificationCodeException extends RuntimeException {
    public InvalidVerificationCodeException(String message) {
        super(message);
    }
  }

  public static class TokenExpiredException extends RuntimeException {
    public TokenExpiredException(String message) {
      super(message);
    }
  }

  public static class InvalidTokenException extends RuntimeException {
    public InvalidTokenException(String message) {
      super(message);
    }
  }

}