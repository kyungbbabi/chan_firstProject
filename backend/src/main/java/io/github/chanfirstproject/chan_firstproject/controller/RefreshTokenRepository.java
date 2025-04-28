package io.github.chanfirstproject.chan_firstproject.controller;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.chanfirstproject.chan_firstproject.domain.RefreshToken;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, String>{
  Optional<RefreshToken> findByToken(String token);
}
