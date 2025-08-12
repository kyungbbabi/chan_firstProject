package com.example.chanproject01.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Service
public class ImageUploadService {

    @Value("${app.upload.dir:uploads}")
    private String uploadDir;
    @Value("${app.upload.url:http://localhost:8080/images}")
    private String baseUrl;

    public String uploadImage(MultipartFile file, String subDir) throws IOException {

        // 저장경로 생성
        String datePath = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
        Path uploadPath = Paths.get(uploadDir, subDir, datePath);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);    // 디렉토리 생성
        }

        // 고유한 파일명 생성
        String originalFileName = file.getOriginalFilename();
        String fileExtension = getFileExtension(originalFileName);
        String uniqueFileName = UUID.randomUUID().toString() + fileExtension;

        // 파일 저장
        Path filePath = uploadPath.resolve(uniqueFileName);
        Files.copy(file.getInputStream(), filePath);

        return baseUrl + "/" + subDir + "/" + datePath + "/" + uniqueFileName;

    }

    public String uploadThumbnail(MultipartFile file) throws IOException {
        return uploadImage(file, "thumbnails");
    }

    public String uploadContentImage(MultipartFile file) throws IOException {
        return uploadImage(file, "content");
    }

    public boolean deleteImage(String imageUrl) {
        try {
            String filePath = imageUrl.replace(baseUrl, uploadDir);
            Path path = Paths.get(filePath);
            return Files.deleteIfExists(path);
        } catch (IOException e) {
            return false;
        }
    }

    private void validateImage(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("File is empty");
        }

        String contentType = file.getContentType();
        if (contentType == null || !contentType.startsWith("image/")) {
            throw new IllegalArgumentException("Invalid image type");   // 파일 형식 검증, 이미지 파일만 업로드 가능
        }

        String fileName = file.getOriginalFilename();
        if (fileName != null) {
            String extension = getFileExtension(fileName).toLowerCase();
            if (!extension.matches("\\.(jpg|jpeg|png|gif)$")) {
                throw new IllegalArgumentException("Invalid image extension");  // 허용되는 확장자
            }
        }
    }

    private String getFileExtension(String originalFileName) {
        if (originalFileName == null || !originalFileName.contains(".")) {
            return "";
        }
        return originalFileName.substring(originalFileName.lastIndexOf("."));
    }

}
