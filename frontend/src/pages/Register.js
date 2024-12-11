import React, { useState, useCallback, useRef, useEffect } from "react";
import { Container, Box, Typography, TextField, FormControl, InputLabel, MenuItem, Select, Button, Grid } from "@mui/material";
import axios from 'axios';

export default function Register(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [name, setName] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");

  const [emailMsg, setEmailMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState('');
  const [confirmPwdMsg, setConfirmPwdMsg]= useState("")

  const [imageUrl, setImageUrl] = useState('');

  const inputRef = useRef('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
        setImageUrl(response.data[0].urls.regular);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImage();

    inputRef.current.focus(); //First input focus
  }, []);

  // 1-1. 이메일 / 비밀번호 / 닉네임 유효성 검사
  const validateEmail = (email) => {
    if (typeof email !== 'string') {
      return false;
    }
    return email
      .toLowerCase()
      .match(/([\w-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
  };  

  const validatePwd = (password) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  }


  // 이메일 
  const onChangeEmail = useCallback ((e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);

    if (!validateEmail(currEmail)) {
      setEmailMsg("이메일 형식이 올바르지 않습니다.")
    } else {
        setEmailMsg("올바른 이메일 형식입니다.")
      }
    })

  //비밀번호
  const onChangePassword = useCallback((e) => {
    const currPwd = e.target.value;
    setPassword(currPwd);

    if (!validatePwd(currPwd)) {
      setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.")
    } else {
      setPwdMsg("안전한 비밀번호입니다.")
    }
  }, [])

  // 비밀번호 확인
  const onChangeConfirmPassword = useCallback((e) => {
    const currConfirmPwd = e.target.value;
    setConfirmPwd(currConfirmPwd);

    if (currConfirmPwd !== password) {
      setConfirmPwdMsg("비밀번호가 일치하지 않습니다.")
    } else {
      setConfirmPwdMsg("올바른 비밀번호입니다.")
    }
  }, [password])

// 이메일 // 닉네임 중복 확인
// 프론트엔드에서 axios post로 사용자가 쓴 이메일과 닉네임 값을 보내주면 result 값을 boolean으로 뱉어주는 로직을 짜고 프론트엔드는 사용자가 버튼을 누르면 이 boolean 값으로 중복인지 아닌지 걸러주는 로직을 짜기로 했다.
  const [checkMail, setCheckMail] = useState(false)
  const [checkNickname, setCheckNickname] = useState(false)

  const onCheckEmail = async (e) => {
    e.preventDefault();

    try { 
      const res = await axios.post("user/register/email", {email});
      const { result } = res.data;

      if (!result) {
          setEmailMsg("이미 등록된 메일입니다. 다시 입력해주세요.");
          setCheckMail(false);
      } else {
        setEmailMsg("사용 가능한 메일입니다.😊");
        setCheckMail(true);
      }

    } catch (err) {
      console.log(err);
    }
  }
    
  const handleClickRegister = async (e) => {
    e.preventDefault();if (!validateEmail(email)) {
      setEmailMsg("유효한 이메일을 입력해주세요.");
      return;
    }
    if (!validatePwd(password)) {
      setPwdMsg("유효한 비밀번호를 입력해주세요.");
      return;
    }
    if (password !== confirmPwd) {
      setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!validateEmail(recoveryEmail)) {
      setRecoveryEmail("유효한 복구 이메일을 입력해주세요.");
      return;
    }

    try {
      const res = await axios.post("/user/register", {
        email,
        password,
        name,
        recoveryEmail,
        genders,
        emailCode
      });
      if (res.status === 200) {
        console.log("회원가입 성공!");
        // 추가적인 처리 (예: 로그인 페이지로 리디렉션)
      }
    } catch (err) {
      console.error(err);
      // 에러 메시지 처리
    }
  }
  const [selectedGender, setSelectedGender] = useState("");
  const genders = [ {value:'Man', label:'Man'}, {value:"Woman", label:"Woman"}]

  return(
    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <Box sx={{position:"relative", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        {imageUrl && <img src={imageUrl} alt="Unsplash" style={{ width: '800px', height: '600px'}} />}
        <Box sx={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", right:0, backgroundColor:"white", width:"50%", height:"100%", backgroundColor:"wheat"}}>
          <Box sx={{ display:"flex", flexDirection:"column", width: "75%"}}>
            <Typography variant="h5" align="center">Sign Up</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth variant="standard" label="Email Address" onChange={onChangeEmail} inputRef={inputRef} />
                {emailMsg && <Typography variant="body2" color="error" style={{ marginTop: '8px' }}>{emailMsg}</Typography>}
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth variant="standard" type="password" label="Password" onChange={onChangePassword} />
                {pwdMsg && <Typography variant="body2" color="error">{pwdMsg}</Typography>}
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth variant="standard" type="password" label="Password confirm" onChange={onChangeConfirmPassword} />
                {confirmPwdMsg && <Typography variant="body2" color="error">{confirmPwdMsg}</Typography>}
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth variant="standard" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth variant="standard" label="Recovery Email Address" type="email" value={recoveryEmail} onChange={(e) => setRecoveryEmail(e.target.value)} />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth variant="standard" label="Email Code" value={emailCode} onChange={(e) => setEmailCode(e.target.value)} />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Gender</InputLabel>
                  <Select label="Gender" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                    {genders.map((gender) => (
                      <MenuItem key={gender.value} value={gender.value}>{gender.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={handleClickRegister}>Done</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );

}