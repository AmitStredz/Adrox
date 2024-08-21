import React from "react";
import table3 from "./assets/table3.png";
import swap from "./assets/swap.png";
import ellipse from './assets/ellipse.png'


export default function tokenWallet() {
  return (
    <div>
      <div className="flex max-sm:flex-col justify-evenly sm:items-center p-8 lg:p-14 h-56 mt-20 bg-slate-500 bg-opacity-10 rounded-3xl border border-slate-600">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div>
            <a className="p-2 px-6 bg-slate-400 bg-opacity-15 rounded-xl">
              Holdings
            </a>
          </div>
          <div>
            <p className="font-800 text-[40px] md:text-[52px]">$0.00 ADX</p>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:justify-end h-full">
          <div className="flex">
            <div className="flex gap-2 p-2 px-12 items-center rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">
              <img src={swap} className="w-4 h-5"></img>
              <p>Swap</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <img src={table3}></img>
      </div>

      <div className="absolute right-[-40%] w-[80%] top-[50rem]">
        <img src={ellipse}></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src={ellipse}></img>
      </div>
    </div>
  );
}
