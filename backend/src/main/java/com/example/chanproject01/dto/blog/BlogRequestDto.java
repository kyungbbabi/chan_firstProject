package com.example.chanproject01.dto.blog;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogRequestDto {
    private String title;
    private String summary;
    private String content;
    private String author;
}
