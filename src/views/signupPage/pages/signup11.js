import React from "react";
import { useNavigate } from "react-router-dom";

import SignupAnimation from "./signupAnimation";

const Signup11 = ({ onNextStep }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // navigate("/signup12");
    onNextStep();
  };

  return (
    <div className="flex bg-[#0f011a] h-full text-white font-nunito p-24 justify-evenly gap-10 relative overflow-hidden max-md:flex-col">
      {/* <Helmet>
        <title>Signup - Adrox</title>
      </Helmet> */}
      <div className="w-full md:w-[40%] items-center z-50 max-lg:flex justify-center">
        <div className="text-center">
          <h1 className="font-700 text-[48px] text-[#C653FF] max-sm:leading-11">
            Welcome Aboard
          </h1>
          <p className="font-300 text-[16px]">
            Just A Couple Of Clicks And We Start
          </p>
        </div>

        <SignupAnimation></SignupAnimation>
      </div>

      {/* Signup11 is this */}
      <div className="z-50 flex justify-center">
        <div className="flex flex-col gap-10 max-md:w-[100%] max-lg:max-w-[55vw] max-w-[100%] items-center justify-center ">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem]  max-md:w-[80vw] p-12 rounded-2xl">
            <h1 className="font-400 text-[20px] text-center">
              Your Recovery Phrase Has Been Successfully Verified
            </h1>

            <div className="flex justify-center border p-8 rounded-2xl">
              <i
                className="ri-checkbox-circle-line text-7xl sm:text-9xl text-[#C653FF]"
                data-aos="zoom-in"
              ></i>
            </div>

            <div className="flex justify-center text-center max-sm:w-[55vw]">
              <label
                className="text-[14px] sm:text-[16px] font-400 items- flex gap-1 sm:items-center"
                // for="checkbox"
              >
                <input
                  type="checkbox"
                  className="size-3 sm:size-4 max-sm:mt-1"
                ></input>
                Send Recovery Phrase To My Email
              </label>
            </div>

            <div className="text-center">
              <button
                onClick={handleButtonClick}
                className="p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[90%] top-[-40%] right-[-40%] z-10">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
      <div className="absolute w-[80%] bottom-[-50%] left-[-40%] z-10 ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>

      {/* <div className="absolute left-0 w-[100%] h-[10%] top-0 ">
        <img src={statAnimation}></img>
      </div> */}
      <div className="bg-[#0f011a] fixed top-0 left-0 -z-10 h-screen w-screen"></div>

    </div>
  );
};

export default Signup11;
