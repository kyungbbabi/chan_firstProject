package com.example.chanproject01.dto.comment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentResponseDto {
    private Long id;
    private String content;
    private String contentType;
    private Long contentId;
    private Long userId;
    private String userName;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
