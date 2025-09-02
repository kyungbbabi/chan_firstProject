package com.example.chanproject01.dto.like;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LikeResponseDto {
    private Long userId;
    private Long likeCount;     // 총 좋아요 수
    private boolean isLiked;    // 좋아요를 눌렀는지
    private String contentType;
    private Long contentId;
    private LocalDateTime createdAt;
}
