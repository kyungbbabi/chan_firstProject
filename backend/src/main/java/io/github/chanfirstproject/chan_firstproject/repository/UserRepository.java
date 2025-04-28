package io.github.chanfirstproject.chan_firstproject.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.chanfirstproject.chan_firstproject.domain.User;

@Repository //이 인터페이스가 데이터베이스 접근을 담당하는 Repository임을 Spring에게 알려주는 어노테이션
public interface UserRepository extends JpaRepository<User, Long> { 
  //User: 다룰 엔티티 클래스 타입 Long: User 엔티티의 ID(기본키) 타입 이걸 상속함으로써 기본적인 CRUD 메서드들을 모두 사용할 수 있음

  Optional<User> findByUsername(String username);
  // - username으로 사용자를 찾는 메서드
  // - Optional로 감싸서 결과가 없을 경우를 안전하게 처리

  Optional<User> findByEmail(String email);
  // - email으로 사용자를 찾는 메서드
  // - Optional로 감싸서 결과가 없을 경우를 안전하게 처리

  Optional<User> findByPasswordResetToken(String token);
  // - password찾는 메소드
  // - Optional로 감싸서 결과가 없을 경우를 안전하게 처리

  boolean existsByUsername(String username);
  // - 해당 username을 가진 사용자가 있는지 확인
  // - 회원가입 시 중복 검사할 때 사용

  boolean existsByEmail(String email);
  // - 해당 email을 가진 사용자가 있는지 확인
  // - 회원가입 시 이메일 중복 검사할 때 사용

}