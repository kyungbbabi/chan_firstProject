import React from "react";
import image from "../img/newyork.png"

export default function Home() {

  const handelClickLoginPage = (e) => {
    e.preventDefault();
  }

  return(
    <form>
      <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} display="flex" >

      
        <button type="submit" onClick={handelClickLoginPage}>Start</button>
      </div>
    </form>
  );

}