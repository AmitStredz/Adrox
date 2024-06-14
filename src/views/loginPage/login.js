import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./assets/account-background.png";
import logo from "./assets/adrox-logo2.png";
import InvalidPopup from "./pages/incorrectPhraseModal"; // Assuming you have a Popup component
import ValidPopup from "./pages/correctPhraseModal"; // Assuming you have a Popup component

import LoginPhrase from "./pages/loginRecovery";
import LoginEmail from "./pages/loginEmail";
import LoginPhone from "./pages/loginPhone";

export default function Login() {
  const [loginType, setLoginType] = useState("loginPhrase");

  return (
    <div className="flex bg-[#0f011a] h-full text-white font-nunito p-10 justify-center overflow-hidden relative">
      <div className="">
        <div className="flex flex-col items-center bg-slate-400 bg-opacity-10 w-[40rem] p-16 rounded-2xl">
          <div className="flex justify-between w-full items-end z-50">
            <img src={logo} className="w-28"></img>
            <h1 className="font-700 text-[48px]">Log in</h1>
          </div>

          {loginType === "loginPhrase" ? <LoginPhrase /> : <></>}

          <div className={`text-center gap-5 flex flex-col z-50 mb-5 ${(loginType == "loginPhrase")? "" : "mt-10"}`}>
            <h1 className="font-100">
              ---------------
              <span className="font-400">Alternative login methods</span>
              ----------------
            </h1>
          </div>

          <div className="flex text-center justify-evenly  w-full z-50">
            <div
              className={`flex justify-center border border-slate-500 rounded-xl p-2 w-48 gap-2 cursor-pointer ${(loginType == "loginEmail")? "bg-gradient-to-r from-[#4F0F81] to-[#A702FA]" : ""}`}
              onClick={() => setLoginType("loginEmail")}
            >
              <i className="ri-mail-line"></i>
              <p>Email</p>
            </div>
            <div
              className={`flex justify-center border border-slate-500 rounded-xl p-2 w-48 gap-2 cursor-pointer ${(loginType == "loginPhone")? "bg-gradient-to-r from-[#4F0F81] to-[#A702FA]" : ""}`}
              onClick={() => setLoginType("loginPhone")}
            >
              <i className="ri-smartphone-line"></i>
              <p>Phone Number</p>
            </div>
          </div>

          {loginType === "loginEmail" ? <LoginEmail /> : <></>}
          {loginType === "loginPhone" ? <LoginPhone /> : <></>}
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
