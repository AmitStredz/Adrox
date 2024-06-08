import React from "react";
import svg from "./assets/globe-effect.svg";
import Scanner from "./assets/scanner.png";
import globe from "./assets/globeGIF.gif";
import Lottie from "react-lottie";
import svg2 from "./assets/sngAnimation.svg";
import svg3 from "./assets/svgAnimation3.svg";
import vector1 from "./assets/vector1.svg";
import vector2 from "./assets/vector2.svg";
import vector3 from "./assets/vector3.svg";
import vector4 from "./assets/vector4.svg";
import vector6 from "./assets/vector6.svg";
import vector7 from "./assets/vector7.svg";
import vector8 from "./assets/vector8.svg";

import GlobeAnimation from "./globeAnimation";

import "..//landingPage.css";

export default function page1() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: globe,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const svgURL = "./assets/globe-effect.svg";

  return (
    <div className="relative">
      <div
        className="flex items-center bg-center bg-no-repeat h-[100vh] mt-40 justify-center gap-10 "
        // style={{ backgroundImage: `url(${svg})` }}
      >
        <img src={Scanner} alt="scanner" className="w-56 z-50" />
        <div className="flex flex-col leading-tight text-[56px] font-700 gap-7 z-50">
          <div>
            <h1 className="gradient-text ">
              Lorem <span>ipsum</span>
            </h1>
            <h1>
              dolor <span className="gradient-text">sit</span>
            </h1>
            <h1>
              amet, <span className="gradient-text">consectetur</span>
            </h1>
          </div>
          <a
            href="#"
            className="font-400 text-lg border-slate-600 border rounded-xl p-2 justify-center flex w-72 bg-gradient-to-t from-[#0F011A] to-[#210134]"
          >
            Scan to Download
          </a>
        </div>
      </div>

      {/* <div>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div> */}
      {/* <div className="flex justify-center items-center top-0  absolute w-full">
        <img src={globe} alt="Animation" className="w-[80%]" />
        </div> */}
      <div className="absolute top-20 left-0 flex justify-center items-center w-full">
        <img src={svg2} className=""></img>
      </div>
      <div className="absolute top-10 -left-14 flex justify-center items-center w-full">
        <img
          src={vector1}
          alt="Animation"
          className="w-[45%] rotating-image-clock opacity-50"
        />
      </div>
      <div className="absolute top-10 -left-14 flex justify-center items-center w-full">
        <img
          src={vector2}
          alt="Animation"
          className="w-[45%] scale-[-1] rotating-image-clock rotating-scale  opacity-50"
        />
      </div>
      <div className="absolute top-10 -left-14 flex justify-center items-center w-full">
        <img
          src={vector3}
          alt="Animation"
          className="w-[45%] rotating-image-anticlock opacity-50"
        />
      </div>
      <div className="absolute top-10 -left-14 flex justify-center items-center w-full">
        <img
          src={vector4}
          alt="Animation"
          className="w-[45%] rotating-image-anticlock opacity-50"
        />
      </div>
      {/* <div>
          <img src={vector6} alt="Animation" className="w-[80%]" />
        </div>
        <div>
          <img src={vector7} alt="Animation" className="w-[80%]" />
        </div>
        <div>
          <img src={vector8} alt="Animation" className="w-[80%]" />
        </div> */}
      <div className="absolute w-screen h-screen top-0 left-0  z-10">
        <GlobeAnimation></GlobeAnimation>
      </div>
    </div>
  );
}
