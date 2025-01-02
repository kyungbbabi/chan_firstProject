package io.github.chanfirstproject.chan_firstproject.domain;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class User {
  
  private Long id;
  private String username;
  private String password;
  private String email;

}
