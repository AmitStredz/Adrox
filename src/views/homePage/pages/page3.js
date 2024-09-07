import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export default function Page3() {
  const history = useNavigate();

  const handleClick = () => {
    history("/staking1");
  };
  return (
    <div>
      <div className="mb-20">
        <div className="text-center">
          <h1 className="text-[36px] sm:text-[44px] md:text-[56px] font-700 sm:font-800">
            Earn with ADROX
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-20 py-20 justify-center items-center">
          <div
            className="flex max-sm:flex-col bg-slate-500 items-center max-sm:mx-16 bg-opacity-15 p-10 gap-5 rounded-2xl md:col-start-2 lg:col-start-2 col-span-8 lg:col-span-7 group cursor-pointer z-50"
            onClick={handleClick}
          >
            <img src={img1} className="w-28 h-20"></img>
            <div className="flex flex-col max-sm:items-center">
              <div className="flex gap-10 items-center">
                <h1 className="font-700 text-[36px] group-hover:underline">
                  ADROX Lending
                </h1>
                <i className="ri-arrow-right-s-line px-1 text-2xl font-100 border rounded-full cursor-pointer"></i>
              </div>
              <div className="text-[16px] font-400 max-md:text-center">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col bg-slate-500 items-center max-sm:mx-16 bg-opacity-15 p-10 gap-5 rounded-2xl row-start-2 md:col-start-4 lg:col-start-5 col-span-8 lg:col-span-7 group cursor-pointer z-50">
            <img src={img2} className="w-28 h-20"></img>
            <div className="flex flex-col max-sm:items-center">
              <div className="flex gap-10 items-center cursor-pointer">
                <h1 className="font-700 text-[36px] group-hover:underline">
                  ADROX Mining
                </h1>
                <i className="ri-arrow-right-s-line px-1 text-2xl font-100 border rounded-full cursor-pointer"></i>
              </div>
              <div className="text-[16px] font-400 max-md:text-center">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col bg-slate-500 items-center max-sm:mx-16 bg-opacity-15 p-10 gap-5 rounded-2xl row-start-3 md:col-start-2 lg:col-start-2 col-span-8 lg:col-span-7 group cursor-pointer z-50">
            <img src={img3} className="w-28 h-20"></img>
            <div className="flex flex-col max-sm:items-center">
              <div className="flex gap-10 items-center cursor-pointer">
                <h1 className="font-700 text-[36px] group-hover:underline">
                  ADROX Trading Bots
                </h1>
                <i className="ri-arrow-right-s-line px-1 text-2xl font-100 border rounded-full cursor-pointer"></i>
              </div>
              <div className="text-[16px] font-400 max-md:text-center">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
