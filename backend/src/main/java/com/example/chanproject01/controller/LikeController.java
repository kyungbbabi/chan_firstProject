package com.example.chanproject01.controller;

import com.example.chanproject01.dto.like.LikeRequestDto;
import com.example.chanproject01.dto.like.LikeResponseDto;
import com.example.chanproject01.service.LikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/likes")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class LikeController {

    private final LikeService likeService;

    @PostMapping("/toggle")
    public ResponseEntity<LikeResponseDto> toggleLike(@RequestBody LikeRequestDto likeRequestDto, @RequestParam Long userId) {
        try {
            LikeResponseDto response = likeService.toggleLike(likeRequestDto, userId);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<LikeResponseDto>> getUserLikesList(@RequestParam String contentType ,@RequestParam Long userId) {
        try {
            List<LikeResponseDto> likeUsers = likeService.getLikeUsersList(contentType, userId);
            return ResponseEntity.ok(likeUsers);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/status")
    public ResponseEntity<LikeResponseDto> getCurrentUserLikesStatus(@RequestParam String contentType, @RequestParam Long contentId, @RequestParam Long userId) {
        try {
            LikeResponseDto response = likeService.getCurrentUserLikesStatus(contentType, contentId, userId);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> getLikeCount(@RequestParam String contentType, @RequestParam Long contentId) {
        try {
            LikeResponseDto response = likeService.getCurrentUserLikesStatus(contentType, contentId, null);
            Map<String, Long> result = new HashMap<>();
            result.put("count", response.getLikeCount());
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
