import React from "react";
import leftLink from "./assets/leftLink.png";
import rightLink from "./assets/rightLink.png";
import doubleLink1 from "./assets/doubleLink1.png";
import doubleLink2 from "./assets/doubleLink2.png";
import adam2 from "./assets/adam2.png";
import adam3 from "./assets/adam3.png";
import ellipse from "./assets/ellipse.png";

export default function link() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90vw] lg:w-8/12 ">
        <div className="upper flex justify-center p-10 items-start">
          <div className="flex justify-evenly w-full">
            <img src={leftLink} className="w-64 h-40"></img>
            <img src={adam3} className="w-32 h-32"></img>
            <img src={rightLink} className="w-64 h-40"></img>
          </div>
        </div>
        <div className="lower flex justify-between">
          <div className="left flex flex-col gap-10">
            <div className="flex justify-center">
              <div className="flex flex-col gap-3 p-3 px-10 bg-slate-600 bg-opacity-15 rounded-2xl">
                <p className="font-400 text-[24px]">Left</p>
                <p className="font-800 text-[64px] text-[#AB00FF] text-sha">
                  800
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
              <div>
                <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                  ADROX Left Link
                </a>
              </div>
              <div className="flex gap-1">
                <p>CDY56KASJGB</p>
                <i className="ri-file-copy-line"></i>
              </div>
              <div className="flex gap-1">
                <i className="ri-link-m"></i>
                <p>https://www.adrox.com/invite....</p>
                <i className="ri-file-copy-line"></i>
              </div>
            </div>
          </div>
          <div className="right flex flex-col gap-10">
            <div className="flex justify-center">
              <div className="flex flex-col gap-3 p-3 px-10 bg-slate-600 bg-opacity-15 rounded-2xl">
                <p className="font-400 text-[24px]">Right</p>
                <p className="font-800 text-[64px] text-[#AB00FF]">910</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
              <div>
                <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                  ADROX Right Link
                </a>
              </div>
              <div className="flex gap-1">
                <p>CDY56KASJGB</p>
                <i className="ri-file-copy-line"></i>
              </div>
              <div className="flex gap-1">
                <i className="ri-link-m"></i>
                <p>https://www.adrox.com/invite....</p>
                <i className="ri-file-copy-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Link Starts Here */}

      <div className="mt-56">
        <div className="flex justify-center">
          <div className="flex flex-col gap-10 justify-center items-center p-10 bg-slate-600 bg-opacity-20 rounded-2xl w-96 border-slate-600 border ">
            <img src={adam2} className="w-20"></img>
            <p className="text-[32px] font-700">ADROX 001</p>
            <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full">
              <p className="bg-[#AB00FF] shadow-2xl rounded-lg p-1 px-4">800</p>
              <p className="bg-[#AB00FF] shadow-2xl rounded-lg p-1 px-4">910</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={doubleLink1} className="w-6/12"></img>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-between w-4/5 p-7 px-20">
            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-72 border-slate-600 border ">
              <img src={adam2} className="w-20"></img>
              <p className="text-[20px] font-700">ADROX 001</p>
              <div className="flex text-[24px] font-200 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg  px-7">
                  800
                </p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg  px-7">
                  910
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-72 border-slate-600 border ">
              <img src={adam2} className="w-20"></img>
              <p className="text-[20px] font-700">ADROX 001</p>
              <div className="flex text-[24px] font-200 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-between w-3/4">
            <img src={doubleLink2} className="w-96"></img>
            <img src={doubleLink2} className="w-96"></img>
          </div>
        </div>

        <div className="flex justify-evenly p-5">
          <div className="left flex justify-around w-1/2">
            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-56 border-slate-600 border ">
              <img src={adam2} className="w-14"></img>
              <p className="text-[16px] font-700">ADROX 001</p>
              <div className="flex text-[12px] font-100 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-56 border-slate-600 border ">
              <img src={adam2} className="w-14"></img>
              <p className="text-[16px] font-700">ADROX 001</p>
              <div className="flex text-[12px] font-100 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>
          </div>

          <div className="right flex justify-around w-1/2">
            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-56 border-slate-600 border ">
              <img src={adam2} className="w-14"></img>
              <p className="text-[16px] font-700">ADROX 001</p>
              <div className="flex text-[12px] font-100 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-56 border-slate-600 border ">
              <img src={adam2} className="w-14"></img>
              <p className="text-[16px] font-700">ADROX 001</p>
              <div className="flex text-[12px] font-100 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[-30%] w-[80%] top-[40rem]">
        <img src={ellipse}></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src={ellipse}></img>
      </div>
    </div>
  );
}
