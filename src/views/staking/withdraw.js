import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stroke from "./assets/strokeEffect.png";
import ellipse from "./assets/ellipse.png";
import dollar from "./assets/dollarBlue.png";

export default function Withdraw({ closeModal }) {
  const history = useNavigate();
  return (
    <div className="bg-[#0F011A]  font-nunito text-slate-300 overflow-hidden flex items-center justify-center relative">
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-10 my-20 bg-slate-600 bg-opacity-15 p-14 rounded-3xl w-5/12 z-50">
          <div className="flex justify-end">
            <i
              className="ri-close-fill text-3xl cursor-pointer hover:scale-105"
              onClick={() => history("/wallet")}
            ></i>
          </div>
          <div>
            <div className="flex justify-between p-2 px-5 ">
              <p>Withdrawal Amount</p>
              <p className="bg-slate-800 p-1 px-2 rounded-lg">
                Available Balance : 8000 $
              </p>
            </div>
            <div className="flex justify-between gap-5 border border-slate-600 rounded-2xl p-14">
              <img src={dollar}></img>
              <input
                placeholder="Minimum 20 $"
                type="number"
                required
                className="bg-transparent outline- text-4xl font-light w-full text-center outline-none"
              ></input>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Withdrawal Address</p>
            <input
              placeholder="Long press to paste"
              type="text"
              className="p-2 px-3 rounded-xl bg-transparent border border-slate-600 w-full outline-none"
            ></input>
          </div>

          <div className="flex flex-col gap-2">
            <p>Withdrawal Address</p>
            <input
              placeholder="Long press to paste"
              type="text"
              className="p-2 px-3 rounded-xl bg-transparent border border-slate-600 w-full outline-none"
            ></input>
          </div>

          <div className="flex flex-col gap-3 font-200 bg-gradient-to-l from-[#21102E] t0-[#2A163A] bg-opacity-70 p-10 px-5 rounded-xl">
            <div className="flex justify-between">
              <p>USD</p>
              <p>1000</p>
            </div>
            <div className="flex justify-between">
              <p>Withdrawal Transfer fees</p>
              <p>0.0005 BTC</p>
            </div>

            <div className="w-full h-[1px] bg-opacity-45 bg-white"></div>

            <div className="flex justify-between">
              <p>Total Withdrawal Amount</p>
              <p>780.5 BTC</p>
            </div>
          </div>

          <div className="flex justify-center">
            <p className=" p-2 px-32 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">
              Withdraw
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-[25rem]">
        <img src="/external/ellipse32356-aujk-700w.png" alt="ellipse" />
      </div>
      <div className="absolute left-[-30%] w-[80%] top-[5rem]">
        <img src={ellipse} alt="ellipse" />
      </div>
    </div>
  );
}
