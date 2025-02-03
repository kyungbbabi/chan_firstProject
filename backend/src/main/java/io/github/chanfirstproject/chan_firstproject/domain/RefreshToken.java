package io.github.chanfirstproject.chan_firstproject.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class RefreshToken {
  @Id
  private String id;
  private String token;
  private LocalDateTime expiryDate;
}
