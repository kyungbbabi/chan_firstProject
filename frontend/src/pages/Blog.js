import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Pagination from "../component/Pagination";
import axios from "axios";
import {blogApi} from "../api/user/blog";

export default function Blog(){

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 페이지당 표시할 아이템 수
  const itemsPerPage = 8;

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await blogApi.getPosts({
          page: currentPage,
          size: itemsPerPage
        });
        setBlogPost(res.data.posts);
        setTotalPage(res.data.total);
      } catch (e) {
        setError('블로그 포스트를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    getBlogPosts();
  }, [currentPage]);

  const handleClickBlogDetail = () => {
    navigate("/blogdetail");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return(
    <Box sx={{ mt:"5em", ml:"3em", mr:"3em" }}>
      <Box sx={{ margin: "0 auto" }}>
        <Grid container spacing={3}>
          {blogPost.map((post) => (
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