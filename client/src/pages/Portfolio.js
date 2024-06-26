import { Box, Grid, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio(){

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];

  const navigate = useNavigate();

  const handelClickPortfolioDetail = () => {
    navigate("/portfoliodetail");
  }

  return(
    <Box>
      <Grid sx={{display: "flex", alignItems:"center", justifyContent:"center", padding: "3em"}}>
        <ImageList cols={4} sx={{width: "50%", height: "50%"}}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} onClick={handelClickPortfolioDetail}>
              <img src={`${item.img}?w=248&fit=crop&auto=format`} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} subtitle={<span>by: {item.author}</span>} position="below" />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Box>
  );

} 