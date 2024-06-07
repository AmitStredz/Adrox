import React from "react";
import HomeHeader from "../homePage/pages/homeHeader";
import starLogo from "./assets/star-logo.png";
import img1 from "./assets/img1.png";
import { useNavigate } from "react-router-dom";
import ellipse from "./assets/ellipse.png";

export default function Staking() {
  const history = useNavigate();
  return (
    <div className="bg-[#0F011A] w-screen h-screen font-nunito text-white overflow-x-hidden relative">
      <div>
        <HomeHeader></HomeHeader>
      </div>

      <div className="flex p-10 items-center justify-evenly h-screen">
        <div className="flex flex-col">
          <img src={img1} className="w-28"></img>
          <h1 className="font-700 text-[64px] text-[#C653FF]">ADROX</h1>
          <h1 className="font-800 text-[88px] text-[#C653FF]">STAKING</h1>
          <p className="font-300 text-[16px] w-96">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="flex items-center justify-evenly w-[30rem] h-80 bg-slate-600 bg-opacity-15 rounded-xl border-l z-50 border-slate-500">
          <div>
            <div>
              <img></img>
              <p className="text-[20px] font-400">Adrox001</p>
            </div>
            <div>
              <p className="font-300 text-[20px]">Holdings</p>
              <span className="text-[36px] font-800 text-[#C653FF]">
                1,000 ADR
              </span>
              <p className="font-300 text-[20px]">$ 250 USD</p>
            </div>
          </div>

          <div className="text-center flex flex-col gap-2 items-center">
            <img src={starLogo} className="w-24"></img>
            <h1>ADROX</h1>
            <a className=" p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">
              My Wallet
            </a>
          </div>
        </div>
      </div>

      {/* Adrox Staking Plans */}
      <div>
        <div className="text-center">
          <h1 className="text-[56px] font-700 text-[#C653FF]">
            ADROX Staking plans
          </h1>
        </div>

        <div className="flex justify-center items-center my-20">
          <div className="grid grid-cols-2 grid-rows-2 gap-14">
            <div className="flex justify-center items-center bg-slate-600 bg-opacity-15 p-14 rounded-xl z-50">
              <div className="flex flex-col gap-8">
                <div className="flex gap-5 justify-between">
                  <div className="bg-slate-600 bg-opacity-20 p-3 rounded-lg">
                    <h1 className="text-[24px] font-700">1 Month Plan</h1>
                  </div>
                  <div className="text-[16px] font-100 flex flex-col justify-between">
                    <p>
                      Min. Deposit : <span className="font-400">100USD</span>
                    </p>
                    <p>
                      Max. Deposit : <span className="font-400">100USD</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 text-[20px] justify-between">
                  <div className="flex gap-2 border border-slate-600 p-3 px-4 rounded-lg items-center">
                    <p className="font-400">APY</p>
                    <p className="font-700 bg-[#4F0F81]  rounded-lg p-1 px-3">
                      36.5%
                    </p>
                  </div>
                  <div className="flex gap-2 border border-slate-600 p-3 px-4 rounded-lg items-center">
                    <p className="font-400">DPY</p>
                    <p className="font-700 bg-[#4F0F81]  rounded-lg p-1 px-3">
                      0.1%
                    </p>
                  </div>
                </div>

                <div
                  className="text-center font-400 text-[18px] p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
                  onClick={() => {history('/staking1Month')}}
                >
                  <button>Stake Now</button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center bg-slate-600 bg-opacity-15 p-14 rounded-xl z-50">
              <div className="flex flex-col gap-8">
                <div className="flex gap-5 justify-between">
                  <div className="bg-slate-600 bg-opacity-20 p-3 rounded-lg">
                    <h1 className="text-[24px] font-700">3 Month Plan</h1>
                  </div>
                  <div className="text-[16px] font-100 flex flex-col justify-between">
                    <p>
                      Min. Deposit : <span className="font-400">100USD</span>
                    </p>
                    <p>
                      Max. Deposit : <span className="font-400">100USD</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 text-[20px] justify-between">
                  <div className="flex gap-2 border border-slate-600 p-3 px-4 rounded-lg items-center">
                    <p className="font-400">APY</p>
                    <p className="font-700 bg-[#4F0F81]  rounded-lg p-1 px-3">
                      73.0%
                    </p>
                  </div>
                  <div className="flex gap-2 border border-slate-600 p-3 px-4 rounded-lg items-center">
                    <p className="font-400">DPY</p>
                    <p className="font-700 bg-[#4F0F81]  rounded-lg p-1 px-3">
                      0.30%
                    </p>
                  </div>
                </div>

                <div className="text-center font-400 text-[18px] p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
                  onClick={() => {history('/staking3Month')}}
                  >
                  <button>Stake Now</button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center bg-slate-600 bg-opacity-15 p-14 rounded-xl z-50">
              <div className="flex flex-col gap-8">
                <div className="flex gap-5 justify-between">
                  <div className="bg-slate-600 bg-opacity-20 p-3 rounded-lg">
                    <h1 className="text-[24px] font-700">6 Month Plan</h1>
                  </div>
                  <div className="text-[16px] font-100 flex flex-col justify-between">
                    <p>
                      Min. Deposit : <span className="font-400">100USD</span>
                    </p>
                    <p>
                      Max. Deposit : <span className="font-400">100USD</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 text-[20px] justify-between">
                  <div className="flex gap-2 border border-slate-600 p-3 px-4 rounded-lg items-center">
                    <p className="font-400">APY</p>
                    <p className="font-700 bg-[#4F0F81]  rounded-lg p-1 px-3">
                      146%
                    </p>
                  </div>
                  <div className="flex gap-2 border border-slate-600 p-3 px-4 rounded-lg items-center">
                    <p className="font-400">DPY</p>
                    <p className="font-700 bg-[#4F0F81]  rounded-lg p-1 px-3">
                      0.40%
                    </p>
                  </div>
                </div>

                <div className="text-center font-400 text-[18px] p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
                  onClick={() => {history('/staking6Month')}}
                  >
                  <button>Stake Now</button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center bg-slate-600 bg-opacity-15 p-14 rounded-xl z-50">
              <div className="flex flex-col gap-8">
                <div className="flex gap-5 justify-between">
                  <div className="bg-slate-600 bg-opacity-20 p-3 rounded-lg">
                    <h1 className="text-[24px] font-700">1 Year Plan</h1>
                  </div>
                  <div className="text-[16px] font-100 flex flex-col justify-between">
                    <p>
                      Min. Deposit : <span className="font-400">100USD</span>
                    </p>
                    <p>
                      Max. Deposit : <span className="font-400">100USD</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 text-[20px] justify-between">
                  <div className="flex gap-2 border border-slate-600 p-3 px-4 rounded-lg items-center">
                    <p className="font-400">APY</p>
                    <p className="font-700 bg-[#4F0F81]  rounded-lg p-1 px-3">
                      146%
                    </p>
                  </div>
                  <div className="flex gap-2 border border-slate-600 p-3 px-4 rounded-lg items-center">
                    <p className="font-400">DPY</p>
                    <p className="font-700 bg-[#4F0F81]  rounded-lg p-1 px-3">
                      0.40%
                    </p>
                  </div>
                </div>

                <div className="text-center font-400 text-[18px] p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
                  onClick={() => {history('/staking1Year')}}
                  >
                  <button>Stake Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[-30%] w-[80%] top-[20rem]">
        <img src={ellipse}></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-[50rem]">
        <img src={ellipse}></img>
      </div>
    </div>
  );
}
