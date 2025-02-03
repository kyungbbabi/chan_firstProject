package io.github.chanfirstproject.chan_firstproject.security.jwt.provider;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.github.chanfirstproject.chan_firstproject.prop.JwtProps;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

// 실제 JWT 토큰을 생성 / 토큰 유효성 검증 / 토큰에서 사용자 정보 추출
@Component
public class JwtTokenProvider {

  private final Key key;
  private final long accessTokenValidityInMilliseconds = 1000L * 60 * 60; // 1시간
  private final long refreshTokenValidityInMilliseconds = 1000L * 60 * 60; // 1시간

  public JwtTokenProvider(JwtProps JwtProps ){
    // secret key를 Base64로 인코딩된 바이트 배열로 변환 후 Key 객체 생성
    byte[] keyBytes = Decoders.BASE64.decode(JwtProps.getSecret());
    this.key = Keys.hmacShaKeyFor(keyBytes);
  }

  // 토큰 생성 메소드
  public String createToken(String username) {
    String accessToken = createAccessToken(username);
    String refreshToken = createRefreshToken(username);
    
    Claims claims = Jwts.claims().setSubject(username);
    Date now = new Date();
    Date validity = new Date(now.getTime() + accessTokenValidityInMilliseconds);

    return Jwts.builder()
      .setClaims(claims)        // 클레임 설정
      .setIssuedAt(now)         // 발행시간
      .setExpiration(validity)  // 만료시간
      .signWith(key)            // 키로 서명
      .compact();               // 최종 토큰 생성
  }

  // 토큰에서 사용자명 추출하는 메소드
  public String getUsername(String token) {
    return Jwts.parserBuilder() // JWT 파서 생성
      .setSigningKey(key)       // 검증할 키 설정
      .build()                  // 파서 빌드
      .parseClaimsJws(token)    // 토큰 생성
      .getBody()                // Claims 얻기
      .getSubject();            // 사용자명 추출
  }

}