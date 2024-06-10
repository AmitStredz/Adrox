import React from "react";
import { useNavigate } from "react-router-dom";

import statAnimation from './assets/starAnimation.png'
import globe1 from "./assets/globe1.png";
import globe2 from "./assets/globe2.png";
import starGlow from "./assets/Glowstar.png";
import circumcircle1 from "./assets/circumcircle.png";
import circle from "./assets/circle.png";


const Signup11 = () => {
  const history = useNavigate();
  const handleButtonClick = () => {
    history("/signup12");
  };

  return (
    <div className="flex bg-[#0f011a] h-screen text-white font-nunito p-24 justify-evenly gap-10 relative overflow-hidden">
      <div className="w-[40%] items-center z-50">
        <div className="text-center">
          <h1 className="font-700 text-[48px] text-[#C653FF]">
            Welcome Aboard
          </h1>
          <p className="font-300 text-[16px]">
            Just A Couple Of Clicks And We Start
          </p>
        </div>

        <div className="relative">
          <img className="absolute " src={circle}></img>
          <img className="absolute top-20 left-20" src={starGlow}></img>
          <img className="absolute -top-4 -left-6 rotating-circle-clock opacity-30" src={circumcircle1}></img>
          <img className="absolute -left-5 -top-6 rotating-image-clock" src={globe1}></img>
          <img className="absolute -left-5 -top-6 rotating-image-anticlock" src={globe2}></img>
        </div>
      </div>

      {/* Signup11 is this */}
      <div className="z-50">
        <div className="flex flex-col gap-10 ">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem] p-12 rounded-2xl">
            <h1 className="font-400 text-[20px] text-center">
              Your Recovery Phrase Has Been Successfully Verified
            </h1>

            <div className="flex justify-center border p-8 rounded-2xl">
              <i
                className="ri-checkbox-circle-line text-9xl text-[#C653FF]"
                data-aos="zoom-in"
              ></i>
            </div>

            <div className="flex text-center justify-center gap-2">
              <input type="checkbox" className="size-5"></input>
              <label className="text-[16px] font-400" for="checkbox">
                Send Recovery Phrase To My Email
              </label>
            </div>

            <div className="text-center">
              <button
                onClick={handleButtonClick}
                className="p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[90%] top-[-40%] right-[-40%] z-10">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
      <div className="absolute w-[80%] bottom-[-50%] left-[-40%] z-10 ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
      
      {/* <div className="absolute left-0 w-[100%] h-[10%] top-0 ">
        <img src={statAnimation}></img>
      </div> */}
    </div>
  );
};

export default Signup11;
