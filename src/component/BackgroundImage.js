import React from "react";
import image from "../newyork.png"

export default function BackgroundImage(props) {
  return(
    <>
      <div>
        <img src={image} width="100%"/>
      </div>
    </>
  );
}