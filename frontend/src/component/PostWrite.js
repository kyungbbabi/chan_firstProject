import React, { useState } from "react";
import {Box, Button, Card, CardMedia, CircularProgress, Paper, TextField, Typography} from "@mui/material";
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import api from "../api";
import {blogApi} from "../api/user/blog";
import DeleteIcon from "@mui/icons-material/Delete";

const PostWrite = () => {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [contentImages, setContentImages] = useState([]);
  const [contentImageUrls, setContentImageUrls] = useState([]);

  /* 업로드 상태 */
  const [thumbnailUploading, setThumbnailUploading] = useState(false);
  const [contentUploading, setContentUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleThumbnailChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {

      if (!selectedImage.type.startsWith('image/')) {
        setError('이미지 파일만 선택 가능합니다.'); // 파일 타입 체크
        return;
      }

      setThumbnailImage(selectedImage);
      setError('');

      // 미리보기 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  /* 썸네일 업로드 */
  const uploadThumbnail = async () => {
    if (thumbnailUrl) return;
    setThumbnailUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', thumbnailUrl);
      const response = await api.post('/api/blog/upload/thumbnail', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setThumbnailUrl(response.data.imageUrl);
      setError('');
    } catch (e) {
      console.error('업로드 실패', e);
      setError('썸네일 업로드에 실패했습니다.');
    } finally { setThumbnailUploading(false); }
  };

  /* 본문 이미지 선택, 미리보기 */
  const handleContentImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => {
      if (!file.type.startsWith('image/')) {
        setError('이미지 파일만 선택 가능합니다.');
        return false;
      }
      return true;
    });

    if (validFiles.length !== selectedFiles.length) {
      return '';
    }

    setContentImages(prev => [...prev, ...validFiles]);
    setError('');

    // 미리보기 생성
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContentImages(prev => {
          prev.map( image => image === file ? { ...image, preview: reader.result } : image )
        });
      };
      reader.readAsDataURL(file);
    })
  };

  /* 본문 이미지 업로드 */
  const uploadContentImage = async () => {
    if (contentImages.length === 0) return [];
    setContentUploading(true);
    const uploadUrls = [];

    try {
      for (const image of contentImages) {
        const formData = new FormData();
        formData.append('file', image);
        const response = await api.post('/api/blog/upload/content', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        uploadUrls.push(response.data.imageUrl);
      }
      setContentImageUrls(uploadUrls);
      console.log('업로드 성공', uploadUrls);
      return uploadUrls;
    } catch (e) {
      setError('업로드 실패');
      return [];
    } finally { setContentUploading(false); }
  }

  const removeThumbnail = () => {
    setThumbnailImage(null);
    setThumbnailPreview(null);
    setThumbnailUrl('');
  }
  const removeContentImage = (index) => { setContentImages(prev => prev.filter((_, i) => i !== index)); };

  const handlePostSubmit = async () => {
    if (!title.trim()) {
      setError('제목을 입력해주세요.')
      return ;
    }
    if (!content.trim()) {
      setError('본문을 입력해주세요.');
      return ;
    }
    setSubmitting(true);
    setError('');

    try {
      if (thumbnailImage && !thumbnailUrl) {
        await uploadThumbnail(); // 1. 썸네일 이미지가 선택되었지만 아직 업로드되지 않은 경우 업로드
      }
      const uploadContentUrls = await uploadContentImage(); // 2. 본문 이미지가 있는 경우 업로드
      const blogData = {
        title: title.trim(),
        summary: summary.trim() || content.trim(0, 100) + '...',
        content: content.trim(),
        author: author,
        thumbnailUrl: thumbnailUrl,
        contentImageUrls: uploadContentUrls
      }

      const response = await blogApi.createPost(blogData);
      console.log(blogData);

      setTitle('');
      setSummary('');
      setContent('');
      setThumbnailImage(null);
      setThumbnailPreview(null);
      setThumbnailUrl('');
      setContentImages([]);
      setContentImageUrls([]);

    } catch (e) {
      setError(e);
    } finally {
      setSubmitting(false);
    }
  };

  return(
    <Box sx={{ padding: "5em" }}>
      <Paper elevation={3} style={{ padding: '3em' }}>
        <Typography variant="h5" sx={{ mb: 3 }}>글쓰기</Typography>
        <TextField label="제목" variant="outlined" fullWidth value={title} onChange={handleTitleChange} margin="normal" />
        <TextField label="요약(선택사항)" variant="outlined" fullWidth multiline rows={2} value={summary} onChange={handleSummaryChange} margin="normal"
                   helperText="요약을 입력하지 않으면 본문 앞부분이 자동으로 사용됩니다."/>
        <TextField label="본문" variant="outlined" fullWidth multiline rows={15} value={content} onChange={handleContentChange} margin="normal" />
        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>썸네일 이미지</Typography>
          {thumbnailPreview && (
              <Card sx={{ maxWidth: 300, mb: 2, position: 'relative' }}>
                <CardMedia component="img" height="200" image={thumbnailPreview} alt="썸네일 미리보기"/>
                <Button startIcon={<DeleteIcon />} onClick={removeThumbnail}
                    sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'rgba(255,255,255,0.8)' }}
                    size="small"
                >
                  삭제
                </Button>
              </Card>
          )}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button variant="outlined" component="label" startIcon={<CloudUploadIcon />} disabled={thumbnailUploading}>
              썸네일 선택
              <input type="file" accept="image/*" hidden onChange={handleThumbnailChange}/>
            </Button>
            {thumbnailImage && !thumbnailUrl && (
                <Button variant="contained" onClick={uploadThumbnail} disabled={thumbnailUploading} startIcon={thumbnailUploading ? <CircularProgress size={20} /> : null}>
                  {thumbnailUploading ? '업로드 중...' : '썸네일 업로드'}
                </Button>
            )}
            {thumbnailUrl && (<Typography variant="body2" color="success.main"> ✓ 썸네일 업로드 완료 </Typography> )}
          </Box>
        </Box>

        {/* 본문 이미지 섹션 */}
        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>본문 이미지</Typography>

          {contentImages.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
              {contentImages.map((image, index) => (
                <Card key={index} sx={{ width: 200, position: 'relative' }}>
                  <CardMedia component="img" height="150" image={image.preview || URL.createObjectURL(image)} alt={`본문 이미지 ${index + 1}`}/>
                    <Button startIcon={<DeleteIcon />} onClick={() => removeContentImage(index)}
                        sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'rgba(255,255,255,0.8)' }} size="small">
                      삭제
                    </Button>
                  </Card>
              ))}
            </Box>
          )}

          <Button variant="outlined" component="label" startIcon={<CloudUploadIcon />} disabled={contentUploading} >
            본문 이미지 선택 (다중 선택 가능)
            <input type="file" accept="image/*" multiple hidden onChange={handleContentImageChange}/>
          </Button>
        </Box>

        {/* 제출 버튼 */}
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" onClick={handlePostSubmit}
              disabled={submitting || thumbnailUploading || contentUploading}
              startIcon={submitting ? <CircularProgress size={20} /> : null}
              size="large" >
            {submitting ? '작성 중...' : '글 작성 완료'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );

}


export default PostWrite;