package io.github.chanfirstproject.chan_firstproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
  
  @Autowired
  private JavaMailSender emailSender; 

  public void sendVerificationEmail(String to, String code){
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo(to);
    message.setSubject("이메일 인증");
    message.setText("인증 코드:"+ code);
    emailSender.send(message);
  }

  public void sendPasswordResetEmail(String to, String token){
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo(to);
    message.setSubject("비밀번호 재설정");
    message.setText("재설정 링크:" + token);
    emailSender.send(message);
  }

}
