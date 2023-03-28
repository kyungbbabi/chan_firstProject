import React from "react";
import BackgroundImage from "../component/BackgroundImage";

export default function Login(props) {

  const handleClickLogin = (e) => {
    e.preventDefault();
  }
  
  return (
    <form style={{alignItems:"center", justifyContent:"flex-start"}} flexDirection="row" postion="relative">
      <BackgroundImage>    
        <div style={{textalign:"center", float:"right"}} display="flex" flexDirection="row"> {/* float로 위치 오른쪽 왼쪽 조절가능 */}
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
      </BackgroundImage>
      
    </form>
  );
}