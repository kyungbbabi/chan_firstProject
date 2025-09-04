package com.example.chanproject01.service;

import com.example.chanproject01.dto.comment.CommentRequestDto;
import com.example.chanproject01.dto.comment.CommentResponseDto;
import com.example.chanproject01.entity.Comment;
import com.example.chanproject01.entity.User;
import com.example.chanproject01.repository.CommentRepository;
import com.example.chanproject01.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    @Transactional
    public CommentResponseDto createComment(CommentRequestDto requestDto, Long userId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));
        Comment.ContentType contentType = Comment.ContentType.valueOf(requestDto.getContentType());

        Comment comment = Comment.builder()
                .content(requestDto.getContent())
                .user(user)
                .contentType(contentType)
                .contentId(requestDto.getContentId())
                .build();

        Comment savedComment = commentRepository.save(comment);

        return CommentResponseDto.from(savedComment);

    }

    @Transactional(readOnly = true)
    public List<CommentResponseDto> getComments(String contentType, Long contentId ,Long userId) {

        Comment.ContentType type = Comment.ContentType.valueOf(contentType);
        List<Comment> comments = commentRepository.findByContentTypeAndContentIdOrderByCreatedAtAsc(type, contentId);

        return comments.stream()
                .map(CommentResponseDto::from)
                .collect(Collectors.toList());

    }

    @Transactional
    public CommentResponseDto updateComment(Long commentId, CommentRequestDto requestDto, Long userId) {

        Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new RuntimeException("댓글을 찾을 수 없습니다."));
        if (!comment.getUser().getId().equals(userId)) { throw new RuntimeException("수정 권한이 없습니다."); }

        Comment updatedComment = Comment.builder()
                .id(comment.getId())
                .content(requestDto.getContent())
                .user(comment.getUser())
                .contentType(comment.getContentType())
                .contentId(comment.getContentId())
                .createdAt(comment.getCreatedAt())
                .build();

        Comment savedComment = commentRepository.save(updatedComment);
        return CommentResponseDto.from(savedComment);

    }

    @Transactional
    public void deleteComment(Long commentId, Long userId) {

        Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new RuntimeException("댓글을 찾을 수 없습니다."));
        if (!comment.getUser().getId().equals(userId)) { throw new RuntimeException("삭제 권한이 없습니다."); }

        commentRepository.delete(comment);

    }

    @Transactional(readOnly = true)
    public long getCommentCount(String contentType, Long contentId) {

        Comment.ContentType type = Comment.ContentType.valueOf(contentType);
        return commentRepository.countByContentTypeAndContentId(type, contentId);

    }

}
