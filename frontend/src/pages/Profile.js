import React, { useState } from "react";
import { Avatar, Box, Button, Grid, Typography, TextField,Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";

export default function Profile() {
  
  const [profile, setProfile] = useState({ username: '사용자명', email: 'user@example.com', profileImageUrl: '', postCount: 0, portfolioCount: 0, bio: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });

  // 임시 프로필 이미지 변경 처리
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({
          ...prev,
          profileImageUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 프로필 정보 수정 처리
  const handleProfileUpdate = () => {
    // API 연동 후 구현
    setIsEditing(false);
  };

  // 비밀번호 변경 처리
  const handlePasswordChange = () => {
    // 비밀번호 유효성 검사
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('새 비밀번호가 일치하지 않습니다.');
      return;
    }
    // API 연동 후 구현
    setOpenPasswordDialog(false);
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <Box>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5em"}}>
        <Grid sx={{display: "flex", alignItems: 'center', gap: 2, position: 'relative'}}> 
          <Box sx={{ position: 'relative' }}>
            <Avatar src={profile.profileImageUrl} />
            {isEditing && (
              <IconButton sx={{ position: 'absolute', backgroundColor: 'white' }} size="small" component="label" onClick={handleImageChange} >
              </IconButton>
            )}
          </Box>
          <Box>
            {isEditing ? (
              <TextField value={profile.username} onChange={(e) => setProfile({...profile, username: e.target.value})} variant="standard" sx={{ mb: 1 }} />
            ) : (
              <Typography variant="h5">{profile.username}</Typography>
            )}
            <Typography variant="body1" color="textSecondary">
              {profile.email}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography> 게시물: {profile.postCount} </Typography>
            <Typography> 포트폴리오: {profile.portfolioCount} </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3, width: '100%', display: 'flex', justifyContent: 'center' }}>
          {isEditing ? (
            <TextField fullWidth multiline rows={3} label="자기소개" value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})} />
          ) : (
            <Typography>
              {profile.bio || '자기소개를 입력해주세요.'}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? '저장' : '프로필 수정'}
            </Button>
            {!isEditing && (
              <Button variant="outlined" onClick={() => setOpenPasswordDialog(true)}>
                비밀번호 변경
              </Button>
            )}
          </Box>
        </Grid>
      </Box>

      <Dialog open={openPasswordDialog} onClose={() => setOpenPasswordDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>비밀번호 변경</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', pt: 1 }}>
            <TextField type="password" label="현재 비밀번호" value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
            />
            <TextField type="password" label="새 비밀번호" value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
            />
            <TextField type="password" label="새 비밀번호 확인" value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpenPasswordDialog(false)}>취소</Button>
          <Button onClick={handlePasswordChange} variant="contained">변경</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}