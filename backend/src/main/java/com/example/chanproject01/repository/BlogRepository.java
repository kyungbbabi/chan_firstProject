package com.example.chanproject01.repository;

import com.example.chanproject01.entity.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {

    Page<Blog> findAllByOrderByIdDesc(Pageable pageable);
    Page<Blog> findByTitle(String title, Pageable pageable);
    Page<Blog> findByAuthor(String author, Pageable pageable);

}
