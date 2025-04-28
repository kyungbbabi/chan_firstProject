package io.github.chanfirstproject.chan_firstproject.service;

import org.springframework.stereotype.Service;

import io.github.chanfirstproject.chan_firstproject.controller.RefreshTokenRepository;
import io.github.chanfirstproject.chan_firstproject.domain.RefreshToken;
import io.github.chanfirstproject.chan_firstproject.dto.TokenDto;
import io.github.chanfirstproject.chan_firstproject.security.jwt.provider.JwtTokenProvider;
import io.github.chanfirstproject.chan_firstproject.service.UserService.InvalidTokenException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TokenService {
  private final JwtTokenProvider jwtTokenProvider;
  private final RefreshTokenRepository refreshTokenRepository;

  public TokenDto refreshToken(String refreshToken) {
    // 1. Refresh 토큰 유효성 검증
    if (!jwtTokenProvider.validateToken(refreshToken)) {
      throw new InvalidTokenException("Invalid refresh token");
    }

    // 2. Refresh 토큰으로부터 사용자 정보 추출
    String username = jwtTokenProvider.getUsername(refreshToken);
    
    // 3. DB에 저장된 Refresh 토큰과 비교
    RefreshToken storedToken = refreshTokenRepository.findById(username)
        .orElseThrow(() -> new InvalidTokenException("Refresh token not found"));
        
    if (!storedToken.getToken().equals(refreshToken)) {
        throw new InvalidTokenException("Refresh token mismatch");
    }

    // 4. 새로운 토큰 발급
    return jwtTokenProvider.createToken(username);
  }
}
