import React, { useState, useCallback } from "react";
import { Stack, Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, MenuItem, Select, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Axios } from "axios";

export default function Register(props) {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [emailMsg, setEmailMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState('');
  const [confirmPwdMsg, setConfirmPwdMsg]= useState("")

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => { e.preventDefault(); };

  const handleClickRegister = (e) => {
    e.preventDefault();
  }

  // 1-1. 이메일 / 비밀번호 / 닉네임 유효성 검사
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
  };

  const validatePwd = (password) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  }


  // 1-1에 잡아뒀던 유효성 검사 함수로 정리하기
  const isEmailValid = validateEmail(email);
  const isPwdValid = validatePwd(password);
  const isConfirmPwd = password === confirmPwd;


  // 이메일 
  const onChangeEmail = useCallback( async (e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);

    if (!validateEmail(currEmail)) {
      setEmailMsg("이메일 형식이 올바르지 않습니다.")
    } else {
        setEmailMsg("올바른 이메일 형식입니다.")
      }
    })

    //비밀번호
  const onChangePwd = useCallback((e) =>{
    const currPwd = e.target.value;
    setPassword(currPwd);

    if (!validatePwd(currPwd)) {
      setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.")
    } else {
      setPwdMsg("안전한 비밀번호입니다.")
    }
  }, [])

  // 비밀번호 확인
  const onChangeConfirmPwd = useCallback((e) => {
    const currConfirmPwd = e.target.value;
    setConfirmPwd(currConfirmPwd);

    if (currConfirmPwd !== password) {
      setConfirmPwdMsg("비밀번호가 일치하지 않습니다.")
    } else {
      setConfirmPwdMsg("올바른 비밀번호입니다.")
    }
  }, [password])

// 이메일 / 닉네임 중복 확인
// 백엔드를 맡으신 분과 이런 저런 논의 끝에 백엔은 프엔에서 axios post로 사용자가 쓴 이메일과 닉네임 값을 보내주면 result 값을 불리언으로 뱉어주는 로직을 짜고 프엔은 사용자가 버튼을 누르면 이 불리언 값으로 중복인지 아닌지 걸러주는 로직을 짜기로 했다.
  const [checkMail, setCheckMail] = useState(false)
  const [checkNickname, setCheckNickname] = useState(false)

  const onCheckEmail = async (e) => {
    e.preventDefault();

    try { 
      const res = await Axios.post("user/register/email", {email});
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
          <MenuItem value="Man">Man</MenuItem>
          <MenuItem value="Woman">Woman</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleClickRegister}>Done</Button>
    </Stack>

  );
}