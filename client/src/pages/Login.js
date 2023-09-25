import React, { useState , useEffect } from "react";
import axios from "axios";
import GoogleLogin from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
import { Box, Container, Typography, FormControl, InputLabel, Input, FormHelperText, Button, Divider, Dialog, DialogContent } from "@mui/material";
import Register from "./Register";

export default function Login(props) {

    // state variables to keep track of input field values

//     // 클라이언트 측 코드 (예: React 앱)

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
      const response = await fetch('여기에_백엔드_API_URL을_입력하세요', {
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

  //   // 이 부분에서 사용자가 입력한 이메일(email)과 비밀번호(password)를 가져와야 합니다.
  //   // 예를 들어, state 변수인 email과 password를 사용합니다.

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





  return (
    <>
      <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh" }}>
        <Box sx={{position:"relative", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
          <img src={imageUrl} alt="background" style={{top:0, right:0}}/>
          <Box sx={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", right:0, backgroundColor:"white", width:"50%", height:"100%", backgroundColor:"wheat"}}>
            <Box sx={{ display:"flex", flexDirection:"column"}}>
                <Typography variant="h5" gutterBottom align="center">
                  Sign in
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


