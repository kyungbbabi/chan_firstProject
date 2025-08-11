package com.example.chanproject01.dto.blog;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogPageResponseDto {
    private List<BlogResponseDto> posts;    // 실제 블로그 목록
    private List<BlogResponseDto> thumbnailUrl;
    private Long totalPosts;
    private Integer currentPage;
    private Integer totalPages;
}
