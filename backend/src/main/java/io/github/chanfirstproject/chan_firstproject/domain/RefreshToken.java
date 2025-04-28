package io.github.chanfirstproject.chan_firstproject.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RefreshToken {
  @Id
  private String id;
  private String token;
  private LocalDateTime expiryDate;

  public void updateToken(String token){
    this.token = token;
    this.expiryDate = LocalDateTime.now().plusDays(1);
  }

  public boolean isTokenValid(){
    return this.expiryDate.isAfter(LocalDateTime.now());
  }
}
