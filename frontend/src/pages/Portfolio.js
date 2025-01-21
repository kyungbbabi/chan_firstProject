import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio(){

  const navigate = useNavigate();

  const handelClickPortfolioDetail = () => {
    navigate('/portfoliodetail');
  };

  const projects = [
    {
      id: 1,
      title: "넷플릭스 클론 프로젝트",
      description: "React와 Firebase를 활용한 넷플릭스 클론 코딩",
      image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      category: "Web Development",
      date: "2024.01.15"
    }
  ];

 return(
  <Box sx={{ marginTop:"5em", marginLeft:"3em", marginRight:"3em" }}>
    <Box sx={{ margin: "0 auto" }}>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
            <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handelClickPortfolioDetail(project.id)}>
              <CardMedia component="img" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h6" noWrap gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, mt: 'auto' }}>
                  <Typography variant="caption" color="text.secondary">
                    {project.category} · {project.date}
                  </Typography>
                </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
 );
} 