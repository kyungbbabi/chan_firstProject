import React, { useState, useEffect } from "react";
import axios from "axios"
import "../style.css"

export default function Login(props) {
  
  //chat GPT가 만든거

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch("https://source.unsplash.com/category/nature/")
      setImageUrl(response.url);
    }
    fetchImage();
  }, []);

  const loginValidate = async (email, password) => {
    try{
      const response = await fetch('https://localhost:8080', {
        method: 'POST',
        headers: {
          'Content-Type': 'package.json'
        },
        body: JSON.stringify(email, password)
      });
      if (!response.ok) {
        throw new Error('Login failed.');
      }
      const user = await response.json();
      return user;
    }catch(error){
      return null;
    }
  }

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
            
            <div style={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center" ,backgroundColor:"wheat", width:"50%", height:"100%"}}>
              <form onSubmit={handleSubmit} style={{display:"inline-block", textAlign:"center"}}>
                <h1>Sign In</h1>
                <div style={{position:"relative", display:"inline-block"}}>
                  <input type="email" id="email-input" value={email} onChange={handleEmailChange} placeholder=" " autoComplete="username" 
                         style={{height:"2.5rem", padding:"0.375rem 0.75rem", fontSize:"1rem", fontWeight:"400", lineHeight:"1.5", color:"#495057", 
                                 border:"1px solid #ced4da", borderRadius:"0.25rem"}} />
                    <label style={{position:"absolute", top:"1.75rem", left:"0.75rem", display:"inline-block", color:email ? "#E0E0E0" : "#495057", 
                                   textAlign:"left", transform:email ? "translateY(-1.5rem)" : "translateY(-50%)"}}>
                      Email Address
                    </label>
                </div>
                <div style={{position:"relative", marginBottom:"20px"}}>
                  <input type="password" id="password-input" value={password} onChange={handlePasswordChange} placeholder=" " autoComplete="current-password" 
                         style={{height:"2.5rem", padding:"0.375rem 0.75rem", fontSize:"1rem", fontWeight:"400", lineHeight:"1.5", color:"#495057", 
                                 border:"1px solid #ced4da", borderRadius:"0.25rem"}} />
                  <label htmlFor="password-input" style={{position:"absolute", top:"1.75rem", left:"0.75rem", display:"inline-block", color:password ? "#E0E0E0" : "#495057", 
                                                          textAlign:"left", transform:password ? "translateY(-1.5rem)" : "translateY(-50%)"}}>
                    Password
                  </label>
                </div>
                <div style={{marginBottom:"20px"}}>
                  <label><input type="checkbox" />Remember me</label>
                </div>
                <button type="submit">
                  Sign In
                </button>
              </form>
            </div>

            
          </div>
        </section>
      </main>
    </>
  );
}
