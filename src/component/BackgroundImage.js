import React from "react";
import image from "../img/newyork.png"

export default function BackgroundImage(props) {
  return(
    <>
      <div style={{backgroundImage:`(url${image})`}} />
      {/* <div backgroundImage={`${image}`}/> */}
    </>
  );
}