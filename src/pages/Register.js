import React, { useState } from "react";
import { Stack, Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, MenuItem, Select, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Register(props) {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => { e.preventDefault(); };

  const handleClickRegister = (e) => {
    e.preventDefault();
  }


  const genders = [ {value:'Man', label:'Man'}, {value:"Woman", label:"Woman"}]

  return(
    <Stack spacing={2}>
      <Typography variant="h5" align="center">Sign Up</Typography>
      
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
      <TextField variant="standard" label="recovery email address" type="email">Recovery Email Address</TextField>
      <TextField variant="standard" label="phone number">Phone Number</TextField>
      <FormControl variant="standard">
        <InputLabel>gender</InputLabel>
        <Select label="gender">
          <MenuItem value=""></MenuItem>
          <MenuItem value="Man">Man</MenuItem>
          <MenuItem value="Woman">Woman</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleClickRegister}>Done</Button>
    </Stack>
  );
}