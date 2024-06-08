import React from "react";

import img1 from "../assets/adrox-logo.png";
import adam from "../assets/adam.png";
import { useNavigate } from "react-router-dom";

export default function HomeHeader() {
  const history = useNavigate();
  return (
    <div className=" w-full flex items-center justify-between p-2 lg:p-5 px-5 md:px-14 xl:px-28 fixed bg-gradient-to-b from-[#150c1b] to-[#49474728] bg-opacity-15 z-[100]">
      <div className="w-[30vw] sm:w-56 cursor-pointer">
        <img src={img1} alt="img1" onClick={() => history("/landingPage")} />
      </div>
      <div className="flex gap-5 md:gap-10 items-center">
        <div className="hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-2xl w-96 p-2 px-5 bg-slate-500 bg-opacity-15"
          />
        </div>
        <img
          src={adam}
          className="w-9 sm:w-12 cursor-pointer"
          onClick={() => history("/account")}
        ></img>
        <a
          className=" max-sm:text-[12px] p-2 px-3 sm:px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
          onClick={()=> history('/wallet')}
        >
          ADX Wallet
        </a>
        <i className="ri-menu-5-line text-2xl sm:text-4xl cursor-pointer z-50"></i>
      </div>
    </div>
  );
}
