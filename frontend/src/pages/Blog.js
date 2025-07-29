import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Pagination from "../component/Pagination";
import axios from "axios";

export default function Blog(){

  // useEffect(() => {
  //   const testAPI = async () => {
  //     try {
  //       const response = await axios.get("/api/test");
  //       console.log('connected',response.data);
  //     } catch(e) {
  //       console.error('connection failed', e);
  //     }
  //   }
  //   testAPI();
  // }, []);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [blogPost, setBlogPost] = useState([]);

  // 페이지당 표시할 아이템 수
  const itemsPerPage = 8;

  const handleClickBlogDetail = () => {
    navigate("/blogdetail");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const blogPosts = [
    {
      id: 1,
      title: "React 컴포넌트 설계하기",
      summary: "효율적인 React 컴포넌트 설계 방법과 최적화 전략을 알아봅니다.",
      thumbnail: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      date: "2024.01.16",
      author: "작성자",
      likes: 42,
      comments: 5
    }
  ];


  return(
    <Box sx={{ mt:"5em", ml:"3em", mr:"3em" }}>
      <Box sx={{ margin: "0 auto" }}>
        <Grid container spacing={3}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => handleClickBlogDetail(post.id)}>
                <CardMedia component="img" sx={{ objectFit: 'cover' }}  image={post.thumbnail}  alt={post.title}  />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', flex: 1 }} >
                    {post.summary}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.date} · 좋아요 {post.likes} · 댓글 {post.comments}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange} />
      </Box>
    </Box>
  );

}