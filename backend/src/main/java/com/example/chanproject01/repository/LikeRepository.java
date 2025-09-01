package com.example.chanproject01.repository;

import com.example.chanproject01.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {

    // 특정 콘텐츠의 좋아요 수 카운트
    long countByContentTypeAndContentId(Like.ContentType contentType, Long contentId);

    // 특정 사용자의 특정 콘텐츠 좋아요 조회
    Optional<Like> findByUserIdAndContentTypeAndContentId(Long userId, Like.ContentType contentType, Long contentId);

    // 특정 사용자의 모든 좋아요 조회
    List<Like> findByUserIdOrderByCreatedAtDesc(Long userId);

    // 특정 사용자의 특정 타입 좋아요만 조회
    List<Like> findByUserIdAndContentTypeOrderByCreatedAtDesc(Long userId, Like.ContentType contentType);

    // 특정 사용자의 좋아요 수 카운트
    long countByUserId(Long userId);

    // 특정 사용자의 특정 타입좋아요 수 카운트
    long countByUserIdAndContentType(Long userId, Like.ContentType contentType);

    // 특정 콘텐츠에 좋아요를 누른 사용자들 조회
    List<Like> findByContentTypeAndContentIdOrderByCreatedAtDesc(Like.ContentType contentType, Long contentId);

}
