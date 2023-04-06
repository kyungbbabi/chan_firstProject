import React from "react";
import image from "../newyork.png"

export default function BackgroundImage(props) {


  return(
    <>
      <div>
      
      </div>
    </>
  );
}




// 이미지 직접쓸 때
// import img1 from "A.png"
// import img2 from "B.png"
// import img3 from "C.png"
// import img4 from "D.png"
// import img5 from "E.png"
// import img6 from "F.png"

// function sub(props){
//   const backgroundImgArr = [img1, img2, img3, img4, img5, img6];
//   const randomIndex = Math.floor(Math.random() * backgroundImgArr.length);

//   const backgroundImg = backgroundImgArr[randomIndex];
  
//   return (
//     <section style={{backgroundImage: `url(${backgroundImg})`}}>
//     </section>
//   )
// }