import React from "react";
import svg from "./assets/globe-effect.svg";
import Scanner from "./assets/scanner.png";
import globe from "./assets/globeGIF.gif";
import Lottie from "react-lottie";
import svg2 from './assets/sngAnimation.svg';
import svg3 from './assets/svgAnimation3.svg';
import globeVideo from './assets/globeVideo.mp4';


import "..//landingPage.css";

export default function page1() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: globe,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const svgURL = "./assets/globe-effect.svg";

  return (
    <div className="relative">
      <div
        className="flex items-center bg-center bg-no-repeat h-[100vh] mt-40 justify-center gap-10"
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
      <div className="flex justify-center items-center top-0  absolute w-full z-10">
        <img src={svg2} alt="Animation" className="w-[80%]" />
      </div>
      {/* <div className="flex justify-center items-center top-0  absolute w-full">
        <img src={globe} alt="Animation" className="w-[80%]" />
      </div> */}
      <div className="flex justify-center items-center top-0 left-0 absolute w-full -z-1">
        <video autoPlay muted loop className="object-cover w-[70%]">
          <source src={globeVideo} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}
