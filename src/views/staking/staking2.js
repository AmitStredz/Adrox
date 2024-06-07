import React, { useState } from "react";
import HomeHeader from "../homePage/pages/homeHeader";
import Staking from "./staking";
import Link from "./link";

export default function Staking2() {
  const [activeComponent, setactiveComponent] = useState("Staking");

  const handleButtonClick = (button) => {
    console.log('button',button);
    setactiveComponent(button);
  };
  return (
    <div className="bg-[#0F011A] w-screen h-screen font-nunito text-white overflow-x-hidden relative">
      <div>
        <HomeHeader></HomeHeader>
      </div>

      <div className="items-center flex mt-44 p-20 z-50">
        <div className="flex gap-5 ml-32 z-50">
          <button
            className={` p-2 px-12 rounded-2xl ${activeComponent === 'Staking' ? ' p-2 px-12 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer':'border border-slate-500'}`}
            onClick={() => handleButtonClick("Staking")}
          >
            Staking
          </button>
          <button
            className={` p-2 px-12 rounded-2xl ${activeComponent === 'link' ? ' p-2 px-12 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer':'border border-slate-500'}`}
            onClick={() => handleButtonClick("link")}
          >
            ADROX Link
          </button>
        </div>
      </div>

      <div>
      {activeComponent === "Staking" && <Staking />}
        {activeComponent === "link" && <Link />}
      </div>
    </div>
  );
}



