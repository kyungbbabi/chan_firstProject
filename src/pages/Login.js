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
  //     const response = await fetch("https://picsum.photos/seed/picsum/800/600")
  //     setImageUrl(response.url);
  //   }
  //   fetchImage();
  // }, []);

  useEffect(() => {
    async function fetchImage() {
       const randomString = Math.random().toString(36).substring(7);
        const response = await axios.get(`https://source.unsplash.com/random?${randomString}`)
        setImageUrl(response.request.responseURL);
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

  const GoogleButton = ({ onSocial }) => {

    const clientId = process.env.REACT_APP_CLIENT_ID

    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId,
          scope: 'email',
        });
      }

      gapi.load('client:auth2', start);
    }, []);
    
    const onSuccess = (response) => {
      // let body = {
      //   access_token: res.accessToken,
      //   id_token: res.tokenId,  
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
        style={{display:"flex", justifyContent:"center"}}
        sx={{display:"flex", justifyContent:"center"}}
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
      <Container maxWidth="xs" sx={{position:"relative", display:"flex", alignItems:"center", justifyContent:"center", height:"100vh" }}>
        <Box sx={{position:"absolute", display:"flex", flexDirection:"row"}}>
          <img src={imageUrl} alt="background" style={{width:"100%", height:"100%"}} />

        <Box display="flex" flexDirection="column">
          <Typography variant="h5" gutterBottom align="center">
            Sign In
          </Typography>
          <FormControl>
            <InputLabel variant="standard">ID</InputLabel>
            <Input id="login-input" />
          </FormControl>
          <FormControl>
            <InputLabel variant="standard">Password</InputLabel>
            <Input id="password-input" type="password" />
            <FormHelperText onClick={handleHelperTextClick} style={{textAlign:"end"}}>Forget password?</FormHelperText>
          </FormControl>
          <Button variant="contained">Sign in</Button>
          <Divider>OR</Divider>
          <GoogleButton style={{display:"flex", justifyContent:"center"}} />
          <Box display="flex" flexDirection="row" alignItems="center">
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
      </Container>
    </>
  );
}


