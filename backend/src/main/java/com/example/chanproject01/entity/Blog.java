package com.example.chanproject01.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "blog")
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
