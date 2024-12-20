package io.github.chanfirstproject.chan_firstproject.security.jwt.constants;
  
  // JWT 관련 상수 값들 저장 / 토큰 만료 시간 / 토큰 접두사 ("Bearer ") / 시크릿키 참조 등

public final class SecurityConstants {

  // JWT 토큰을 HTTP 헤더에서 식별하는 데 사용되는 헤더 이름
  public static final String TOKEN_HEADER = "Authorization";

  // JWT 토큰의 접두사. 일반적으로 "Bearer " 다음에 실제 토큰이 옵니다.
  public static final String TOKEN_PREFIX = "Bearer";

  // JWT 토큰의 타입을 나타내는 상수
  public static final String TOKEN_TYPE = "JWT";

}