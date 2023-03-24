import React from "react";
import image from "../img/newyork.png"

export default function Login(props) {

  const handleClickLogin = (e) => {
    e.preventDefault();
  }
  
  return (
    <form style={{alignItems:"center", justifyContent:"flex-start"}} flexDirection="row" postion="relative">
      <div backgroundImage= {`url(${image})`} flexDirection="row" backgroundPosition="center" backgroundRepeat="no-repeat"objectFit="cover">
        
     
        
      </div>     
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
      
    </form>
  );
}