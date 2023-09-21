import { Tooltip, MenuItem, AppBar, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderMenu = (props) => {
  
  // navigate 추가하기
  // Home은 제목(Lorem ipsum dolor) 누면 돌아가게끔!

  let navigate = useNavigate();

  const handleClickMain = () => {
    navigate('/main');
  };

  const handleClickBlog = () => {
    navigate('/blog');
  };

  const handleClickPortfolio = () => {
    navigate('/portfolio');
  };
  
  return(
    
      <Toolbar style={{padding:"0"}}>
        <Tooltip title="Main">
          <MenuItem onClick={handleClickMain}>Main</MenuItem>
        </Tooltip>
        <Tooltip title="Blog">
          <MenuItem onClick={handleClickBlog}>Blog</MenuItem>
        </Tooltip>
        <Tooltip title="Portfolio">
          <MenuItem onClick={handleClickPortfolio}>Portfolio</MenuItem>
        </Tooltip>
      </Toolbar>
   
  );
}

export default HeaderMenu;   