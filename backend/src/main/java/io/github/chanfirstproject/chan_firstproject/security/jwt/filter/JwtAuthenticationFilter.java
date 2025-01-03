package io.github.chanfirstproject.chan_firstproject.security.jwt.filter;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.github.chanfirstproject.chan_firstproject.security.jwt.provider.JwtTokenProvider;
import io.github.chanfirstproject.chan_firstproject.security.jwt.constants.SecurityConstants;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

// 요청이 들어올 때 JWT 토큰을 확인 / 토큰이 유효한지 검사 / 인증 정보를 Spring Security Context에 저장
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter{

  @Autowired
  private JwtTokenProvider jwtTokenProvider;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    
    // 1. HTTP 요청에서 JWT 토큰 추출
    String token = resolveToken(request);

    // 2. 토큰 유효성 검사 및 인증 처리
    try {
      if( token != null && validateToken(token)) {
        
        // 토큰에서 사용자 정보 추출
        String username = jwtTokenProvider.getUsername(token);
        // Spring Security 인증 처리
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>()); // Spring Security 인증 객체 생성
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request)); // 인증 세부 정보 설정
         // SecurityContext에 Authentication 객체 저장
        SecurityContextHolder.getContext().setAuthentication(authentication);
      
      }      
    } catch (Exception e) {

      SecurityContextHolder.clearContext();
      response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT Token");
      
      return;
    }

    // 3. 다음 필터로 진행
    filterChain.doFilter(request, response);

  }

  private String resolveToken(HttpServletRequest request) {
    
    String bearerToken = request.getHeader(SecurityConstants.TOKEN_HEADER); // "Authorization" 헤더
    if (bearerToken != null && bearerToken.startsWith(SecurityConstants.TOKEN_PREFIX)) { // "Bearer "로 시작하는지 확인
      return bearerToken.substring(SecurityConstants.TOKEN_PREFIX.length());
    }
    
    return null;
  }

  // 토큰 검증 메서드
  private boolean validateToken(String token) {
    
    try {
      jwtTokenProvider.getUsername(token);
      return true;
    } catch (JwtException | IllegalArgumentException e) {
      return false;
    }
    
  }

}
