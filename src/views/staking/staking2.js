import React, { useState } from "react";
import HomeHeader from "../homePage/pages/homeHeader";
import Staking from "./staking";
import Link from "./link";

export default function Staking2() {
  const [activeComponent, setactiveComponent] = useState(
    localStorage.getItem("op") || "Staking"
  );

  const handleButtonClick = (button) => {
    setactiveComponent(button);
    localStorage.setItem("op", button);
  };

  return (
    <div className="bg-[#0F011A] max-w-screen font-nunito text-white overflow-x-hidden relative">
      <div className="h-40">
        <HomeHeader></HomeHeader>
      </div>

      <div className="items-center flex p-2 md:p-5 lg:p-16 px-5 md:px-28 lg:px-40 z-50 max-w-screen">
        <div className="flex gap-2 sm:gap-5 z-50">
          <button
            className={` p-1 sm:p-2 px-6 sm:px-12 rounded-2xl ${
              activeComponent === "Staking"
                ? "bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
                : "border border-slate-500"
            }`}
            onClick={() => handleButtonClick("Staking")}
          >
            Staking
          </button>
          <button
            className={`p-1 sm:p-2 px-6 sm:px-12 rounded-2xl ${
              activeComponent === "link"
                ? "bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
                : "border border-slate-500"
            }`}
            onClick={() => handleButtonClick("link")}
          >
            ADROX Link
          </button>
        </div>
      </div>

      <div className="mt-20">
        {activeComponent === "Staking" && <Staking />}
        {activeComponent === "link" && <Link />}
      </div>
    </div>
  );
}
