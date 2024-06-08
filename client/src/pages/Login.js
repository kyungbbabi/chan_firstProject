import React, { useState , useEffect, useRef, useContext } from "react";
import axios from "axios";
import GoogleLogin from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
import { Box, Container, Typography, FormControl, InputLabel, Input, FormHelperText, Button, Divider, Dialog, DialogContent, InputAdornment } from "@mui/material";
import {store} from '../store/store'
import Register from "./Register";

export default function Login(props) {

    // state variables to keep track of input field values

  const [state, dispatch] = useContext(store);

  const [open, setOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: null, password: null });
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('xs');

  const [imageUrl, setImageUrl] = useState("");

  const loginRef = useRef();

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

    loginRef.current.focus(); //login ID focus
  }, []);
  
  const loginValidate = () => {
    let valid = true;
    if (!loginInfo.email) {
      setEmailErrorMessage('이메일을 입력해주세요.');
      valid = false;
    }
    else setEmailErrorMessage('');
    if (!loginInfo.password) {
      setPasswordErrorMessage('비밀번호를 입력해주세요.');
      valid = false;
    }else setPasswordErrorMessage('');
    console.log('Validation result:', valid);
    return valid;
  }

  const handleClickLogin = (e) => {
    e.preventDefault();
    // Call loginValidate and capture the result
    const isValid = loginValidate();

    // Print the validation result
    console.log('Is form valid:', isValid);

    // Print the error messages
    console.log('Email error message:', emailErrorMessage);
    console.log('Password error message:', passwordErrorMessage);
  }
  
  //이해하기
  const handleLoginInfoChange = (e) => { //e는 이벤트 객체로, 입력 필드에서 발생하는 이벤트에 대한 정보를 담고 있습니다.
    const { name, value } = e.target; // name과 value를 구조 분해 할당하여 각각 입력 필드의 이름과 값을 추출합니다.  [ name: 입력 필드의 이름 속성 (name). value: 입력 필드의 현재 값 (value). ]
    setLoginInfo({ // setLoginInfo 함수는 loginInfo 상태를 업데이트하는 함수입니다. 상태 객체를 업데이트할 때는 기존 상태를 복사하여 새 객체를 생성하는 것이 중요합니다.
      ...loginInfo, //...loginInfo는 기존의 loginInfo 객체를 복사합니다 (스프레드 연산자 사용).
      [name]: value // [name]: value는 입력 필드의 name을 키로 사용하여 해당 키의 값을 value로 설정합니다. 이렇게 하면 특정 입력 필드의 값만 변경되고 나머지 필드는 그대로 유지됩니다.
    });
  };


  // email 입력 필드에서 값이 변경된 경우:
    // name = "email" value = 입력된 이메일 값
    // loginInfo 상태가 { email: 입력된 이메일 값, password: 기존 password 값 }로 업데이트됩니다.

  // password 입력 필드에서 값이 변경된 경우:
    // name = "password" value = 입력된 비밀번호 값
    // loginInfo 상태가 { email: 기존 email 값, password: 입력된 비밀번호 값 }로 업데이트됩니다.
  





// // 로그인 요청
// async function loginUser(username, password) {
//   try {
//     const response = await fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });
//     if (!response.ok) {
//       throw new Error('Login failed.');
//     }
//     const data = await response.json();
//     const token = data.token;

//     // 토큰을 로컬 스토리지에 저장
//     localStorage.setItem('token', token);

//     return token;
//   } catch (error) {
//     console.error(error);
//   }
// }

// const handleClickLogin = async (e) => {
//   e.preventDefault(); 폼 제출과 같은 기본 동작을 방지합니다. 이는 페이지가 새로고침되지 않도록 하기 위함입니다.

//   dispatch({type: 'OpenLoading', payload: '로그인을 시도중입니다..'});
// 로딩 상태를 시작합니다. dispatch 함수는 Redux 또는 Context API를 사용하여 전역 상태를 업데이트하는 데 사용됩니다.
// OpenLoading 액션을 통해 "로그인을 시도중입니다.."라는 메시지를 표시합니다.

//   loginValidate() && loginValidate 함수가 로그인 정보를 검사합니다. 이 함수는 true 또는 false를 반환합니다.
  //   await axios.post(`/auth/login`, loginInfo) 
  // axios.post 메서드를 사용하여 서버에 로그인 요청을 보냅니다.
  // loginInfo는 사용자의 로그인 정보(이메일과 비밀번호)를 포함하는 객체입니다.

  //     .then(res => {
  //       if (res.status === 200) {   응답 상태 코드가 200이면 로그인 성공으로 간주합니다.
  //         localStorage.setItem('token', res.data.token);
  //         navigate(-1);
  //         dispatch({type: 'OpenSnackbar', payload: `로그인되었습니다.`});
