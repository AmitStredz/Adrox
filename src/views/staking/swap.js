import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import stroke from "./assets/strokeEffect.png";
import dollarBlue from "./assets/dollarBlue.png";
import starBlue from "./assets/starBlue.png";
import swap from "./assets/swapBlue.png";

const Swap = ({ onClose }) => {
  const history = useNavigate();
  return (
    // <div className="bg-[#0F011A]  font-nunito text-white overflow-hidden flex items-center justify-center relative">
    <div className="flex justify-center h-full w-full z-[1000] backdrop:blur-sm fixed top-0 left-0 backdrop-blur-xl" data-aos="fade-in">
      <div className="w-full h-full p-3 flex justify-center overflow-auto">
        <div className="flex flex-col gap-10 bg-gradient-to-r from-[#210F34] to-[#170D25] p-14 rounded-3xl max-w-xl z-[5000] h-[100vh]">
          <div className="flex items-center justify-between">
            <h1 className="font-700 text-[30px] sm:text-[48px]">Swap Tokens</h1>
            <i
              className="ri-close-fill text-4xl cursor-pointer hover:scale-105"
              onClick={onClose}
            ></i>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-500">1 USD = 4 ADX</p>
            <div className="flex max-sm:flex-col gap-3 sm:gap-6 items-center">
              <div className="flex flex-col bg-gradient-to-tl from-[#1A0C24] to-[#251530] border border-slate-700 rounded-xl p-10 gap-10 ">
                <div className="flex  gap-1 rounded-3xl p-2 w-24 justify-center bg-slate-500 bg-opacity-20">
                  <img src={starBlue} className="w-5 h-5"></img>
                  <p className="text-24px">ADX</p>
                </div>
                <div className="flex justify-end border border-slate-600 rounded-lg p-1 px-3 text-[28px] font-700">
                  <p>150000</p>
                </div>
              </div>
              <img src={swap} className="h-10"></img>
              <div className="flex flex-col border border-slate-700 bg-gradient-to-tl from-[#1A0C24] to-[#251530] rounded-xl p-10 gap-10 ">
                <div className="flex gap-1 rounded-3xl p-2 w-24 justify-center bg-slate-500 bg-opacity-20">
                  <img src={dollarBlue} className="w-5 h-5"></img>
                  <p className="text-24px">USD</p>
                </div>
                <div className="flex justify-end border border-slate-600 rounded-lg p-1 px-3 text-[28px] font-700">
                  <p>600</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 px-10 font-100 text-slate-300 bg-gradient-to-tl from-[#1A0C24] to-[#251530] border border-slate-700 rounded-xl">
            <div className="flex justify-between">
              <p>USD</p>
              <p>600</p>
            </div>
            <div className="flex justify-between">
              <p>Gas Fee</p>
              <p>5%</p>
            </div>
            <div className="w-full h-[1px] bg-opacity-45 bg-white"></div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>570 USD</p>
            </div>
          </div>

          <div className="flex justify-center">
            <p className=" p-2 px-24 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">
              Swap
            </p>
          </div>
        </div>
      </div>
    </div>

    //   <div className="absolute right-0 top-[25rem]">
    //     <img src="/external/ellipse32356-aujk-700w.png" alt="ellipse" />
    //   </div>
    //   <div className="absolute left-[-30%] w-[80%] top-[5rem]">
    //     <img src={ellipse} alt="ellipse" />
    //   </div>
    // </div>
  );
};

export default Swap;
