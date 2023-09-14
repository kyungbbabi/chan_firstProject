import React from "react";
import HeaderMenu from "./HeaderMenu";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HeaderAvatar from "./HeaderAvatar";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  
  let navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/home');
  };

  return(
    <>
      <AppBar >
        <Toolbar style={{padding:"0", display:"flex", justifyContent:"space-between"}}>
          <HeaderMenu />
          <Typography variant="h6" style={{position:"absolute", left:"50%", transform:"translateX(-50%)"}} onClick={handleClickHome}>Lorem ipsum dolor</Typography> 
          <HeaderAvatar />
        </Toolbar>
      </AppBar>
    </>
  );

}

export default Header;