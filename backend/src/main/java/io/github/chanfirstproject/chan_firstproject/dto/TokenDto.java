package io.github.chanfirstproject.chan_firstproject.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TokenDto {
  private String accessToken;
  private String refreshToken;
}
