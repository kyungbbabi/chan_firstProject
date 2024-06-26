import React from "react";
import HeaderMenu from "./HeaderMenu";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import HeaderAvatar from "./HeaderAvatar";
import { useNavigate , useLocation } from "react-router-dom";
import PostAddIcon from '@mui/icons-material/PostAdd';

const Header = (props) => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickHome = () => {
    navigate('/');
  };

  const handelClickPostWrite = () => {
    navigate('/postwrite');
  };

  const showPostWriteIcon = location.pathname === '/blog' || location.pathname === '/portfolio';

  //left:"50%", transform:"translateX(-50%)" 없이 Lorem ipsum dolor가 정 가운데로 오는 방법
  return(
    <Box marginBottom="3%">
      <AppBar>
        <Toolbar style={{ padding: "0", display: "flex", justifyContent: "space-between" }}>
          <HeaderMenu />
          <Typography variant="h6" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", cursor: "pointer" }} onClick={handleClickHome}>
            Lorem ipsum dolor
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {showPostWriteIcon && (
              <IconButton color="inherit" onClick={handelClickPostWrite} sx={{ marginRight: 2 }}>
                <PostAddIcon />
              </IconButton>
            )}
            <HeaderAvatar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );

}

export default Header;