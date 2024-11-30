import React from "react";
import img1 from "./assets/adrox-logo.png";
import { useHistory, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className=" w-full flex items-center justify-between p-2 lg:p-5 px-5 md:px-14 xl:px-28 fixed bg-blur z-[100]">
      <div
        className="w-[30vw] sm:w-56 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={img1} alt="img1" />
      </div>
      <div className="flex gap-5 md:gap-10 items-center">
        <div className=" hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-600 bg-opacity-15 border rounded-2xl w-96 p-2 px-5"
          />
        </div>
        <a
          onClick={() => navigate("/signup")}
          className="relative group p-1 md:p-2 px-4 md:px-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer z-50 overflow-hidden border-2 border-[#4F0F81]"
        >
          <span className="relative z-10">Sign Up</span>
          <span className="absolute inset-0 bg-[#0F011A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a
          className="relative group border-2 border-[#4F0F81] p-1 md:p-2 px-4 md:px-8 rounded-xl cursor-pointer overflow-hidden"
          onClick={() => navigate("/login")}
        >
          <span className="relative z-10">Log In</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#4F0F81] to-[#A702FA]  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        </a>
      </div>
    </div>
  );
}
