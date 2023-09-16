import { Box, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import React from "react";

export default function Main() {

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      date: '2023.07.22',
    },
  ];

  const itemData2 = [
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushroom',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea Star',
      date: '2023.07.22',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      date: '2023.07.22',
    },
  ];

  return(
    <Box sx={{padding:"3em"}}>
      <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h5" sx={{ alignSelf: "center", mt: 2 }}>
          Blog
        </Typography>
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ImageList cols={4} sx={{ width: "50%", height: "50%" }}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img src={`${item.img}`} />
                <ImageListItemBar title={item.title} subtitle={item.date} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Typography variant="h5" sx={{ alignSelf: "center", mt: 2 }}>
          Project
        </Typography>
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ImageList cols={4} sx={{ width: "50%", height: "50%" }}>
            {itemData2.map((item) => (
              <ImageListItem key={item.img}>
                <img src={`${item.img}`} />
                <ImageListItemBar title={item.title} subtitle={item.date} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Box>
  );

}