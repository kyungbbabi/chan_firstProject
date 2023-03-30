import React from "react";
import image from "../newyork.png"

export default function BackgroundImage(props) {
  return(
    <div style={{backgroundSize:"cover"}}>
      <img src={image} />
    </div>
  );
}