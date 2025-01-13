package io.github.chanfirstproject.chan_firstproject.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import io.github.chanfirstproject.chan_firstproject.security.jwt.provider.JwtTokenProvider;

// SecurityConfig 보완

// 현재 SecurityConfig에서는 기본적인 CSRF 비활성화와 세션 관리만 설정되어 있습니다.
// API 엔드포인트별 접근 권한 설정이 필요합니다 (예: /login, /register는 누구나 접근 가능하게, 나머지는 인증 필요하도록)
// JwtAuthenticationFilter를 SecurityFilterChain에 추가해야 합니다

@Configuration            // 스프링 빈 설정 클래스로 지정
@EnableWebSecurity        // 스프링 시큐리티 설정 빈으로 등록
public class SecurityConfig {
  
  // JWT 토큰 제공자 주입 필요
  private final JwtTokenProvider jwtTokenProvider;

  public SecurityConfig(JwtTokenProvider jwtTokenProvider) {
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    // CSRF(Cross-Site Request Forgery) 공격 방어 기능 비활성화, React에서 API를 호출할 때 CSRF 토큰 검증이 불필요하고 오히려 방해가 됨
    http.csrf(csrf -> csrf.disable());
    
    //JWT 토큰 기반 인증을 사용하므로 세션을 stateless로 설정, JWT는 상태를 저장하지 않는(stateless) 인증 방식 서버에 세션을 저장하지 않고 토큰으로만 인증을 처리하므로 이 설정이 필요
    http.sessionManagement(session -> session
      .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    );

    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

}