import React from "react";
import BackgroundImage from "../component/BackgroundImage";

export default function Login(props) {

  const handleClickLogin = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
      <div postion={"relative"}>  
        <div position={"absolute"} > {/* float로 위치 오른쪽 왼쪽 조절가능 */}
          <h1>Sign In</h1>
          <div>
            <input type="email" placeholder="name@address.com" />
            
          </div>
          <div postion="relative">
            <input type="password" placeholder="****" />
            
          </div>
          <div postion="relative" margin-bottom="1rem">
            <label><input type="checkbox" />Remember me</label>
          </div>
          <button type="submit" onClick={handleClickLogin}>Sign In</button>
        </div>
        <div id="img_login"></div>
      </div>
    </>
  );
}