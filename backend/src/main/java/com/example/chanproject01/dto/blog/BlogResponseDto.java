package com.example.chanproject01.dto.blog;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogResponseDto {
    private Long id;
    private String title;
    private String summary;
    private String content;
    private String author;
    private LocalDateTime date;
    private Integer likes;
    private Integer comments;
}
