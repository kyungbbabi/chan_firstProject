package com.example.chanproject01.dto.comment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentRequestDto {
    private Long userId;
    private String content;
    private String contentType;
    private Long contentId;
}
