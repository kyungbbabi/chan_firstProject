import { Tooltip, MenuItem, AppBar, Toolbar } from "@mui/material";
import React from "react";

const HeaderMenu = (props) => {
  
  // navigate 추가하기
  // Home은 제목(Lorem ipsum dolor) 누면 돌아가게끔!
  
  return(
    
      <Toolbar style={{padding:"0"}}>
        <Tooltip title="Main">
          <MenuItem>Main</MenuItem>
        </Tooltip>
        <Tooltip title="Blog">
          <MenuItem>Blog</MenuItem>
        </Tooltip>
        <Tooltip title="Portfolio">
          <MenuItem>Portfolio</MenuItem>
        </Tooltip>
      </Toolbar>
   
  );
}

export default HeaderMenu;   