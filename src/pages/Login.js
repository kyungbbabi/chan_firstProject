import React, {useState} from "react";
import LoginImg from "../test.png"

export default function Login(props) {
  
  const inputStyles = {
    width: "100%",
    height: "35px",
    padding: "5px",
    marginBottom: "10px",
    fontSize: "1.2rem",
    border: "1px solid #ddd",
    borderRadius: "3px",
  };
  const labelStyles = {
    position: "absolute",
    top: "0",
    left: "5px",
    color: "#999",
    fontSize: "1rem",
    transition: "all 0.2s ease-out",
    transformOrigin: "0 0",
    pointerEvents: "none",
  };

    // state variables to keep track of input field values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // event handlers to update state variables
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleClickLogin = (e) => {
      e.preventDefault();
    }


  return (
    <>
      <section style={{position:"relative", display:"flex", justifyContent:"center", alignItem:"center", height:"500px"}}>
        <div style={{position:"absolute", display:"flex", flexDirection:"row", maxHeight:"500px"}}>  
          <div>
            <img src={LoginImg} style={{maxWidth:"500px", maxHeight:"500px"}}/>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", backgroundColor:"white", width:"350px", height:"500px"}}>
            <h1 style={{fontSize:"xxx-large"}}>Sign In</h1>
            <div style={{position:"relative"}}>
              <input type="email" style={inputStyles}  value={email} onChange={handleEmailChange}/>
              <label style={{...labelStyles, opacity: email ? "0" : "1", transform: email ? "translateY(-1.5rem)" : "none",}}>Email address</label>
            </div>
            <div style={{position:"relative", marginBottom:"20px"}}>
              <input type="password" style={inputStyles} placeholder="****" value={password} onChange={handlePasswordChange}/>              
              <label style={{...labelStyles, opacity: password ? "0" : "1", transform: password ? "translateY(-1.5rem)" : "none",}}>Password</label>
            </div>
            <div style={{marginBottom:"20px"}}>
              <label><input type="checkbox" />Remember me</label>
            </div>
            <button type="submit" style={{width:"40%" ,borderRadius:"5%", display:"flex", justifyContent:"center"}} onClick={handleClickLogin}>Sign In</button>
          </div>
        </div>  
      </section>
    </>
  );
}