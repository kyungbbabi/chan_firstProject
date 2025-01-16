import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

export default function Profile() {

  const [profile, setProfile] = useState({username:'', email:'', profileImageUrl:'', postCount:'', portfolioCount:''});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setProfile({})
  }, [])

  return (
    <Box>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4em"}}>
        <Grid sx={{display: "flex", alignItems: 'center', gap: 2}}> 
        <Avatar sx={{ width: 100, height: 100 }} src={profile.profileImageUrl} />
          <Box>
            <Typography variant="h5">{profile.username}</Typography>
            <Typography variant="body1" color="textSecondary">
              {profile.email}
            </Typography>
          </Box>
        </Grid>
        {/* Stats */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography> 게시물: {profile.postCount} </Typography>
            <Typography> 포트폴리오: {profile.portfolioCount} </Typography>
          </Box>
        </Grid>
        {/* Bio Section */}
        {/* Action Buttons */}
        <Grid item xs={12}>
          <Button  variant="contained"  onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? '저장' : '프로필 수정'}
          </Button>
        </Grid>
      </Box>
    </Box>
  );

};
