import React from "react";
import image from "../img/newyork.png"

export default function Login(props) {

  const handleClickLogin = (e) => {
    e.preventDefault();
  }
  
  return (
    <form style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}} flexDirection="row" postion="relative">
      <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", height:600, width:600}} display="flex" flexDirection="row" >
        
      </div>     
        <div style={{textalign:"center", float:"right"}} display="flex" flexDirection="row"> {/* float로 위치 오른쪽 왼쪽 조절가능 */}
          <h1>Sign In</h1>
          <div postion="relative">
            <input type="email" placeholder="name@address.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div postion="relative">
          <label for="floatingInput" postion="absolute">Password</label>
            <input type="password" placeholder="****" />
            
          </div>
          <div postion="relative" margin-bottom="1rem">
            <label><input type="checkbox" />Remember me</label>
          </div>
          <button type="submit" onClick={handleClickLogin}>Sign In</button>
        </div>
      
    </form>
  )
}