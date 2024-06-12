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
            <div className="bg-slate-500 bg-opacity-20 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4 z-50">
              <img src={grid1} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Spot Trading</h1>
                <p className="font-400 text-[16px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="text-center text-3xl">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
            </div>

            {/* Grid 2 */}
            <div className="bg-slate-500 bg-opacity-20 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4 z-50">
              <img src={grid2} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Buy Crypto</h1>
                <p className="font-400 text-[16px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="text-center text-3xl">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
            </div>
            {/* Grid 3 */}
            <div className="bg-slate-500 bg-opacity-20 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4">
              <img src={grid3} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Trading Bot</h1>
                <p className="font-400 text-[16px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="text-center text-3xl">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
            </div>
            {/* Grid 4 */}
            <div className="bg-slate-500 bg-opacity-20 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4 z-50">
              <img src={grid4} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Adrox Earn</h1>
                <p className="font-400 text-[16px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="text-center text-3xl">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
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
