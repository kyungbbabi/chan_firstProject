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
    <Box sx={{ marginTop:"5em", marginLeft:"3em", marginRight:"3em" }}>
      <Box sx={{ margin: "0 auto" }}>
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 4 }}>
          <Tab label="전체" />
          <Tab label="블로그" /> {/*인기글만*/}
          <Tab label="포트폴리오" /> {/*인기글만*/}
        </Tabs>
        {tabValue === 0 && (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ mb: 3, pl: 2 }}>블로그</Typography>
              </Grid>
              <Grid container item spacing={3} sx={{ mb: 5 }}>
                {blogPosts.map((blog) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => handleBlogClick(blog.id)}>
                      <CardMedia component="img" sx={{ objectFit: 'cover' }}  image={blog.thumbnail}  alt={blog.title}  />
                      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" gutterBottom>
                          {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                          sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', flex: 1 }} >
                          {blog.summary}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="caption" color="text.secondary">
                            {blog.date} · 좋아요 {blog.likes} · 댓글 {blog.comments}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ mb: 3, pl: 2 }}>포트폴리오</Typography>
              </Grid>
              <Grid container item spacing={3}>
                {portfolioPosts.map((portfolio) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={portfolio.id}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}  onClick={() => handlePortfolioClick(portfolio.id)}>
                      <CardMedia component="img"  sx={{ objectFit: 'cover' }} image={portfolio.image}  alt={portfolio.title}  />
                      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" gutterBottom>
                          {portfolio.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                          sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', flex: 1 }}>
                          {portfolio.description}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="caption" color="text.secondary">
                            {portfolio.category} · {portfolio.date}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        )}
        {tabValue === 1 && (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ mb: 3, pl: 2 }}>블로그</Typography>
              </Grid>
              <Grid container item spacing={3} sx={{ mb: 5 }}>
                {blogPosts.map((blog) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => handleBlogClick(blog.id)}>
                      <CardMedia component="img" sx={{ objectFit: 'cover' }}  image={blog.thumbnail}  alt={blog.title}  />
                      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" gutterBottom>
                          {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                          sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', flex: 1 }} >
                          {blog.summary}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="caption" color="text.secondary">
                            {blog.date} · 좋아요 {blog.likes} · 댓글 {blog.comments}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        )}
        {tabValue === 2 && (
          <Box>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ mb: 3, pl: 2 }}>포트폴리오</Typography>
            </Grid>
            <Grid container item spacing={3}>
              {portfolioPosts.map((portfolio) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={portfolio.id}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}  onClick={() => handlePortfolioClick(portfolio.id)}>
                    <CardMedia component="img"  sx={{ objectFit: 'cover' }} image={portfolio.image}  alt={portfolio.title}  />
                    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" gutterBottom>
                        {portfolio.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary"
                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', flex: 1 }}>
                        {portfolio.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          {portfolio.category} · {portfolio.date}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>  
        )}
      </Box>        
    </Box>
  );

}