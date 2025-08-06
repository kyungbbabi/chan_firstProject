package com.example.chanproject01.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "blog")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String summary;
    private String content;
    private String author;
    private LocalDateTime date;
    private Integer likes;
    private Integer comments;

    @PrePersist
    protected void onCreate() {
        date = LocalDateTime.now();
    }
}
