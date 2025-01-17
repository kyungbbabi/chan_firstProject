import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Grid, IconButton, Menu, MenuItem, Tab, Tabs, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

export default function Dashboard(){

  const navigate = useNavigate();
  
  const [tabValue, setTabValue] = useState(0);
  const [posts, setPosts] = useState([]);;
  const [portfolios, setPortfolios] = useState([]);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleMenuOpen = (event, item) => {
    setMenuAnchor(event.currentTarget);
    setSelectedItem(item);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedItem(null);
  };

  const handleEdit = () => {
    if (!selectedItem) return;
    // 수정 페이지로 이동
    if (tabValue === 0) {
      navigate(`/postwrite/${selectedItem.id}`);
    } else {
      navigate(`/portfolio/edit/${selectedItem.id}`);
    }
    handleMenuClose();
  };

  const handleDelete = () => {
    if (!selectedItem) return;
    if (tabValue === 0) {
      setPosts(posts.filter(post => post.id !== selectedItem.id));
    } else {
      setPortfolios(portfolios.filter(portfolio => portfolio.id !== selectedItem.id));
    }
    handleMenuClose();
  };

  useEffect(() => {
    setPosts([
      { id: 1, title: "블로그 제목 1", createdAt: "2024-01-16", likes: 5 },
      { id: 2, title: "블로그 제목 2", createdAt: "2024-01-15", likes: 3 },
    ]);
    setPortfolios([
      { id: 1, title: "포트폴리오 1", createdAt: "2024-01-14" },
      { id: 2, title: "포트폴리오 2", createdAt: "2024-01-13" },
    ]);
  }, []);

  return (
    <Box sx={{padding: "5em 2em"}}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Tabs value={tabValue} onChange={handleTabChange}  sx={{ mb: 3 }}>
            <Tab label="blog"></Tab>
            <Tab label="portfolio"></Tab>
          </Tabs>
          <Box sx={{ mt: 2 }}>
            {tabValue === 0 ? (
              posts.map(post => (
                <Card key={post.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6">{post.title}</Typography>
                      <IconButton  onClick={(e) => handleMenuOpen(e, post)} sx={{ position: 'relative' }}> {/* 아이콘 위치 조정 */}
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                    <Typography color="textSecondary" sx={{ mt: 1 }}>
                      작성일: {post.createdAt}
                    </Typography>
                    <Typography color="textSecondary">
                      좋아요: {post.likes}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              portfolios.map(portfolio => (
                <Card key={portfolio.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6">{portfolio.title}</Typography>
                      <IconButton  onClick={(e) => handleMenuOpen(e, portfolio)} sx={{ position: 'relative' }} >
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                    <Typography color="textSecondary" sx={{ mt: 1 }}>
                      작성일: {portfolio.createdAt}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </Box>
        </Grid>
      </Grid>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose} anchorOrigin={{ vertical: 'top', horizontal: 'right'}} >
        <MenuItem onClick={handleEdit}>
          <EditIcon sx={{ mr: 1 }} /> 수정
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteIcon sx={{ mr: 1 }} /> 삭제
        </MenuItem>
      </Menu>
    </Box>
  );

};
