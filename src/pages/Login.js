import React from "react";
import LoginImg from "../test.png"

export default function Login(props) {

  const handleClickLogin = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
      <section style={{position:"relative", display:"flex", justifyContent:"center", alignItem:"center", height:"500px"}}>
        <div style={{position:"absolute", display:"flex", flexDirection:"row"}}>  
          <div>
            <img src={LoginImg} style={{maxWidth:"500px", maxHeight:"500px"}}/>
          </div>
          <div style={{display:"grid", justifyContent:"center", alignItems:"center", textAlign:"center", marginBottom:"20px", backgroundColor:"white", width:"350px", height:"500px"}}> {/* float로 위치 오른쪽 왼쪽 조절가능 */}
            <h1 style={{fontSize:"xxx-large"}}>Sign In</h1>
            <div>
              <input type="email" placeholder="name@address.com" />
            </div>
            <div>
              <input type="password" placeholder="****" />              
            </div>
            <div>
              <label><input type="checkbox" />Remember me</label>
            </div>
            <button type="submit" style={{height:"25%" ,borderRadius:"5%", display:"flex", justifyContent:"center"}} onClick={handleClickLogin}>Sign In</button>
          </div>
        </div>  
      </section>
    </>
  );
}