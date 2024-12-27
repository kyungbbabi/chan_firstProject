package io.github.chanfirstproject.chan_firstproject.prop;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@ConfigurationProperties("spring.jwt")
@Data
public class JwtProps {

  // spring.jwt.secret로 지정된 프로퍼티 값을 주입받는 필드
  // spring.jwt.secret ➡ secret : {인코딩된 시크릿 키}
  private String secret;
  
}