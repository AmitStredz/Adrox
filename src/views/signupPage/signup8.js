import React from "react";
import Background from "./assets/account-background.png";
import { useNavigate } from "react-router-dom";

const Signup8 = () => {
  const history = useNavigate();
  
  const handleButtonClick = () => {
    history("/signup9");
  };

  return (
    <div className="flex bg-[#0f011a] h-full text-white font-nunito p-24 justify-evenly gap-10 relative overflow-hidden">
      <div className="w-[40%] items-center">
        <div className="text-center">
          <h1 className="font-700 text-[48px] text-[#C653FF]">
            Welcome Aboard
          </h1>
          <p className="font-300 text-[16px]">
            Just A Couple Of Clicks And We Start
          </p>
        </div>
        <div className="w-">
          <img src={Background}></img>
        </div>
      </div>

      {/* Signup8 is this */}
      <div className="z-10">
        <div className="flex flex-col gap-10 ">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[30rem] p-20 rounded-2xl">
            <h1 className="font-700 text-[36px]">Create Account</h1>
            <input
              type="text"
              required
              placeholder="Name"
              className="bg-transparent border-b-2 pb-2 outline-none"
            ></input>

            <input
              type="text"
              required
              placeholder="Mobile Number"
              className="bg-transparent border-b-2 pb-2 outline-none"
            ></input>
            <div className="flex flex-col gap-2">
              <p className="text-[12px]">Enter the OTP sent to 9*******85</p>
              <div className="flex gap-3">
                <input className="w-5 h-5 border bg-transparent p-1"></input>
                <input className="w-5 h-5 border bg-transparent p-1"></input>
                <input className="w-5 h-5 border bg-transparent p-1"></input>
                <input className="w-5 h-5 border bg-transparent p-1"></input>
              </div>
            </div>
            <input
              type="email"
              required
              placeholder="Email Id"
              className="bg-transparent border-b-2 pb-2 outline-none"
            ></input>
            <div className="flex flex-col gap-2">
              <p className="text-[12px]">
                Enter the OTP sent to a*******in@gmail.com
              </p>
              <div className="flex gap-3">
                <input className="w-5 h-5 border bg-transparent p-1"></input>
                <input className="w-5 h-5 border bg-transparent p-1"></input>
                <input className="w-5 h-5 border bg-transparent p-1"></input>
                <input className="w-5 h-5 border bg-transparent p-1"></input>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleButtonClick}
                className="p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
              >
                Verify
              </button>
            </div>
            <div className="text-[14px] text-center mt-[-20px]">
              <p>
                Didn't receive the OTP?{" "}
                <span className="underline font-300 cursor-pointer">
                  Resent OTP
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[90%] top-[-40%] right-[-40%] ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
      <div className="absolute w-[90%] bottom-[-50%] left-[-40%] ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
    </div>
  );
};

export default Signup8;
