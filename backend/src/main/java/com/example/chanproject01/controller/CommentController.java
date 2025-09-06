package com.example.chanproject01.controller;

import com.example.chanproject01.dto.comment.CommentRequestDto;
import com.example.chanproject01.dto.comment.CommentResponseDto;
import com.example.chanproject01.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<CommentResponseDto> createComment(@RequestBody CommentRequestDto commentRequestDto, @RequestParam Long userId) {
        try {
            CommentResponseDto response = commentService.createComment(commentRequestDto, userId);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<CommentResponseDto>> getComments(@RequestParam String contentType, @RequestParam Long contentId, @RequestParam Long userId) {
        try {
            List<CommentResponseDto> comments = commentService.getComments(contentType, contentId, userId);
            return ResponseEntity.ok(comments);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> getCommentsCount(@RequestParam String contentType, @RequestParam Long contentId) {
        try {
            long count = commentService.getCommentCount(contentType, contentId);
            Map<String, Long> response = new HashMap<>();
            response.put("count", count);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{commentId}")
    public ResponseEntity<CommentResponseDto> updateComment(@PathVariable Long commentId, @RequestBody CommentRequestDto commentRequestDto, @RequestParam Long userId) {
        try {
            CommentResponseDto response = commentService.updateComment(commentId, commentRequestDto, userId);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Map<String, String>> deleteComment(@PathVariable Long commentId,  @RequestParam Long userId) {
        try {
            commentService.deleteComment(commentId, userId);
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, String> errorResponse = new HashMap<>();
            if (e.getMessage().contains("삭제 권한이 없습니다.")) {
                errorResponse.put("error", "삭제 권한이 없습니다.");
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorResponse);
            }
            else if (e.getMessage().contains("댓글을 찾을 수 없습니다.")) {
                return ResponseEntity.notFound().build();
            }
            errorResponse.put("message", "삭제에 실패했습니다.");
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }

}
