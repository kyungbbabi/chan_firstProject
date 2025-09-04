package com.example.chanproject01.dto.like;

import com.example.chanproject01.entity.Like;
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
    private LocalDateTime currentUserLikedAt;

    public static LikeResponseDto of(Long userId, String contentType, Long contentId,
                                     Long likeCount, boolean isLiked) {
        return LikeResponseDto.builder()
                .userId(userId)
                .contentType(contentType)
                .contentId(contentId)
                .likeCount(likeCount)
                .isLiked(isLiked)
                .build();
    }

    // 현재 사용자의 좋아요 시간 포함
    public static LikeResponseDto withUserLikeTime(Long userId, String contentType, Long contentId,
                                                   Long likeCount, boolean isLiked, LocalDateTime userLikedAt) {
        return LikeResponseDto.builder()
                .userId(userId)
                .contentType(contentType)
                .contentId(contentId)
                .likeCount(likeCount)
                .isLiked(isLiked)
                .currentUserLikedAt(userLikedAt)
                .build();
    }

}
