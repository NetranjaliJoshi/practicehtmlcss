// import phone from "../assets/images/apple-iphone-14-pro-max.jpg";
// import apple from "../assets/images/apple_logo.png";
// import jhon from "../assets/images/jhon.jpeg";
// import smita from "../assets/images/smita.jpeg";
// import kartik from "../assets/images/kartik.jpeg";

import React from "react";
import data from "../shared/constant/constantdata";

const MyImagesComp = () => {
  return (
    <>
      <h2>this is my images Comp</h2>
      <img src={data.apple} alt="phone" height="200px" />
      <img src={data.jhon} alt="phone" height="200px" />
      <img src={data.kartik} alt="phone" height="200px" />
      <img src={data.smita} alt="phone" height="200px" />
      <img src={data.jhon} alt="phone" height="200px" />
      <video controls src={data.video} height="200px"></video>
      <audio controls src={data.audio} height="200px" />
    </>
  );
};

export default MyImagesComp;
