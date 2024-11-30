import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page5() {
  const history = useNavigate();
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#170328] to-[#2D0246] p-16">
      <div className="text-center flex flex-col gap-9">
        <h1 className="font-700 text-[48px]">
          Begin Your Crypto Journey Today!
        </h1>
        <div className="flex justify-center">
          <a className="relative group p-1 md:p-2 px-4 md:px-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer overflow-hidden border-2 border-[#4F0F81]">
            <span className="relative z-10">Sign Up Now</span>
            <span className="absolute inset-0 bg-[#170328] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
