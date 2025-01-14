package io.github.chanfirstproject.chan_firstproject.dto;

import lombok.Builder;
import lombok.Data;

// RegisterRequest DTO가 누락되어 있습니다
// Response DTO에 JWT 토큰을 담을 필드가 필요합니다
// 각 DTO 클래스들을 static으로 변경하는 것이 좋습니다

public class UserDto {
  
  @Data
  public static class LoginRequest {
    
    private String username;
    private String password;
    
  }
  
  @Data
  public static class RegisterRequest {
    private String username;
    private String password;
    private String email;
  }

  @Data
  public static class UpdateRequest {
    private String currentPassword;
    private String newPassword;
    private String email;
  }

  @Data
  @Builder
  public static class Response {
    
    private Long id;
    private String username;
    private String password;
    private String email;
    private String accessToken;
    
  }

}
