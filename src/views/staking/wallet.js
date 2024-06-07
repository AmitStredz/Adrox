import React, { useState } from "react";
import HomeHeader from "../homePage/pages/homeHeader";
import AdroxWallet from "./adroxWallet";
import TokenWallet from "./tokenWallet";
import adam3 from "./assets/adam3.png";

export default function Wallet() {
  const [activeComponent, setactiveComponent] = useState("adroxWallet");

  const handleButtonClick = (button) => {
    console.log("button", button);
    setactiveComponent(button);
  };
  return (
    <div className="bg-[#0F011A] w-screen h-screen font-nunito text-white overflow-x-hidden relative">
      <div>
        <HomeHeader></HomeHeader>
      </div>

      <div className="flex-col flex mt-44 p-20 z-50 gap-8 mx-10">
        <div className="flex items-center gap-1">
          <img src={adam3} className="w-10"></img>
          <p className="text-[20px] font-400">Adrox001</p>
        </div>
        <div className="flex gap-5 z-50">
          <button
            className={` p-2 px-12 rounded-2xl ${
              activeComponent === "adroxWallet"
                ? " p-2 px-12 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
                : "border border-slate-500"
            }`}
            onClick={() => handleButtonClick("adroxWallet")}
          >
            ADROX Wallet
          </button>
          <button
            className={` p-2 px-12 rounded-2xl ${
              activeComponent === "tokenWallet"
                ? " p-2 px-12 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
                : "border border-slate-500"
            }`}
            onClick={() => handleButtonClick("tokenWallet")}
          >
            Token Wallet
          </button>
        </div>

        <div>
          {activeComponent === "adroxWallet" && <AdroxWallet />}
          {activeComponent === "tokenWallet" && <TokenWallet />}
        </div>
      </div>
    </div>
  );
}
