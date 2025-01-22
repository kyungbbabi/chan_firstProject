import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../component/Pagination";

export default function Portfolio(){

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [project, setProject] = useState([]);

  // 페이지당 표시할 아이템 수
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`/api/projects?page=${currentPage}&limit=${itemsPerPage}`);
        setProject(response.data.projects);
        setTotalPage(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchProjects();

    setTotalPage(Math.ceil(projects.length / itemsPerPage));
  }, [currentPage]);

  const handleClickPortfolioDetail = () => {
    navigate('/portfoliodetail');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
            <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handleClickPortfolioDetail(project.id)}>
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
      <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange} />
    </Box>
  </Box>
 );
} 