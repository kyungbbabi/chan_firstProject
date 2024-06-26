import React, { useState, useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home(props) {

  const navigate = useNavigate();

  const handleClickMain = () => {
    navigate('/Main');
  }
  
  return (
    <Box sx={{textAlign: 'center', padding: "3em"}}>
      <Typography variant="h2" gutterBottom>Welcome to Our Website!</Typography>
      <Typography variant="body1" gutterBottom>
        This is a place where you can find various beautiful images. We hope you enjoy your stay and find something that inspires you.
      </Typography>
      <Typography variant="h6" gutterBottom>Latest News</Typography>
      <Typography variant="body2" gutterBottom>
        Check out the latest updates and announcements here. We continuously update our gallery with new and stunning images.
      </Typography>
      <Typography variant="h6" gutterBottom>About Us</Typography>
      <Typography variant="body2" gutterBottom>
        We are passionate about bringing you the best visual content. Our mission is to curate and share high-quality images that captivate and inspire.
      </Typography>
      <Button onClick={handleClickMain}>
        start
      </Button>
    </Box>
  );
}
