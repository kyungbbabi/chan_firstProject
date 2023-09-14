import React, { useState , useEffect } from "react";
import axios from "axios";
import Header from "../component/header/Header";
import { Box, Grid, Typography } from "@mui/material";

export default function Home(props) {

  // material ui Stepper Text with carousel effect 참고

  const [imageUrl, setImageUrl] = useState("");

  // useEffect(() => {
  //   const accessKey = process.env.REACT_APP_YOUR_ACCESS_KEY;
  //   const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&orientation=landscape`;
  //   // `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}&orientation=landscape&per_page=20`

  //   // axios.get(apiUrl)
  //   //   .then(response => {
  //   //     const imageSrc = response.data.urls.regular;
  //   //     setImageUrl(imageSrc);
  //   //   })
  //   //   .catch(error => {
  //   //     console.log("1111");
  //   //   });
  //   console.log(accessKey)
  //   axios
  //     .get(`https://images.unsplash.com/photo-1461214270855-1ce11f7a1cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDYwNzA3Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`, {
  //       params: {
  //         // client_id: accessKey,
  //         // count: 30
  //       }})
  //     .then(res => {
  //       this.setImageUrl({
  //         images: [...this.state.images, ...res.data.map(image => image.url.small)]
  //       })
  //     })
  // }, []);

  axios
    .get(`https:api.unsplash.com/photos/random/?client_id=2kHJ2D1goTsPkHYGgUbxJqrmXS--kql19NSjcqV8SB8`)
    .then( res => {
      setImageUrl();
    })

  return(
    <Box>
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center", marginTop:"4rem"}}>
        <img src={imageUrl} alt="background" style={{top:0, right:0}} />
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
      <Grid sx={{display:"center", alignItems:"center", justifyContent:"center"}}>
        그 안에 사이트 소개 있음, 글이든 사진이든
      </Grid>
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
    </Box>
  );

}