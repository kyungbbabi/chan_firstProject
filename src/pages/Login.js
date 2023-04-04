import React from "react";
import Image from "../newyork.png"
import BackgroundImage from "../component/BackgroundImage";

export default function Login(props) {

  const handleClickLogin = (e) => {
    e.preventDefault();
  }
  
  return (
    <div>
      <div style={{postion:"relative"}}>  
        <div style={{position:"absolute", backgroundColor:"white", display:"grid", gridColumn:"7/12", textAlign:"center"}}> {/* float로 위치 오른쪽 왼쪽 조절가능 */}
          <h1>Sign In</h1>
          <div postion="relative">
            <input type="email" placeholder="name@address.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div postion="relative">
            <input type="password" placeholder="****" />
            <label for="floatingInput" postion="absolute">Password</label>
          </div>
          <div postion="relative" margin-bottom="1rem">
            <label><input type="checkbox" />Remember me</label>
          </div>
          <button type="submit" onClick={handleClickLogin}>Sign In</button>
        </div>
        <div id="img_login"></div>
        <BackgroundImage />
      </div>
    </div>
  );
}