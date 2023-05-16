import React, { useState , useEffect } from "react";
import axios from "axios";
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { Box, Container, Typography, FormControl, InputLabel, Input, FormHelperText, Button, Divider, Dialog, DialogContent } from "@mui/material";
import Register from "./Register";

export default function Login(props) {

    // state variables to keep track of input field values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  
  const [imageUrl, setImageUrl] = useState("");

  // useEffect(() => {
  //   async function fetchImage() {
  //      const randomString = Math.random().toString(36).substring(7);
  //       const response = await axios.get(`https://source.unsplash.com/random?${randomString}`)
  //       setImageUrl(response.request.responseURL);
  //       }
  //       fetchImage();
  // }, []);

  useEffect(() => {
    async function fetchImage() {
        const response = await fetch(`https://picsum.photos/seed/picsum/800/500`)
        setImageUrl(response.url);
        }
        fetchImage();
  }, []);

  const loginValidate = async (email, password) => {
    try{
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      });
      if (!response.ok) {
        throw new Error('Login failed.');
      }
      const user = await response.json();
      return user;
    } catch(error){
      return null;
    }
  }

  // const handleClickLogin = async (e) => {
  //   e.preventDefault();
  //   dispatch({type: 'OpenLoading', payload: '로그인을 시도중입니다..'});
  //   loginValidate() &&
  //   await axios.post(`/auth/login`, loginInfo)
  //     .then(res => {
  //       if (res.status === 200) {
  //         localStorage.setItem('token', res.data.token);
  //         navigate(-1);
  //         dispatch({type: 'OpenSnackbar', payload: `로그인되었습니다.`});
  //       }
  //       else {
  //         setAuth(true);
  //       }
  //     })
  //     .catch(error => {
  //       if (error.response.status === 401) {
  //         setErrorMessage(error.response.data.message);
  //       } else setErrorMessage('')
  //       console.error(error.response);
  //     })
  //     .finally(() => dispatch({type: 'CloseLoading'}));
  //   dispatch({type: 'CloseLoading'})
  // };
  // const handleClickAuthLogin = async (e) => {
  //   dispatch({type: 'OpenLoading', payload: '로그인을 시도중입니다..'});
  //   (loginValidate() & codeValidate()) &&
  //   await axios.post(`/auth/mail-auth-login`, {code: authCode, ...loginInfo})
  //     .then(res => {
  //       localStorage.setItem('token', res.data.token);
  //       navigate('/');
  //       dispatch({type: 'OpenSnackbar', payload: `로그인되었습니다.`});
  //     })
  //     .catch(error => {
  //       setCodeErrorMessage(error.response.data.message);
  //       console.error(error);
  //     })
  //     .finally(() => dispatch({type: 'CloseLoading'}));
  //   dispatch({type: 'CloseLoading'})
  // };

  // useEffect(() => {
  //   if (authCode.length === 6) handleClickAuthLogin()
  // }, [authCode]);


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

  const handleHelperTextClick = (e) => {
    e.preventDefault();
    console.log("1");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/api/login', (req, res) => {
//   // 클라이언트로부터 이메일과 비밀번호를 받아옵니다.
//   const { email, password } = req.body;

//   // 이메일과 비밀번호를 검증하는 로직을 구현합니다.
//   if (email === 'user@example.com' && password === 'password') {
//     // 검증이 성공하면 액세스 토큰을 생성합니다.
//     const accessToken = generateAccessToken();

//     // 액세스 토큰을 클라이언트에게 반환합니다.
//     res.json({ accessToken });
//   } else {
//     // 검증이 실패한 경우 에러 메시지를 반환합니다.
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// // 액세스 토큰을 생성하는 함수입니다.
// function generateAccessToken() {
//   // 액세스 토큰 생성 로직을 구현합니다.
//   // 예를 들어, jsonwebtoken 패키지를 사용하여 토큰을 생성할 수 있습니다.
//   // 자세한 사용법은 해당 패키지의 문서를 참조하세요.
// }

// // 서버를 시작합니다.
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });



  return (
    <>
      <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh" }}>
        <Box sx={{position:"relative", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
          <img src={imageUrl} alt="background" style={{top:0, right:0}}/>
          <Box sx={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", right:0, backgroundColor:"white", width:"50%", height:"100%"}}>
            <Box sx={{ display:"flex", flexDirection:"column"}}>
                <Typography variant="h5" gutterBottom align="center">
                  Sign In
                </Typography>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", padding:"1em"}}>
                <FormControl>
                  <InputLabel variant="standard">ID</InputLabel>
                  <Input id="login-input" />
                </FormControl>
                <FormControl>
                  <InputLabel variant="standard">Password</InputLabel>
                  <Input id="password-input" type="password" />
                  <FormHelperText onClick={handleHelperTextClick} sx={{textAlign:"end", margin:"0"}}>Forget password?</FormHelperText>
                </FormControl>
              </Box>
              <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Button variant="contained">Sign in</Button>
              </Box>
                <Divider sx={{padding:"1rem"}}>OR</Divider>
              <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <GoogleButton />
              </Box>
              <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", padding:"1rem"}}>
                <Typography>New Lovebrids?</Typography>
                <Button onClick={handleClickOpen}>
                  Create Account
                </Button>
                <Dialog open={open} onClose={handleClickClose}>
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


