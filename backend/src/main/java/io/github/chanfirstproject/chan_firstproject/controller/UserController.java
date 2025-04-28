package io.github.chanfirstproject.chan_firstproject.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.github.chanfirstproject.chan_firstproject.domain.User;
import io.github.chanfirstproject.chan_firstproject.dto.UserDto;
import io.github.chanfirstproject.chan_firstproject.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PutMapping;


@RestController // JSON 응답을 반환하는 REST API 컨트롤러
@RequiredArgsConstructor // 생성자 주입을 위한 Lombok 어노테이션
public class UserController{

  private UserService userService;

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody UserDto.LoginRequest request){
  
    try {
      UserDto.Response userResponse = userService.login(request); // 서비스 호출하여 로그인 처리
      return ResponseEntity.ok(userResponse); // 성공 시 200 OK와 함께 응답 데이터 반환
    } catch (Exception e) { // 실패 시 400 Bad Request와 에러 메시지 반환
      return ResponseEntity
        .badRequest()
        .body(new ErrorResponse(e.getMessage()));
    }
  
  }

  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody UserDto.RegisterRequest request) {
    try {
      User user = userService.register(request); // 서비스 호출하여 회원가입 처리
      return ResponseEntity // 성공 시 201 Created와 함께 생성된 사용자 정보 반환
        .status(HttpStatus.CREATED)
        .body(user);
    } catch (Exception e) { // 실패 시 400 Bad Request와 에러 메시지 반환
      return ResponseEntity
        .badRequest()
        .body(new ErrorResponse(e.getMessage()));
    }
    
  }

  // 이메일 전송
  @PostMapping("/verify-email")
  public ResponseEntity<?> verifyEmail(@RequestParam String email, @RequestParam String code) {
    try {
      userService.verifyEmail(email, code);
      return ResponseEntity.ok().body(new SuccessResponse("이메일이 성공적으로 인증되었습니다."));
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
    }
  }
  
  // 비밀번호 재설정
  @PostMapping("/forget-password")
  public ResponseEntity<?> forgetPassword(@RequestParam String email) {
    userService.sendPasswordResetEmail(email);
    return ResponseEntity.ok().body("비밀번호 재설정 링크가 이메일로 전송되었습니다.");
  }

  @PostMapping("/reset-password")
  public ResponseEntity<?> resetPassword(@RequestParam String token, @RequestParam String newPassword) {
    userService.resetPassword(token, newPassword);
    return ResponseEntity.ok().body("비밀번호가 성공적으로 재설정되었습니다.");
  }
  
  // 사용자 정보 수정
  @PutMapping("/user/profile")
  public ResponseEntity<?> updateProfile(@AuthenticationPrincipal String username, @RequestBody UserDto.UpdateRequest request) {
    try {
      UserDto.Response updatedUser = userService.updateProfile(username, request);
      return ResponseEntity.ok(updatedUser);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
    }
  }
  
  // 에러 응답용 내부 클래스
  @Getter
  @AllArgsConstructor
  private static class ErrorResponse {
    private String message;
  }

  @Getter
  @AllArgsConstructor
  private static class SuccessResponse {
    private String message;
  }
  
}