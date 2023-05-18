import React, { useState } from "react";
import { Stack, Typography, Box, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, MenuItem } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Register(props) {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleClickRegister = (e) => {
    e.preventDefault();
  }

  const genders = [ {value:'Man', label:'Man'}, {value:"Woman", label:"Woman"}]

  return(
    <Stack spacing={2}>
      <Typography variant="h5">Sign Up</Typography>
      
        <TextField variant="standard" label="email address">Email Address</TextField>
        <TextField variant="standard" type="password" label="password">Password</TextField>
        <FormControl variant="standard">
          <InputLabel>confirm</InputLabel>
          <Input type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="confirm"
          />
        </FormControl>
        <TextField variant="standard" label="name">Name</TextField>
        <TextField variant="standard" label="recovery email address">Recovery Email Address</TextField>
        <TextField variant="standard" label="Phone number">Phone Number</TextField>
        <TextField variant="standard" label="gender">
          
          Gender

          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
      
    </Stack>
  );
}