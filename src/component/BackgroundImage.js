import React from "react";
import image from "../newyork.png"

export default function BackgroundImage(props) {
  return(
    <div style={{margin:"0"}}>
      <img src={image} width="100%" />
    </div>
  );
}