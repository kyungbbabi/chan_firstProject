package io.github.chanfirstproject.chan_firstproject.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import io.github.chanfirstproject.chan_firstproject.dto.UserDto;
// import io.github.chanfirstproject.chan_firstproject.service.UserService;

public class UserController{

  // private UserService userService;

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody UserDto.LoginRequest request){
    return null;
    //로그인 처리 ex
    //  try {
        // 서비스 호출하여 로그인 처리
    //     UserDto.Response userResponse = userService.login(request);
        
        // 성공 시 200 OK와 함께 응답 데이터 반환
    //     return ResponseEntity.ok(userResponse);
    // } catch (Exception e) {
        // 실패 시 400 Bad Request와 함께 에러 메시지 반환
    //     return ResponseEntity
    //             .badRequest()
    //             .body(new ErrorResponse(e.getMessage()));
    // }
  }
  
}