package io.github.chanfirstproject.chan_firstproject.service;

import org.springframework.stereotype.Service;

import io.github.chanfirstproject.chan_firstproject.dto.UserDto;

@Service
public class UserService {
  
  public UserDto.Response login(UserDto.LoginRequest request){
      return null;
  }
}


// private final UserRepository userRepository;

// public User signUp(SignUpRequest request) {
//     // 중복 검사
//     if (userRepository.existsByUsername(request.getUsername())) {
//         throw new RuntimeException("이미 존재하는 사용자명입니다");
//     }
//     if (userRepository.existsByEmail(request.getEmail())) {
//         throw new RuntimeException("이미 사용중인 이메일입니다");
//     }

//     // 회원 가입 처리
//     User user = new User();
//     user.setUsername(request.getUsername());
//     // ... 나머지 필드 설정
//     return userRepository.save(user);
// }
