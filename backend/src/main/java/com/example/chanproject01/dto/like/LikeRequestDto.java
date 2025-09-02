package com.example.chanproject01.dto.like;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LikeRequestDto {
    private Long userId;
    private String contentType;
    private Long contentId;
}
