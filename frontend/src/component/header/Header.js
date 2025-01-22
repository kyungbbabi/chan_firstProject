import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { AppBar, Box, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import HeaderAvatar from "./HeaderAvatar";
import { useNavigate , useLocation } from "react-router-dom";
import PostAddIcon from '@mui/icons-material/PostAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Notifications from "../Notifications";

const Header = (props) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [notificationOpen, setNotificationOpen] = useState(false);

  const notificationCount = 2;

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickPostWrite = () => {
    navigate('/postwrite');
  };
  // blog, portfolio에서 글쓰기 버튼 보이기
  const showPostWriteIcon = location.pathname === '/blog' || location.pathname === '/portfolio';

  //left:"50%", transform:"translateX(-50%)" 없이 Lorem ipsum dolor가 정 가운데로 오는 방법
  return(
    <Box>
      <AppBar>
        <Toolbar style={{ padding: "0", display: "flex", justifyContent: "space-between" }}>
          <HeaderMenu />
          <Typography variant="h6" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", cursor: "pointer" }} onClick={handleClickHome}>
            Lorem ipsum dolor
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {showPostWriteIcon && (
              <IconButton color="inherit" onClick={handleClickPostWrite} sx={{ marginRight: 2 }}>
                <PostAddIcon />
              </IconButton>
            )}
            <IconButton color="inherit" onClick={() => setNotificationOpen(true)}sx={{ marginRight: 2 }}>
              <Badge badgeContent={notificationCount} color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <HeaderAvatar />
          </Box>
        </Toolbar>
      </AppBar>
      <Notifications open={notificationOpen} onClose={() => setNotificationOpen(false)} />
    </Box>
  );

}

export default Header;