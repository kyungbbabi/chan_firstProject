import React, { useState, useEffect } from "react";
import "../style.css"
import LoginImg from "../test.png";

export default function Login(props) {
  
  //chat GPT가 만든거

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch("https://source.unsplash.com/category/nature/")
      setImageUrl(response.url);
    }
    fetchImage();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission here
  };

  
  return (
    <>
      <div style={{backgroundColor:"wheat", height:"100vh"}}>
        <section style={{position:"fixed", top:"50%", left:"50%", transform:"translate(-50%, -50%)", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div style={{position:"relative", display:"flex", flexDirection:"row-reverse", maxWidth:"100%", maxHeight:"100%"}}>
            
            <img src={imageUrl} alt="Nature"  style={{width:"100%", height:"100%"}}/>
            
              <div style={{position:"absolute", display:"flex", justifyContent:"center", backgroundColor:"white", width:"50%", height:"100%"}}>
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                  <h1 style={{fontSize:"xxx-large"}}>Sign In</h1>
                  <div style={{position:"relative"}}>
                    <input type="email" id="email-input" value={email} onChange={handleEmailChange} style={{width:"100%", height:"2rem"}}
                      placeholder=" " autoComplete="username" />
                      <label style={{position:"absolute", top:"50%", transform:"translateY(-50%)", left:"10px", pointerEvents:"none",
                                    color:"#aaa", transition:"0.2s", fontSize:"16px", fontWeight:"bold", fontFamily:"Arial, sans-serif"}}>
                        Email Address
                      </label>
                  </div>
                  <div style={{position:"relative", marginBottom:"20px" }}>
                    <input type="password" id="password-input" value={password} onChange={handlePasswordChange} style={{width:"100%", height:"2rem"}}
                          placeholder=" " autoComplete="current-password" />
                      <label style={{position:"absolute", top:"50%", transform:password ? "translateY(-1.5rem)" :"translateY(-50%)", left:"10px", 
                                    pointerEvents:"none", transition:"0.2s", fontWeight:"bold", opacity:"0.5"}}>
                        Password
                      </label>
                  </div>
                  <div style={{marginBottom:"20px"}}>
                    <label><input type="checkbox" />Remember me</label>
                  </div>
                  <button type="submit" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    Sign In
                  </button>
                </form>
              </div>
            
          </div>
        </section>
      </div>
    </>
  );
}
