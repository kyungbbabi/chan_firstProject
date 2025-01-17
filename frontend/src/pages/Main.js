import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Tab, Tabs, Typography } from "@mui/material";
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
            <Typography variant="h4" sx={{ mb: 4 }}>최근 게시물</Typography>
            <Grid container spacing={4}> 
              <Grid item xs={12} md={7}>
                <Typography variant="h5" sx={{ mb: 3 }}>블로그</Typography>
                <Grid container spacing={3}>
                  {blogPosts.map((blog) => (
                    <Grid item xs={12} key={blog.id}>
                      <Card onClick={() => handleBlogClick(blog.id)}>
                        <CardActionArea>
                          <Box sx={{ display: 'flex' }}>
                            <CardMedia component="img" sx={{ width: 200, height: 200, objectFit: 'cover' }} image={blog.thumbnail}  alt={blog.title}  />
                            <CardContent sx={{ flex: 1 }}>
                              <Typography variant="h6" gutterBottom>
                                {blog.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {blog.summary}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {blog.date} · 좋아요 {blog.likes} · 댓글 {blog.comments}
                              </Typography>
                            </CardContent>
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography variant="h5" sx={{ mb: 3 }}>포트폴리오</Typography>
                <Grid container spacing={2}>
                  {portfolioPosts.map((portfolio) => (
                    <Grid item xs={12} sm={6} key={portfolio.id}>
                      <Card onClick={() => handlePortfolioClick(portfolio.id)}>
                        <CardActionArea>
                          <CardMedia  component="img"  height="200" image={portfolio.image}  alt={portfolio.title}  />
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {portfolio.title}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" display="block">
                              {portfolio.category}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {portfolio.date}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}
        {tabValue === 1 && (
          <Grid container spacing={3}>
            {blogPosts.map((blog) => (
              <Grid item xs={12} key={blog.id}>
                <Card onClick={() => handleBlogClick(blog.id)}>
                  <CardActionArea>
                    <Box sx={{ display: 'flex' }}>
                      <CardMedia component="img" sx={{ width: 200, height: 200, objectFit: 'cover' }} image={blog.thumbnail}  alt={blog.title}  />
                      <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {blog.summary}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {blog.date} · 좋아요 {blog.likes} · 댓글 {blog.comments}
                        </Typography>
                      </CardContent>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {tabValue === 2 && (
          <Grid container spacing={5}>
            {portfolioPosts.map((portfolio) => (
              <Grid item xs={12} sm={6} key={portfolio.id}>
                <Card onClick={() => handlePortfolioClick(portfolio.id)}>
                  <CardActionArea>
                    <CardMedia  component="img"  height="200" image={portfolio.image}  alt={portfolio.title}  />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {portfolio.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        {portfolio.category}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {portfolio.date}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );

}