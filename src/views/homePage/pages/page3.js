import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export default function Page3() {
  const history = useNavigate();

  const handleClick = () => {
    history("/adxLending");
  };
  return (
    <div className="p- w-full">
      <div className="mb-20 w-full flex flex-col">
        <div className="text-center">
          <h1 className="text-[36px] sm:text-[44px] md:text-[56px] font-700 sm:font-800">
            Earn with ADROX
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 p-5 gap-5 sm:gap-20 sm:py-20 justify-center items-center w-full">
          <div
            className="flex max-sm:flex-col bg-slate-500 items-center w-full  bg-opacity-15 p-5 sm:p-10 gap-5 rounded-2xl col-start-1 md:col-start-2 lg:col-start-2 col-span-8 lg:col-span-7 group cursor-pointer z-50"
            onClick={handleClick}
          >
            <img src={img1} className="w-28 h-20"></img>
            <div className="flex flex-col max-sm:items-center w-full">
              <div className="flex gap-2 sm:gap-10 items-center">
                <h1 className="font-700 text-[28px] sm:text-[36px] group-hover:underline">
                  ADROX Lending
                </h1>
                <i className="ri-arrow-right-s-line px-1 text-2xl font-100 border rounded-full cursor-pointer"></i>
              </div>
              <div className="text-[12px] sm:text-[16px] font-400 max-md:text-center">
                <p>
                  Join the Lending Pool Protocol community and experience the
                  future of finance. Sign up now to explore a world where your
                  assets work for you efficiently, securely, and transparently.
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col bg-slate-500 items-center w-full  bg-opacity-15 p-5 sm:p-10 gap-5 rounded-2xl col-start-1 md:col-start-3 lg:col-start-5 col-span-8 lg:col-span-7 group cursor-pointer z-50">
            <img src={img2} className="w-28 h-20"></img>
            <div className="flex flex-col max-sm:items-center">
              <div className="flex gap-2 sm:gap-10 items-center">
                <h1 className="font-700 text-[28px] sm:text-[36px] group-hover:underline">
                  ADROX Mining
                </h1>
                <i className="ri-arrow-right-s-line px-1 text-2xl font-100 border rounded-full cursor-pointer"></i>
              </div>
              <div className="text-[12px] sm:text-[16px] font-400 max-md:text-center">
                <p>
                  Unlock your potential in the blockchain space. Sign up now to
                  become a part of our mining community and start earning
                  rewards while securing the network.
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col bg-slate-500 items-center w-full  bg-opacity-15 p-5 sm:p-10 gap-5 rounded-2xl col-start-1 md:col-start-2 lg:col-start-2 col-span-8 lg:col-span-7 group cursor-pointer z-50">
            <img src={img3} className="w-28 h-20"></img>
            <div className="flex flex-col max-sm:items-center">
              <div className="flex gap-2 sm:gap-10 items-center">
                <h1 className="font-700 text-[28px] sm:text-[36px] group-hover:underline text-center">
                  ADROX Trading Bots
                </h1>
                <i className="ri-arrow-right-s-line px-1 text-2xl font-100 border rounded-full cursor-pointer"></i>
              </div>
              <div className="text-[12px] sm:text-[16px] font-400 max-md:text-center">
                <p>
                  Transform your trading experience with our innovative trading
                  bots. Sign up now to automate your trading and stay ahead in
                  the fast-paced market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
