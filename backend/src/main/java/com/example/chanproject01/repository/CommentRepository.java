package com.example.chanproject01.repository;

import com.example.chanproject01.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Long> {

    // 특정 콘텐츠의 모든 댓글 조회
    List<Comment> findByContentTypeAndContentIdOrderByCreatedAtAsc(Comment.ContentType contentType, Long contentId);

    // 특정 콘텐츠의 댓글 수 카운트
    long countByContentTypeAndContentId(Comment.ContentType contentType, Long contentId);

    // 특정 사용자의 댓글 수 카운트
    long countByUserId(Long userId);

    // 특정 사용자의 모든 댓글 조회
    List<Comment> findByUserIdOrderByCreatedAtDesc(Long userId);

    // 특정 사용자의 특정 타입 댓글 조회
    List<Comment> findByUserIdAndContentTypeOrderByCreatedAtDesc(Long userId, Comment.ContentType contentType);

    // 특정 콘텐츠의 특정 사용자가 작성한 댓글 조회
    List<Comment> findByUserIdAndContentTypeAndContentId(Long userId, Comment.ContentType contentType, Long contentId);


}
