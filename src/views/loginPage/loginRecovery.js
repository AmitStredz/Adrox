import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import Background from "./assets/account-background.png";
import logo from "./assets/adrox-logo2.png";

export default function Login1() {
  const history = useNavigate();

  const handleEmailClick = () => {
    history("/loginEmail");
  };
  const handlePhoneClick = () => {
    history("/loginPhone");
  };
  const handleSignUp = () => {
    history("/signup1");
  };
  const handleLoginClick = () => {
    history("/homePage");
  };
  return (
    <div className="flex bg-[#0f011a] h-full text-white font-nunito p-24 justify-center overflow-hidden relative">
      <div className="">
        <div className="flex flex-col items-center bg-slate-400 bg-opacity-10 w-[40rem] p-16 rounded-2xl">
          <div className="flex justify-between w-full items-end z-50">
            <img src={logo} className="w-28"></img>
            <h1 className="font-700 text-[48px]">Log in</h1>
          </div>

          <div className="flex flex-col gap-5  w-[35rem] p-12 rounded-2xl">
            <h1 className="font-400 text-[16px] text-center">
              Enter Your Recovery Phrase
            </h1>

            <div className="grid grid-cols-4 gap-8 border border-slate-500 p-5 justify-center items-center text-center rounded-2xl z-50">
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
              <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1"></input>
            </div>

            <div className="text-center z-50">
              <button
                className="p-2 px-20 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer " onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
          </div>

          <div className="text-center gap-5 flex flex-col z-50">
            <h1 className="font-100">---------------<span className="font-400">Alternative login methods</span>----------------</h1>
            <div className="flex text-center justify-between">
              <div className="flex justify-center border border-slate-500 rounded-xl p-2 w-48 gap-2 cursor-pointer " onClick={handleEmailClick}>
                <i class="ri-mail-line"></i>
                <p>Email</p>
              </div>
              <div className="flex justify-center border border-slate-500 rounded-xl p-2 w-48 gap-2 cursor-pointer" onClick={handlePhoneClick}>
                <i class="ri-smartphone-line"></i>
                <p>Phone Number</p>
              </div>
            </div>

            <div className="text-[16px] font-300">
              <p>Don't have an account? <span className="underline font-700 hover:font-800 cursor-pointer" onClick={handleSignUp}>Sign up now</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[-60px] right-0 ">
        <img src="/ellipse32352-wf1-700w.png" alt="hello"></img>
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <img
          src="/external/ellipse32356-aujk-700w.png"
          alt="hello"
          className="bottom-0"
        ></img>
      </div>
      <div className="absolute bottom-0 left-0 overflow-hidden">
        <img
          src="/external/ellipse22356-sa34-1000w.png"
          alt="hello"
          className="bottom-0"
        ></img>
      </div>
    </div>
  );
}