package com.example.chanproject01.controller;

import com.example.chanproject01.dto.blog.BlogPageResponseDto;
import com.example.chanproject01.dto.blog.BlogRequestDto;
import com.example.chanproject01.dto.blog.BlogResponseDto;
import com.example.chanproject01.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/blog")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST})
public class BlogController {

    private final BlogService blogService;

    @GetMapping
    public ResponseEntity<BlogPageResponseDto> getPosts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "8") int size) {
        System.out.println("블로그 목록 조회 API 호출됨 - page: " + page + ", size: " + size);
        BlogPageResponseDto response = blogService.getPosts(page, size);
        System.out.println("응답 데이터: " + response);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BlogResponseDto> getPost(@PathVariable Long id) {
        BlogResponseDto response = blogService.getPost(id);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<BlogResponseDto> createPost(@RequestBody BlogRequestDto blogRequestDto) {
        BlogResponseDto response = blogService.createPost(blogRequestDto);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BlogResponseDto> updatePost(@PathVariable Long id, @RequestBody BlogRequestDto blogRequestDto) {
        BlogResponseDto response = blogService.updatePost(id, blogRequestDto);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<BlogResponseDto> deletePost(@PathVariable Long id) {
        blogService.deletePost(id);
        return ResponseEntity.ok().build();
    }

}
