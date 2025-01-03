package io.github.chanfirstproject.chan_firstproject.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import io.github.chanfirstproject.chan_firstproject.domain.User;
import io.github.chanfirstproject.chan_firstproject.dto.UserDto;
import io.github.chanfirstproject.chan_firstproject.repository.UserRepository;
import io.github.chanfirstproject.chan_firstproject.security.jwt.provider.JwtTokenProvider;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtTokenProvider jwtTokenProvider;
  
  // 로그인 처리
  public UserDto.Response login(UserDto.LoginRequest request){
      
    // 1. 사용자 검증
    User user = userRepository.findByUsername(request.getUsername()).orElseThrow(() -> new RuntimeException("존재하지 않는 사용자입니다."));
    // 2. 비밀번호 검증
    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
      throw new RuntimeException("잘못된 비밀번호입니다.");
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
  public User signUp(UserDto.SignUpRequest request) {
    
    // 1. 중복 검사
    if(userRepository.existsByUsername(request.getUsername())) {
      throw new RuntimeException("이미 존재하는 사용자입니다.");
    }
    if (userRepository.existsByEmail(request.getEmail())) {
      throw new RuntimeException("이미 사용중인 이메일입니다.");
    }
    // 2. 새로운 사용자 생성
    User user = User.builder()
      .username(request.getUsername())
      .password(request.getPassword())
      .email(request.getEmail())
      .build();
    // 3. 저장
    return userRepository.save(user);
  
  }

}