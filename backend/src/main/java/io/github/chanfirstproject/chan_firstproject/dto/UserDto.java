package io.github.chanfirstproject.chan_firstproject.dto;

import lombok.Data;

public class UserDto {
  
  @Data
  public class LoginRequest {
    
    private String username;
    private String password;
    
  }

  @Data
  public class Response {
    
    private Long id;
    private String username;
    private String password;
    
  }

}
