package com.example.chanproject01.repository;

import com.example.chanproject01.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long> {

}
