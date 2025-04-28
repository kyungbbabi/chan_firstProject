package io.github.chanfirstproject.chan_firstproject.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

// 현재 User 엔티티에 필요한 어노테이션들이 부족합니다
// ID 필드에 @Id와 @GeneratedValue 추가 필요
// 각 필드에 적절한 제약조건 추가 필요 (@Column, nullable, length 등)

@Entity
@Data
@Builder
public class User {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true, length = 50)
  private String username;

  @Column(nullable = false, length = 100)
  private String password;

  @Column(nullable = false, unique = true, length = 100)
  private String email;

  
  @Column(length = 100)
  private String recoveryEmail;

  @Column(length = 10)
  private String gender;

  @Column(length = 10)
  private String emailVerificationCode;

  @Column
  private boolean emailVerified;

  @Column
  private String passwordResetToken;

  @Column
  private LocalDateTime passwordResetTokenExpiry;

}
