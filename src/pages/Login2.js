import React, { useState, useEffect } from "react";
import { BrowserRouter as Routes, Link, Router } from "react-router-dom";
import axios from "axios"
import Register from "./Register";
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import "../style.css"

export default function Login(props) {
  
  // chat GPT가 만든거

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
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
      const response = await axios.get("https://source.unsplash.com/random/")
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
      />
    )
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // login(email, password)
    //   .then((response) => {
        
    //   })
    //   .catch((error) => {
        
    //   })
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "https://example.com/api/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     console.log(response.data); // 로그인에 성공한 경우, response.data에 사용자 정보 등이 담길 것입니다.
  //   } catch (err) {
  //     setError("로그인에 실패했습니다.");
  //   }
  // };
  
  return (
    <>
      <main>
        <section style={{position:"fixed", top:"50%", left:"50%", transform:"translate(-50%, -50%)", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div style={{position:"relative", display:"flex", flexDirection:"row-reverse", maxWidth:"100%", maxHeight:"100%"}}>
            
            <img src={imageUrl} alt="Nature"  style={{width:"100%", height:"100%"}}/>
            
            <div style={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"white", width:"50%", height:"100%"}}>
              <form onSubmit={handleSubmit} id="login-form">
                <h1>Sign In</h1>
                <div style={{position:"relative", display:"inline-block"}}>
                  <input type="email" id="email-input" value={email} onChange={handleEmailChange} placeholder=" " autoComplete="username" 
                         style={{height:"2.5rem", padding:"0.375rem 0.75rem", fontSize:"1rem", fontWeight:"400", lineHeight:"1.5", color:"#495057", 
                                 border:"none", borderBottom: "1px solid #ced4da" ,borderRadius:"0.25rem"}} />
                    <label style={{position:"absolute", top:"1.75rem", left:"0.75rem", display:"inline-block", color:email ? "#E0E0E0" : "#495057", 
                                   textAlign:"left", transform:email ? "translateY(-1.5rem)" : "translateY(-50%)"}}>
                      Email Address
                    </label>
                </div>
                <div style={{position:"relative", marginBottom:"20px"}}>
                  <input type="password" id="password-input" value={password} onChange={handlePasswordChange} placeholder=" " autoComplete="current-password" 
                         style={{height:"2.5rem", padding:"0.375rem 0.75rem", fontSize:"1rem", fontWeight:"400", lineHeight:"1.5", color:"#495057", 
                                 border:"none", borderBottom: "1px solid #ced4da" ,borderRadius:"0.25rem"}} />
                  <label htmlFor="password-input" style={{position:"absolute", top:"1.75rem", left:"0.75rem", display:"inline-block", color:password ? "#E0E0E0" : "#495057", 
                                                          textAlign:"left", transform:password ? "translateY(-1.5rem)" : "translateY(-50%)"}}>
                    Password
                  </label>
                </div>
                <div style={{marginBottom:"2rem"}}>
                  <label><input type="checkbox" />Remember me</label>
                </div>
                <button type="submit" style={{marginBottom:"2rem", width:"100%"}}>
                  Sign In
                </button>
                <div style={{marginBottom:"2rem"}}>
                  <GoogleButton />
                </div>
                <div style={{marginBottom:"1rem"}}>New Lovebrids?</div>
                {/* <Router>
                  <Link to="/register">Create Account</Link>
                  <Routes path="/register" component={Register} />
                </Router> */}
              </form>
            </div>

            
          </div>
        </section>
      </main> 
    </>
  );
}
