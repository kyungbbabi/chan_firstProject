import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Newyork from '../newyork.png'
import { useNavigate } from "react-router-dom";

export default function Blog(){

  let navigate = useNavigate();

  const handelClickBlogDetail = () => {
    navigate("/blogdetail");
  };

  return(
    <Box>
      <Grid sx={{display: "flex", alignItems:"center", justifyContent:"center", marginTop:"4em", padding:"3em"}} >
        <Card sx={{maxWidth: 345}} onClick={handelClickBlogDetail} >
          <CardMedia component="img" height="194" image={Newyork} />
          <CardContent>
            <Typography variant="h5">
            Title 1
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
          <Divider />
          <CardActions style={{ display:"flex", justifyContent:"space-between"}}>
            <Typography>
              yyyy mm dd
            </Typography>
            <IconButton>
              <FavoriteIcon fontSize="small"/>
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{maxWidth: 345}}>
          <CardHeader action={<IconButton><MoreVertIcon /> </IconButton> } title="title 2" subheader="date"/>
          <CardMedia component="img" height="194" image={Newyork} alt="Paella dish" />
          <CardContent>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{maxWidth: 345}}>
          <CardHeader action={<IconButton><MoreVertIcon /> </IconButton> } title="title 3" subheader="date"/>
          <CardMedia component="img" height="194" image={Newyork} alt="Paella dish" />
          <CardContent>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );

}