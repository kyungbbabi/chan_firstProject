package com.example.chanproject01.service;

import com.example.chanproject01.dto.blog.BlogPageResponseDto;
import com.example.chanproject01.dto.blog.BlogRequestDto;
import com.example.chanproject01.dto.blog.BlogResponseDto;
import com.example.chanproject01.entity.Blog;
import com.example.chanproject01.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;

    @Transactional(readOnly = true)
    public BlogPageResponseDto getPosts(int page, int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "date"));
        Page<Blog> blogPage = blogRepository.findAll(pageable);
        List<BlogResponseDto> posts = blogPage.getContent().stream()
                .map(this::convertToResponseDto)
                .collect(Collectors.toList());

        return BlogPageResponseDto.builder()
                .posts(posts)
                .totalPosts(blogPage.getTotalElements())
                .currentPage(page + 1)
                .totalPages(blogPage.getTotalPages())
                .build();

    }

    // 개별 블로그 조회
    @Transactional(readOnly = true)
    public BlogResponseDto getPost(Long id) {

        Blog blog = blogRepository.findById(id).orElseThrow(() -> new RuntimeException("Blog not found" + id));
        return convertToResponseDto(blog);

    }

    public BlogResponseDto createPost(BlogRequestDto blogRequestDto) {

        Blog blog = Blog.builder()
                .title(blogRequestDto.getTitle())
                .summary(blogRequestDto.getSummary())
                .content(blogRequestDto.getContent())
                .author(blogRequestDto.getAuthor())
                .likes(0)
                .comments(0)
                .build();

        Blog savedBlog = blogRepository.save(blog);
        return convertToResponseDto(savedBlog);
    }

    public BlogResponseDto updatePost(Long id, BlogRequestDto blogRequestDto) {

        Blog blog = blogRepository.findById(id).orElseThrow(() -> new RuntimeException("Blog not found" + id));
        Blog updatedBlog = Blog.builder()
                .id(blog.getId())
                .title(blogRequestDto.getTitle())
                .summary(blogRequestDto.getSummary())
                .content(blogRequestDto.getContent())
                .author(blog.getAuthor())
                .date(blog.getDate())
                .likes(blog.getLikes())
                .comments(blog.getComments())
                .build();

        Blog savedBlog = blogRepository.save(updatedBlog);
        return convertToResponseDto(savedBlog);

    }

    public void deletePost(Long id) {

        if (!blogRepository.existsById(id)) {
            throw new RuntimeException("Blog not found" + id);
        }

        blogRepository.deleteById(id);

    }

    public BlogResponseDto convertToResponseDto(Blog blog) {
        return BlogResponseDto.builder()
                .id(blog.getId())
                .title(blog.getTitle())
                .summary(blog.getSummary())
                .content(blog.getContent())
                .author(blog.getAuthor())
                .date(blog.getDate())
                .likes(blog.getLikes())
                .comments(blog.getComments())
                .build();
    }
}
