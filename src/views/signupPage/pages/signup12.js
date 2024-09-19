import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import Background from "../assets/account-background.png";
import Cookies from "js-cookie";

const Signup12 = ({onNextStep}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    Cookies.set("signupDone", true);
    onNextStep();
    navigate("/");
  };
  return (
    <div className="flex bg-[#0f011a] h-screen  w-screen text-white font-nunito p-10 sm:p-24 justify-evenly gap-10 overflow-hidden relative">
      
      <div className="flex items-center w-full justify-center">
        <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem] p-5 sm:p-8 md:p-12 rounded-2xl">
          <div>
            <h1 className="font-700 text-[36px] text-center text-[#C653FF]">
              Congratulations!
            </h1>
            <p className="font-100 text-[16px] text-center">
              Your ADROX wallet creation was successful. Remember to safeguard
              your Secret Recovery Phrase diligently as it is crucial for your
              security!
            </p>
          </div>

          <div className="font-100 text-[16px] flex flex-col gap-3">
            <p>Here are some important reminders:</p>
            <div className="bg-slate-500 bg-opacity-15 p-5 rounded-2xl">
              <li>ADROX cannot retrieve your Secret Recovery Phrase.</li>
              <li>ADROX will never request your Secret Recovery Phrase.</li>
              <li>
                Never share your Secret Recovery Phrase with anyone to avoid the
                risk of your funds being stolen.
              </li>
            </div>
          </div>
          <div className="text-center z-10 ">
            <button
              onClick={handleButtonClick}
              className="p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="absolute w-[90%] top-[-40%] right-[-40%] ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
      <div className="absolute w-[90%] bottom-[-50%] left-[-40%] ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
    </div>
  );
}

export default Signup12;

<div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem] p-12 rounded-2xl">
  <div>
    <h1 className="font-400 text-[20px] text-center">Congradulations!</h1>
    <p>
      Your ADROX wallet creation was successful. Remember to safeguard your
      Secret Recovery Phrase diligently as it is crucial for your security!
    </p>
  </div>

  <div>
    <p>Here are some important reminders:</p>
    <li>ADROX cannot retrieve your Secret Recovery Phrase.</li>
    <li>ADROX will never request your Secret Recovery Phrase.</li>
    <li>
      Never share your Secret Recovery Phrase with anyone to avoid the risk of
      your funds being stolen.
    </li>
  </div>
</div>;
