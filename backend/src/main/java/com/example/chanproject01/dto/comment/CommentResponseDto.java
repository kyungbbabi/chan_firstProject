package com.example.chanproject01.dto.comment;

import com.example.chanproject01.entity.Comment;
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

    public static CommentResponseDto from(Comment comment) {
        return CommentResponseDto.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .contentType(comment.getContentType().name())
                .contentId(comment.getContentId())
                .userId(comment.getUser().getId())
                .userName(comment.getUser().getUsername())
                .createTime(comment.getCreatedAt())
                .updateTime(comment.getUpdatedAt())
                .build();
    }
}
