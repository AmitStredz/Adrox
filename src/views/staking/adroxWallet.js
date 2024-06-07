import React from "react";
import table2 from "./assets/table2.png";
import deposit from "./assets/deposit.png";
import withdraw from "./assets/withdraw.png";
import ellipse from './assets/ellipse.png'


export default function adroxWallet() {
  return (
    <div>
      <div className="flex justify-evenly items-center p-14 h-56 mt-20 bg-slate-500 bg-opacity-10 rounded-3xl border border-slate-600">
        <div className="flex flex-col gap-10">
          <div>
            <a className="p-2 px-6 bg-slate-400 bg-opacity-15 rounded-xl">
              Holdings
            </a>
          </div>
          <div>
            <p className="font-800 text-[52px]">$1,000 USD</p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end h-full">
          <div className="flex gap-10">
            <div className="flex  p-2 px-12 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">
              <img src={deposit} className="w-5"></img>
              <p>Deposit</p>
            </div>
            <div className="flex border border-slate-500 cursor-pointer p-2 px-12 rounded-2xl">
              <img src={withdraw} className="w-5"></img>
              <p>Withdraw</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <img src={table2}></img>
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
