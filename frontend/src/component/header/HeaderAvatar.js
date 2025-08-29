import React, {useContext, useState} from "react";
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { store } from "../../store/store";

const HeaderAvatar = () => {

  const navigate = useNavigate();
  const [state, dispatch] = useContext(store);

  const settings = [
    { label: 'Profile', action: () => handleMenuItemClick('Profile') },
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
        navigate('/profile');
        break;
      case 'Dashboard':
        // Handle Dashboard click
        navigate('/dashboard');
        break;
      case 'Logout':
        localStorage.removeItem('token');
        dispatch({type: 'Logout'});
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
