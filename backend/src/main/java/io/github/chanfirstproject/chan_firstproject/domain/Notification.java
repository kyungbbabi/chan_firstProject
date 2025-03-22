package io.github.chanfirstproject.chan_firstproject.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Notification {
  
  @Id @GeneratedValue
  private Long id;

  @ManyToOne
  private User user;
  
}
