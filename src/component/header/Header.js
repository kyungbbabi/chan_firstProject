import React from "react";
import HeaderMenu from "./HeaderMenu";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HeaderAvatar from "./HeaderAvatar";

const Header = (props) => {
  

  return(
    <>
      <AppBar >
        <Toolbar style={{padding:"0", display:"flex", justifyContent:"space-between"}}>
          <HeaderMenu />

          {/* 위치 맞춰봐야함 */}
          <Typography variant="h6" align="center">Portfolio</Typography> 
          
          <HeaderAvatar />
        
        </Toolbar>
      </AppBar>
    </>
  );

}

export default Header;