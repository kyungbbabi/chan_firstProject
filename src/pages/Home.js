import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../component/header/Header";

export default function Home(props) {

  return(
    <Box>
      <Header />

      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center", marginTop:"4rem"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
      <Grid sx={{display:"center", alignItems:"center", justifyContent:"center"}}>
        그 안에 사이트 소개 있음, 글이든 사진이든
      </Grid>
      
      <Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid><Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid><Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid><Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid><Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid><Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid><Grid sx={{display:"center", alignItems:"center" ,justifyContent:"center"}}>
        대충 가운데 배경, 효과나 다른 배경을 넣을까? 
      </Grid>
    </Box>
  );

}