import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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
    <Box sx={{ padding: "5em" }}>
      <Paper elevation={3} style={{ padding: '3em' }}>
        <Typography variant="h5">글쓰기</Typography>
        <TextField label="제목" variant="outlined" fullWidth value={title} onChange={handleTitleChange} margin="normal" />
        <TextField label="본 문" variant="outlined" fullWidth multiline rows={15} value={content} onChange={handleContentChange} margin="normal" />
        {image && ( 
          <Box mt={2} display="flex" alignItems="center">
            <Typography variant="body2">선택된 이미지: {image.name}</Typography>
              <CloseRoundedIcon  onClick={() => setImage(null)} style={{ cursor: 'pointer', marginLeft: '8px' }} />
          </Box>
        )}   
        <Box mt={2} display="flex" justifyContent="space-between">  
          <Button variant="outlined" component="label" startIcon={<CloudUploadIcon />}>
            이미지 업로드 <input type="file" accept="image/*" hidden onChange={handleImageChange} />
          </Button>
          <Button variant="contained" color="primary" onClick={handlePostSubmit}>
            글 제출
          </Button>
        </Box>
      </Paper>
    </Box>
  );
  
}

export default PostWrite;