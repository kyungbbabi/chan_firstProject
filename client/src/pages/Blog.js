import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Newyork from '../newyork.png'
import { useNavigate } from "react-router-dom";

export default function Blog(){

  const [blogPosts, setBlogPosts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // 로그인된 사용자의 토큰 또는 인증 정보를 사용하여 백엔드 API를 호출
    const token = '유저의_토큰_또는_인증_정보'; // 로그인 시 발급되는 토큰

    // API 호출
    axios.get('https://api.example.com/blog', {
      headers: {
        Authorization: `Bearer ${token}`, // 인증 헤더
      },
    })
    .then((response) => {
      // API 응답 데이터를 상태에 저장
      setBlogPosts(response.data);
    })
    .catch((error) => {
      console.error('블로그 글을 가져오는 중 에러 발생:', error);
    });
  }, []);

  const handelClickBlogDetail = () => {
    navigate("/blogdetail");
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 클릭할 때마다 상태를 토글
  };

  // const itemData = [
  //   {
  //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //     title: 'Breakfast',
  //     author: '@bkristastucchio',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //     title: 'Burger',
  //     author: '@rollelflex_graphy726',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  //     title: 'Camera',
  //     author: '@helloimnik',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //     title: 'Coffee',
  //     author: '@nolanissac',
  //   },
  // ]

  return(
    <Box>
      <Grid sx={{display: "flex", alignItems:"center", justifyContent:"center", padding: "3em"}} >
      {/* {blogPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))} */}
        <Card sx={{maxWidth: 345}}>
          <CardMedia component="img" height="194" image={Newyork} />
          <CardContent onClick={handelClickBlogDetail}>
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
            <IconButton onClick={handleLikeClick} style={{ color: isLiked ? 'red' : 'inherit' }}>
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