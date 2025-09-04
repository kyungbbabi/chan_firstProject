package com.example.chanproject01.service;

import com.example.chanproject01.dto.like.LikeRequestDto;
import com.example.chanproject01.dto.like.LikeResponseDto;
import com.example.chanproject01.entity.Like;
import com.example.chanproject01.entity.User;
import com.example.chanproject01.repository.LikeRepository;
import com.example.chanproject01.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LikeService {

    private final LikeRepository likeRepository;
    private final UserRepository userRepository;

    @Transactional
    public LikeResponseDto toggleLike(LikeRequestDto requestDto, Long userId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));
        Like.ContentType contentType = Like.ContentType.valueOf(requestDto.getContentType());

        Optional<Like> existingLike = likeRepository.findByUserIdAndContentTypeAndContentId(userId, contentType, requestDto.getContentId());

        boolean isLiked;
        LocalDateTime userLikedAt = null;

        if (existingLike.isPresent()) {
            likeRepository.delete(existingLike.get());
            isLiked = false;
        } else {
            Like newLike = Like.builder()
                    .user(user)
                    .contentType(contentType)
                    .contentId(requestDto.getContentId())
                    .build();
            likeRepository.save(newLike);
            isLiked = true;
            userLikedAt = LocalDateTime.now();
        }

        long totalLikes = likeRepository.countByContentTypeAndContentId(contentType, requestDto.getContentId());

        return LikeResponseDto.withUserLikeTime(userId, requestDto.getContentType(), requestDto.getContentId(), totalLikes, isLiked, userLikedAt);

    }

    /* 좋아요 누른 사용자들 목록 */
    @Transactional(readOnly = true)
    public List<LikeResponseDto> getLikeUsersList(String contentType, Long contentId) {

        Like.ContentType type = Like.ContentType.valueOf(contentType);
        List<Like> likes = likeRepository.findByContentTypeAndContentIdOrderByCreatedAtDesc(type, contentId);

        return likes.stream()
                .map(like -> LikeResponseDto.builder()
                        .userId(like.getUser().getId())
                        .currentUserLikedAt(like.getCreatedAt())
                        .build())
                .collect(Collectors.toList());

    }

    /* 특정 사용자의 좋아요 상태(순서0 */
    @Transactional(readOnly = true)
    public LikeResponseDto getCurrentUserLikesStatus(String contentType, Long contentId, Long userId) {

        Like.ContentType type = Like.ContentType.valueOf(contentType);
        Optional<Like> userLike = likeRepository.findByUserIdAndContentTypeAndContentId(userId, type, contentId);

        boolean isLiked =  userLike.isPresent();
        LocalDateTime userLikedAt = userLike.map(Like::getCreatedAt).orElse(null);
        long totalLikes = likeRepository.countByContentTypeAndContentId(type, contentId);

        return LikeResponseDto.withUserLikeTime(userId, contentType, contentId, totalLikes, isLiked, userLikedAt);

    }
}
