package com.example.chanproject01.entity;

import jakarta.persistence.*;
import jdk.jfr.ContentType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "likes")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ContentType contentType;

    private Long contentId;
    private LocalDateTime createdAt;

    @PrePersist
    protected  void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public enum ContentType {
        Blog, PORTFOLIO
    }

}
