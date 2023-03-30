import React from "react";
import BackgroundImage from "../component/BackgroundImage";

export default function Home(props) {

  const handelClickLoginPage = (e) => {
    e.preventDefault();
  }

  return(
    <div>
      <BackgroundImage />

      
      <button type="submit" onClick={handelClickLoginPage}>Start</button>
    </div>
  );

}