import React from "react";
import HeaderMenu from "./HeaderMenu";
import { AppBar } from "@mui/material";

const Header = (props) => {
  

  return(
    <>
      <AppBar>
        <HeaderMenu />
      </AppBar>
    </>
  );

}

export default Header;