//   res.data.token을 로컬 스토리지에 저장합니다.
// navigate(-1)을 호출하여 이전 페이지로 이동합니다.
// OpenSnackbar 액션을 통해 "로그인되었습니다."라는 메시지를 표시합니다.
  //       }
  //       else {
  //         setAuth(true);
  // 응답 상태 코드가 200이 아닌 경우, setAuth(true)를 호출하여 인증 실패 상태를 설정합니다.
  //       }
  //     })
  //     .catch(error => { 로그인 실패 시 발생하는 오류를 처리합니다.
  //       if (error.response.status === 401) {
  //         setErrorMessage(error.response.data.message);
  //       } else setErrorMessage('')
  //       console.error(error.response);
  //   응답 상태 코드가 401인 경우, setErrorMessage를 통해 인증 실패 메시지를 설정합니다.
  // 기타 오류가 발생한 경우, 오류 메시지를 빈 문자열로 설정합니다.
  //     })
  //     .finally(() => dispatch({type: 'CloseLoading'})); 로딩 상태를 종료합니다. 이 블록은 성공, 실패와 상관없이 항상 실행됩니다.
  //   dispatch({type: 'CloseLoading'}) 
  // };

// // API 요청 시 토큰을 함께 보냄
// async function fetchProtectedResource() {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     console.error('Token not found.');
//     return;
//   }

//   try {
//     const response = await fetch('/protected-resource', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error('Failed to fetch protected resource.');
//     }
//     const data = await response.json();
//     console.log('Protected resource:', data);
//   } catch (error) {
//     console.error(error);
//   }
// }

  // const loginValidate = async (email, password) => {
  //   try{
  //     const response = await fetch('여기에_백엔드_API_URL을_입력하세요', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ email: email, password: password })
  //     });
  //     if (!response.ok) {
  //       throw new Error('Login failed.');
  //     }
  //     const user = await response.json();
  //     return user;
  //   } catch(error){
  //     return null;
  //   }
  // }



  const GoogleButton = ({ onSocial }) => {

    const clientId = process.env.REACT_APP_CLIENT_ID

    useEffect(() => {
      const start = async () => {
        await gapi.client.init({
          clientId,
          scope: 'email',
        });
      };

      gapi.load('client:auth2', start);
    }, []);
    
    const onSuccess = async (response) => {
      // let body = {
      //   access_token: response.accessToken,
      //   id_token: response.tokenId,  
      // };
  
      // await axios
      //   .post(`${해당 프로젝트의 서버 도메인}/accounts/rest-auth/google/`, body, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response);
      //     localStorage.setItem("accessToken", response.data.access_token);
      //     navigate("/");
      //   })
      //   .catch((error) => console.log(error));
    }

    const onFailure = (response) => {
      // console.log("error", response);
    }
    
    // gapi.load("client:auth2", () => {
    //   gapi.client.init({
    //     clientId: `${발급받은 구글 클라이언트 아이디}.apps.googleusercontent.com`,
    //     plugin_name: "chat",
    //   });
    // });

    return(
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Sign in With Google"
      />
    )
  };

  const handleClickOpen = () => {setOpen(true);};
  const handleClickClose = () => {setOpen(false);};



  return (
    <>
      <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh" }}>
        <Box sx={{position:"relative", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
          {imageUrl && <img src={imageUrl} alt="Unsplash" style={{ width: '800px', height: '600px' }} />}
          <Box sx={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", right:0, backgroundColor:"white", width:"50%", height:"100%", backgroundColor:"wheat"}}>
            <Box sx={{ display:"flex", flexDirection:"column"}}>
                <Typography variant="h5" gutterBottom align="center">
                  Sign in
                </Typography>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", padding:"1em"}}>
                <FormControl error={!!emailErrorMessage} fullWidth>
                  <InputLabel variant="standard">Email</InputLabel>
                  <Input inputRef={loginRef} name="email" onChange={handleLoginInfoChange} inputProps={{ autoComplete: "username" }} />
                  <FormHelperText>{emailErrorMessage}</FormHelperText>
                </FormControl>
                <FormControl error={!!passwordErrorMessage} fullWidth>
                  <InputLabel variant="standard">Password</InputLabel>
                  <Input type="password" name="password" onChange={handleLoginInfoChange} inputProps={{ autoComplete: "current-password" }} />
                  <FormHelperText>{passwordErrorMessage}</FormHelperText>
                  <FormHelperText sx={{ textAlign: "end", margin: "0" }}>Forget password?</FormHelperText>
                </FormControl>
              </Box>
              <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Button variant="contained" onClick={handleClickLogin}>Sign in</Button>
              </Box>
                <Divider sx={{padding:"1rem"}}>OR</Divider>
              <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <GoogleButton />
              </Box>
              <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", padding:"1rem"}}>
                <Typography>New Account?</Typography>
                <Button onClick={handleClickOpen}>
                  Create Account
                </Button>
                <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClickClose}>
                  <DialogContent>
                    <Register />
                  </DialogContent>
                </Dialog>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}


