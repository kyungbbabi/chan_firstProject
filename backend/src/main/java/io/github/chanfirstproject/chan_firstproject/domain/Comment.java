package io.github.chanfirstproject.chan_firstproject.domain;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Comment {
  
  @Id @GeneratedValue
  private Long id;

  @ManyToOne
  private Comment parentComment;

  @OneToMany(mappedBy = "parentComment")
  private List<Comment> childComments;

}
