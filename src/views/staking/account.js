import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stroke from "./assets/strokeEffect.png";
import ellipse from "./assets/ellipse.png";
import dollarBlue from "./assets/dollarBlue.png";
import starBlue from "./assets/starBlue.png";
import swap from "./assets/swapBlue.png";
import HomeHeader from "../homePage/pages/homeHeader";
import { Home } from "lucide-react";
import adam2 from "./assets/adam3.png";
import Footer from "../landingPage/pages/footer";

export default function Account({ closeModal }) {
  const history = useNavigate();
  return (
    <div className=" font-nunito bg-[#0F011A]  text-white overflow-x-hidden relative">
      <div>
        <HomeHeader></HomeHeader>
      </div>

      <div className="flex justify-center items-center  w-screen relative mb-20">
        <div className="flex h-9/12 gap-56 mt-40">
          <div className="left flex flex-col gap-20 z-50">
            <div className="top flex justify-start">
              <div className="flex flex-col gap-3 items-start ">
                <img src={adam2} className="w-20"></img>
                <p className="text-[52px] font-700">Adrox001</p>
                <div className="flex items-center gap-2  p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">
                  <p>Edit Profile</p>
                  <i class="fa-regular fa-pen-to-square"></i>
                </div>
              </div>
            </div>
            <div className="bottom flex flex-col gap-3">
              <div className="w-full">
                <a className="p-1 px-3 rounded-lg bg-slate-600 bg-opacity-20">
                  UID
                </a>
              </div>
              <p>
                0X2999dHnhh34knkWKHWI65876TV<br></br>RB98100WyNOUY9869000BFHGQ
              </p>
              <div className="flex items-center gap-2 ">
                <i class="fa-regular fa-clone font-100"></i>
                <p className="underline text-[px] font-100 cursor-pointer">
                  Copy to clipboard
                </p>
              </div>
            </div>
          </div>

          <div className="right flex flex-col gap-20">
            <div className="up flex gap-8">
              <div className="p-7 px-10 flex flex-col gap-5 border border-slate-600 rounded-2xl bg-slate-500 bg-opacity-5">
                <p className="p-1 px-2 rounded-lg bg-slate-600 bg-opacity-20 text-[15px] font-200 w-32">
                  ADROX Wallet
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-100">Holdings</p>
                  <div className="h-[1px] w-full bg-white bg-opacity-15 "></div>
                  <p className="font-700 text-[32px]">$ 1,000 USD</p>
                </div>
              </div>

              <div className="p-7 px-10 flex flex-col gap-5 border border-slate-600 rounded-2xl bg-slate-500 bg-opacity-5">
                <p className="p-1 px-2 rounded-lg bg-slate-600 bg-opacity-20 text-[16px] font-200 w-32">
                  ADROX Wallet
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-100">Holdings</p>
                  <div className="h-[1px] w-full bg-white bg-opacity-15 "></div>
                  <p className="font-700 text-[32px]">$ 1,000 USD</p>
                </div>
              </div>
            </div>

            <div className="down flex flex-col gap-8 text-slate-300">
              <div className="flex flex-col gap-3">
                <div className="flex p-2 px-2 bg-slate-600 bg-opacity-15 w-20 items-center justify-center rounded-md gap-2">
                  <i class="fa-regular fa-envelope"></i>
                  <p className="text-[12px] font-100">Email</p>
                </div>
                <p className="font-500 text-[24px]">adroxlogin@gmail.com</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex p-2 px-2 bg-slate-600 bg-opacity-15 w-32 items-center justify-center rounded-md gap-2">
                  <i class="ri-smartphone-line"></i>{" "}
                  <p className="text-[12px] font-100">Phome Number</p>
                </div>
                <p className="font-500 text-[24px]">+91 9898598985</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[-2rem]">
        <img src="/external/ellipse32356-aujk-700w.png" alt="ellipse" />
      </div>
      <div className="absolute left-[-30%] w-[80%] top-[-15rem]">
        <img src={ellipse} alt="ellipse" />
      </div>
      </div>

     

      <div className="bg-[#0F011A] z-[1000]">
        <Footer></Footer>
      </div>
    </div>
  );
}
