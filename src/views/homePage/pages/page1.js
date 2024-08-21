import React from "react";
import graph from "../assets/graph.png";
export default function homePage1() {
  return (
    <div className="flex justify-center pt-20 m-5 md:m-10 lg:m-20">
      <div>
        <div className="flex max-sm:flex-col max-sm:gap-10 justify-around">
          <div className="flex flex-col gap justify-center max-sm:text-center">
            <h1 className="text-[28px] md:text-[32px] font-300">ADROX Price</h1>
            <h1 className="text-[44px] md:text-[56px] font-800">$ 0.25 USD</h1>
            <div className="text-[16px] md:text-[24px] font-200 leading-7">
              <p>Click here to deposit funds</p>
              <p>into your account.</p>
            </div>
            <div className="mt-3 cursor-pointer z-50">
            <a className="text-[14px] md:text-[18px] font-300 p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA]">
              Deposit Fund
            </a>
            </div>
          </div>

          <div className="flex flex-col justify-center sm:justify-end gap-7">
            <div className="flex text-[18px] font-400 justify-center sm:justify-end gap-6">
              <a className="p-2 rounded-lg border cursor-pointer z-50">1D</a>
              <a className="p-2 bg-gradient-to-r from-[#4F0F81] to-[#A702FA] rounded-lg cursor-pointer z-50">
                1W
              </a>
              <a className="p-2 rounded-lg border z-50 cursor-pointer">1M</a>
            </div>
            <div className="flex justify-center text-[18px] font-300 gap-3">
              <p>
                High <span className="text-green-500 font-500">+29.7%</span>
              </p>
              <p>|</p>
              <p>
                Low <span className="text-red-500 font-500">-0.7%</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full object-contain scale-125 sm:scale-110 lg:scale-100">
          <img src={graph}></img>
        </div>
      </div>
    </div>
  );
}
