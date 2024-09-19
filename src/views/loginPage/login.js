import React, { useState } from "react";
import logo from "./assets/adrox-logo2.png";
import LoginPhrase from "./pages/loginRecovery";
import LoginEmail from "./pages/loginEmail";
import LoginPhone from "./pages/loginPhone";
import { useAuth } from "../customHook/AuthProvider";

export default function Login({ onLoginSuccess }) {
  const [loginType, setLoginType] = useState("loginPhrase");
  const { login } = useAuth();

  const handleLogin = () => {
    login();
  };
  return (
    <div className="flex bg-[#0f011a] w-full h-full text-white font-nunito p-5 sm:p-10 justify-center overflow-hidden relative">
      <div className="flex justify-center w-full h-screen">
        <div className="flex flex-col items-center bg-slate-400 bg-opacity-10 px-5 py-10 sm:p-10 md:p-16 rounded-2xl w-full sm:w-auto">
          <div className="flex justify-between w-full items-end z-50">
            <img src={logo} className="w-20 sm:w-28"></img>
            <h1 className="font-700 text-[40px] sm:text-[48px]">Log in</h1>
          </div>

          {loginType === "loginPhrase" ? (
            <LoginPhrase onLoginSuccess={() => handleLogin()} />
          ) : (
            <></>
          )}

          <div
            className={`text-center gap-5 flex flex-col z-50 mb-5 w-full ${
              loginType == "loginPhrase" ? "" : "mt-10"
            }`}
          >
            <h1 className="font-100 max-sm:hidden">
              ---------------
              <span className="font-400">Alternative login methods</span>
              ---------------
            </h1>
            <h1 className="font-100 sm:hidden">
              ----
              <span className="font-400">Alternative login methods</span>
              ----
            </h1>
          </div>

          <div className="flex max-sm:flex-col items-center gap-5 text-center justify-evenly  w-full z-50">
            <div
              className={`flex justify-center border border-slate-500 rounded-xl p-2 w-48 gap-2 cursor-pointer ${
                loginType == "loginEmail"
                  ? "bg-gradient-to-r from-[#4F0F81] to-[#A702FA]"
                  : ""
              }`}
              onClick={() => setLoginType("loginEmail")}
            >
              <i className="ri-mail-line"></i>
              <p>Email</p>
            </div>
            <div
              className={`flex justify-center border border-slate-500 rounded-xl p-2 w-48 gap-2 cursor-pointer ${
                loginType == "loginPhone"
                  ? "bg-gradient-to-r from-[#4F0F81] to-[#A702FA]"
                  : ""
              }`}
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
