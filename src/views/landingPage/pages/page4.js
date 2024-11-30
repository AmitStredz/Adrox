import React from "react";
import grid1 from "./assets/grid1.png";
import grid2 from "./assets/grid2.png";
import grid3 from "./assets/grid3.png";
import grid4 from "./assets/grid4.png";

export default function page4() {
  return (
    <div className="relative">
      <div className="mt-52">
        {/* Heading */}
        <div className="text-center text-[40px] sm:text-[56px] font-800 leading-14">
          <h1>Explore Adrox</h1>
          <h1 className="text-[#C653FF]">Products & Services</h1>
        </div>

        {/* Grid container */}
        <div className="flex justify-center p-24 ">
          <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-24">
            {/* Grid 1 */}
            <div className="relative bg-slate-500 bg-opacity-20 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4 group overflow-hidden o z-50">
              <img src={grid1} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Spot Trading</h1>
                <p className="font-400 text-[16px]">
                  Unlock the Future of Trading with ADROX Spot
                </p>
              </div>
              <div className="text-center text-3xl hover:scale-105 transition-all duration-300">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
              <span className="absolute -z-10 inset-0 bg-gradient-to-r from-transparent via-[#4F0F81] to-transparent opacity-0 transform scale-150 rotate-45 translate-x-full translate-y-full group-hover:opacity-100 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] transition-all duration-700 ease-out will-change-transform w-[200%] h-[200%]"></span>
            </div>

            {/* Grid 2 */}
            <div className="relative bg-slate-500 bg-opacity-20 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4 group overflow-hidden o z-50">
              <img src={grid2} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Buy Crypto</h1>
                <p className="font-400 text-[16px]">
                  Your Simplest, Most Secure Path to Owning Digital Assets
                </p>
              </div>
              <div className="text-center text-3xl hover:scale-105 transition-all duration-300">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
              <span className="absolute -z-10 inset-0 bg-gradient-to-r from-transparent via-[#4F0F81] to-transparent opacity-0 transform scale-150 rotate-45 translate-x-full translate-y-full group-hover:opacity-100 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] transition-all duration-700 ease-out will-change-transform w-[200%] h-[200%]"></span>
            </div>
            {/* Grid 3 */}
            <div className="relative bg-slate-500 bg-opacity-20 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4 group overflow-hidden o z-50">
              <img src={grid3} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Trading Bot</h1>
                <p className="font-400 text-[16px]">
                  Automate Your Success in the Crypto Market with Unmatched
                  Efficiency and Speed
                </p>
              </div>
              <div className="text-center text-3xl hover:scale-105 transition-all duration-300">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
              <span className="absolute -z-10 inset-0 bg-gradient-to-r from-transparent via-[#4F0F81] to-transparent opacity-0 transform scale-150 rotate-45 translate-x-full translate-y-full group-hover:opacity-100 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] transition-all duration-700 ease-out will-change-transform w-[200%] h-[200%]"></span>
            </div>
            {/* Grid 4 */}
            <div className="relative bg-slate-500 bg-opacity-20 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4 group overflow-hidden o z-50">
              <img src={grid4} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Adrox Earn</h1>
                <p className="font-400 text-[16px]">
                  ADROX Lending Turns Your Idle Assets Into Active Income
                </p>
              </div>
              <div className="text-center text-3xl hover:scale-105 transition-all duration-300">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
              <span className="absolute -z-10 inset-0 bg-gradient-to-r from-transparent via-[#4F0F81] to-transparent opacity-0 transform scale-150 rotate-45 translate-x-full translate-y-full group-hover:opacity-100 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] transition-all duration-700 ease-out will-change-transform w-[200%] h-[200%]"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <img src="\external\ellipse32356-aujk-700w.png"></img>
      </div>
      <div className="absolute top-[-210px] left-0">
        <img src="\external\ellipse23212-y26r-1000w.png"></img>
      </div>
    </div>
  );
}
