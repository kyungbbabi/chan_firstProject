package io.github.chanfirstproject.chan_firstproject.service;

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
    String token = jwtTokenProvider.createToken(user.getUsername());
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
    sendVerificationEmail(user.getEmail(), user.getEmailVerificationCode());
    
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

  private String generateVerificationCode(){
    return UUID.randomUUID().toString().substring(0, 8);
  }

  // 이메일 인증 코드 생성 및 발송
  public void sendVerificationEmail(String email, String code){
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo();
    message.setSubject("이메일 인증");
    message.setText("인증 코드" + code);
    emailSender.send(message);

  }

}