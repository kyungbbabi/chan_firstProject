import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

const PostWrite = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handlePostSubmit = () => {
    // 글 제출 로직을 추가하세요.
    console.log('제목:', title);
    console.log('본문:', content);
    console.log('이미지:', image);
  };

  return(
    <Box sx={{padding:"5em"}}>
      <Paper elevation={3} style={{ padding: '3em' }}>
        <Typography variant="h5">글쓰기</Typography>
        <TextField label="제목" variant="outlined" fullWidth value={title} onChange={handleTitleChange} margin="normal" />
        <TextField label="본 문" variant="outlined" fullWidth multiline rows={4} value={content} onChange={handleContentChange} margin="normal" />
        <TextField accept="image/*" id="contained-button-file" type="file" style={{ display: 'none' }} onChange={handleImageChange} />
        <label htmlFor="contained-button-file">
          <Button variant="outlined" component="span" startIcon={<CloudUploadIcon />} style={{ marginTop: '16px' }}>이미지 업로드</Button>
        </label>
        {image && <Typography variant="body2">선택된 이미지: {image.name}</Typography>}
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handlePostSubmit}>
            글 제출
          </Button>
        </Box>
      </Paper>
    </Box>
  );
  
}

export default PostWrite;