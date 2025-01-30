package io.github.chanfirstproject.chan_firstproject.config;

import java.util.Properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfig {
  
  @Bean
  public JavaMailSender javaMailSender() {
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost("${MAIL_HOST}");
    mailSender.setPort(Integer.parseInt("${MAIL_PORT}"));
    mailSender.setUsername("${MAIL_USERNAME}");
    mailSender.setPassword("${MAIL_PASSWORD}");

    Properties props = mailSender.getJavaMailProperties();
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");

    return mailSender;
  }
}
