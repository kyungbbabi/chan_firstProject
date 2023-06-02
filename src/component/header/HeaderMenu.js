import { Tooltip, MenuItem } from "@mui/material";
import React from "react";

const HeaderMenu = (props) => {
  
  
  return(
    <>
      <Tooltip title="Home" placement="left" arrow>
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
    </>
  );
}

export default HeaderMenu;   