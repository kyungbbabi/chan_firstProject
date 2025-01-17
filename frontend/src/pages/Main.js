import { Box, Card, CardContent, CardMedia, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {

  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blogdetail/${blogId}`);
  };

  const handlePortfolioClick = (protfolioId) => {
    navigate(`/portfoliodetail/${protfolioId}`);
  };

  const blogPosts = [
    {
      id: 1,
      title: "React 컴포넌트 설계하기",
      summary: "효율적인 React 컴포넌트 설계 방법과 최적화 전략을 알아봅니다.",
      thumbnail: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      date: "2024.01.16",
      likes: 42,
      comments: 5
    },
    {
      id: 2,
      title: "React 컴포넌트 설계하기",
      summary: "효율적인 React 컴포넌트 설계 방법과 최적화 전략을 알아봅니다.",
      thumbnail: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      date: "2024.01.16",
      likes: 42,
      comments: 5
    },
  ];

  const portfolioPosts = [
    {
      id: 1,
      title: "넷플릭스 클론 프로젝트",
      description: "React와 Firebase를 활용한 넷플릭스 클론 코딩",
      image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      category: "Web Development",
      date: "2024.01.15"
    },
    {
      id: 2,
      title: "넷플릭스 클론 프로젝트",
      description: "React와 Firebase를 활용한 넷플릭스 클론 코딩",
      image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      category: "Web Development",
      date: "2024.01.15"
    },
  ];

  return(
    <Box sx={{ padding: "5em 2em" }}>
    <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 4 }}>
        <Tab label="전체" />
        <Tab label="블로그" />
        <Tab label="포트폴리오" />
      </Tabs>
      {tabValue === 0 && (
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ mb: 3, pl: 2 }}>블로그</Typography>
            </Grid>
            <Grid container item spacing={3} sx={{ mb: 5 }}>
              {blogPosts.map((blog) => (
                <Grid item xs={12} md={6} lg={4} key={blog.id}>
                  <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handleBlogClick(blog.id)}>
                    <CardMedia component="img" height="200" image={blog.thumbnail} alt={blog.title} />
                    <CardContent>
                      <Typography variant="h6" noWrap gutterBottom>
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary"
                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', height: '4.5em' }} >
                        {blog.summary}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, mt: 'auto' }}>
                      <Typography variant="caption" color="text.secondary">
                        {blog.date} · 좋아요 {blog.likes} · 댓글 {blog.comments}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ mb: 3, pl: 2 }}>포트폴리오</Typography>
            </Grid>
            <Grid container item spacing={3}>
              {portfolioPosts.map((portfolio) => (
                <Grid item xs={12} md={6} lg={4} key={portfolio.id}>
                  <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handlePortfolioClick(portfolio.id)}>
                    <CardMedia component="img" height="200" image={portfolio.image} alt={portfolio.title} />
                    <CardContent>
                      <Typography variant="h6" noWrap gutterBottom>
                        {portfolio.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {portfolio.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, mt: 'auto' }}>
                      <Typography variant="caption" color="text.secondary">
                        {portfolio.category} · {portfolio.date}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
        )}
        {tabValue === 1 && (
          <Grid container spacing={3}>
            {blogPosts.map((blog) => (
              <Grid item xs={12} md={6} lg={4} key={blog.id}>
                <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handleBlogClick(blog.id)}>
                  <CardMedia component="img" height="200" image={blog.thumbnail} alt={blog.title} />
                    <CardContent>
                      <Typography variant="h6" noWrap gutterBottom>
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary"
                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', height: '4.5em' }} >
                        {blog.summary}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, mt: 'auto' }}>
                      <Typography variant="caption" color="text.secondary">
                        {blog.date} · 좋아요 {blog.likes} · 댓글 {blog.comments}
                      </Typography>
                    </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {tabValue === 2 && (
          <Grid container spacing={3}>
            {portfolioPosts.map((portfolio) => (
              <Grid item xs={12} md={6} lg={4} key={portfolio.id}>
                <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handlePortfolioClick(portfolio.id)}>
                  <CardMedia component="img" height="200" image={portfolio.image} alt={portfolio.title} />
                    <CardContent>
                      <Typography variant="h6" noWrap gutterBottom>
                        {portfolio.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {portfolio.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, mt: 'auto' }}>
                      <Typography variant="caption" color="text.secondary">
                        {portfolio.category} · {portfolio.date}
                      </Typography>
                    </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );

}