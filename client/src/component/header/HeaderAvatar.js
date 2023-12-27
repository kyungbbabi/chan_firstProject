import React, { useState } from "react";
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';

const HeaderAvatar = () => {
  
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElUser, setAnchorElUser] = useState(null);
 
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  const handelClickInstagram = (e) => {
    e.preventDefault();
  }

  return(
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={anchorElUser}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default HeaderAvatar;