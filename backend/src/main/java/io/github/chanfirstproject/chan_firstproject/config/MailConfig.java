package io.github.chanfirstproject.chan_firstproject.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfig {
  
  @Bean
  public JavaMailSender javaMailSender(@Value("${spring.mail.platform:gmail}")String platform) {
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

    switch (platform) {
      case "naver":
        mailSender.setHost("");
        mailSender.setPort(Integer.parseInt(""));        
        break;
      case "kakao":
        mailSender.setHost("");
        mailSender.setPort(Integer.parseInt(""));
        break;
      default:
        mailSender.setHost("");
        mailSender.setPort(Integer.parseInt(""));
        break;
    }

    mailSender.setUsername(environment.getProperty("spring.mail." + platform + ".username"));
    mailSender.setPassword(environment.getProperty("spring.mail." + platform + ".password"));

    Properties props = mailSender.getJavaMailProperties();
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");

    return mailSender;
  }
}
