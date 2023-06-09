import { Tooltip, MenuItem, AppBar, Toolbar } from "@mui/material";
import React from "react";

const HeaderMenu = (props) => {
  
  
  return(
    
      <Toolbar style={{padding:"0"}}>
        <Tooltip title="Home">
          <MenuItem>Home</MenuItem> 
        </Tooltip>
        <Tooltip title="Blog">
          <MenuItem>Blog</MenuItem>
        </Tooltip>
        <Tooltip title="Portfolio">
          <MenuItem>Portfolio</MenuItem>
        </Tooltip>
        <Tooltip title="Main">
          <MenuItem>Main</MenuItem>
        </Tooltip>
      </Toolbar>
   
  );
}

export default HeaderMenu;   