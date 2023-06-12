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
          <Typography variant="h6" style={{position:"absolute", left:"50%", transform:"translateX(-50%)"}}>Lorem ipsum dolor</Typography> 
          <HeaderAvatar />
        </Toolbar>
      </AppBar>
    </>
  );

}

export default Header;