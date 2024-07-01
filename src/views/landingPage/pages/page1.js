import React from "react";
import "..//landingPage.css";

import Scanner from "./assets/scanner.png";
import svg2 from "./assets/sngAnimation.svg";
import vector1 from "./assets/vector1.svg";
import vector2 from "./assets/vector2.svg";
import vector3 from "./assets/vector3.svg";
import vector4 from "./assets/vector4.svg";

import StarAnimation from "./starAnimation";


export default function page1() {
  return (
    <div className="relative">
      <div
        className="flex max-sm:flex-col items-center bg-center bg-no-repeat h-[100vh] mt-20 sm:mt-40 justify-center gap-10 "
        // style={{ backgroundImage: `url(${svg})` }}
      >
        <img src={Scanner} alt="scanner" className="w-56 z-50" />
        <div className="flex flex-col max-sm:text-center leading-tight text-[56px] font-700 gap-7 z-50 max-sm:items-center">
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

      <div className="absolute flex justify-center items-center h-screen w-screen top-0 left-0">
        <div className="absolute -top-10 left-0 flex justify-center items-center w-full">
          <img src={svg2} className=""></img>
        </div>
        <div className="absolute scale-100 max-md:scale-[2] max-lg:scale-150 flex justify-center items-center w-full">
          <img
            src={vector1}
            alt="Animation"
            className="w-[45%] rotating-image-clock opacity-50"
          />
        </div>
        <div className="absolute scale-100 max-md:scale-[2] max-lg:scale-150 flex justify-center items-center w-full">
          <img
            src={vector2}
            alt="Animation"
            className="w-[45%] rotating-image-clock rotating-scale  opacity-50"
          />
        </div>
        <div className="absolute scale-100 max-md:scale-[2] max-lg:scale-150 flex justify-center items-center w-full">
          <img
            src={vector3}
            alt="Animation"
            className="w-[45%] rotating-image-anticlock opacity-50"
          />
        </div>
        <div className="absolute scale-100 max-md:scale-[2] max-lg:scale-150 flex justify-center items-center w-full">
          <img
            src={vector4}
            alt="Animation"
            className="w-[45%] rotating-image-anticlock opacity-50"
          />
        </div>
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
        <StarAnimation></StarAnimation>
      </div>
    </div>
  );
}
