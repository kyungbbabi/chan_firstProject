import React, { useState } from "react";
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const HeaderAvatar = () => {
  
  const navigate = useNavigate();

  const settings = [
    { label: 'Profile', action: () => handleMenuItemClick('Profile') },
    { label: 'Account', action: () => handleMenuItemClick('Account') },
    { label: 'Dashboard', action: () => handleMenuItemClick('Dashboard') },
    { label: 'Logout', action: () => handleMenuItemClick('Logout') },
  ];

  const [anchorElUser, setAnchorElUser] = useState(null);
 
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  const handleMenuItemClick = (setting) => {
    console.log(`${setting} clicked`);
    
    switch (setting) {
      case 'Profile':
        // Handle Profile click
        break;
      case 'Account':
        // Handle Account click
        break;
      case 'Dashboard':
        // Handle Dashboard click
        break;
      case 'Logout':
        localStorage.removeItem('token');
        navigate('/login');
        break;
      default:
        break;
    }
    handleCloseUserMenu();
  };

  return(
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar />
        </IconButton>
      </Tooltip>
      <Menu sx={{ mt: '45px' }} anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElUser)} onClose={handleCloseUserMenu} >
        {settings.map((setting) => (
          <MenuItem key={setting.label} onClick={setting.action}>
            <Typography textAlign="center">{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default HeaderAvatar;
