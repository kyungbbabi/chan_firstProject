import React from "react";

export default function Register() {
  
  const handleClickRegister = (e) => {
    e.preventDefault();
  }

  return(
    <form>
      <div display="flex" align="center" text-align="right"> {/* float로 위치 오른쪽 왼쪽 조절가능 */}
        <h1>Sign Up</h1>
        <div postion="relative">
          <label for="floatingInput">Email address</label>
          <input type="email" placeholder="name@address.com" />        
        </div>
        <div postion="relative">
          <label for="floatingInput" postion="absolute">Password</label>
          <input type="password" placeholder="****" />   
        </div>
        <div postion="relative">
          <label for="floatingInput" postion="absolute">Check-Password</label>
          <input type="password" placeholder="****" />
        </div>
        <div postion="relative">
          <label for="floatingInput">Name</label>
          <input type="email" placeholder="Rachel" />        
        </div>
        <button type="submit" onClick={handleClickRegister}>Sign Up</button>
      </div>
    </form>
  );
}