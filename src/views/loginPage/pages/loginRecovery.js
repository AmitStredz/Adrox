import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import InvalidPopup from "./incorrectPhraseModal"; // popup to show invalid input
import ValidPopup from "./correctPhraseModal"; // popup to show success

export default function Login1() {
  const navigate = useNavigate();
  const [phrase, setPhrase] = useState(Array(12).fill(""));
  const [showInvalidPopup, setShowInvalidPopup] = useState(false);
  const [showValidPopup, setShowValidPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePaste = (event) => {
    event.preventDefault();
    const paste = event.clipboardData.getData("text");
    const words = paste.split(/\s+/).slice(0, 12);

    if (words.length === 12) {
      setPhrase(words);
    } else {
      alert("Please paste exactly 12 words.");
    }
  };

  const handleInputChange = (index, value) => {
    const newPhrase = [...phrase];
    newPhrase[index] = value;
    setPhrase(newPhrase);
  };

  const handleLoginClick = async () => {
    setIsLoading(true);
    const recoveryPhrase = phrase.join(" ");
    try {
      const response = await fetch(
        "https://adrox-89b6c88377f5.herokuapp.com/api/users/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phrase: recoveryPhrase }),
        }
      );

      const responseData = await response.json();
      Cookies.set("user_id", responseData.user_id);
      Cookies.set("full_name", responseData.full_name);
      Cookies.set("email", responseData.email);
      Cookies.set("mobile_number", responseData.mobile_number);
      Cookies.set("referral_id", responseData.referral_id);

      if (response.ok) {
        setShowValidPopup(true);
        setTimeout(() => {
          navigate("/homePage");
        }, 2000);
        setIsLoading(false);
      } else {
        setShowInvalidPopup(true);
        setIsLoading(false);
      }
    } catch (error) {
      setShowInvalidPopup(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <div className="flex bg-[#0f011a] h-full text-white font-nunito p-24 justify-center overflow-hidden relative">
    //   {showInvalidPopup && <InvalidPopup closeModal={() => setShowInvalidPopup(false)} />}
    //   {showValidPopup && <ValidPopup />}
    //   <div className="">
    //     <div className="flex flex-col items-center bg-slate-400 bg-opacity-10 w-[40rem] p-16 rounded-2xl">
    //       <div className="flex justify-between w-full items-end z-50">
    //         <img src={logo} className="w-28"></img>
    //         <h1 className="font-700 text-[48px]">Log in</h1>
    //       </div>

    <div className="flex flex-col gap-5 w-[85vw] sm:w-[70vw] md:w-[35rem] py-12 md:p-12 rounded-2xl">
      <h1 className="font-400 text-[16px] text-center">
        Enter Your Recovery Phrase
      </h1>

      <div
        className="grid grid-cols-3 sm:grid-cols-4 gap-[2vw] gap-y-[4vw] sm:gap-8 border border-slate-500 p-3 sm:p-5 justify-center items-center text-center rounded-2xl z-50 w-full"
        onPaste={handlePaste}
      >
        {phrase.map((word, index) => (
          <input
            key={index}
            value={word}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1 items-center flex justify-center "
          />
        ))}
      </div>

      <div className="text-center z-50">
        <button
          className={`p-2 px-20 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer ${
            isLoading ? "bg-gray-500" : ""
          }`}
          disabled={isLoading}
          onClick={handleLoginClick}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>

      {showInvalidPopup && (
        <InvalidPopup
          text="Invalid Recovery Phrase. Please try again"
          closeModal={() => setShowInvalidPopup(false)}
        />
      )}
      {showValidPopup && (
        <ValidPopup text="Recovery Phrase Successfully Verified." />
      )}
    </div>

    //       <div className="text-center gap-5 flex flex-col z-50">
    //         <h1 className="font-100">
    //           ---------------
    //           <span className="font-400">Alternative login methods</span>
    //           ----------------
    //         </h1>
    //         <div className="flex text-center justify-between">
    //           <div
    //             className="flex justify-center border border-slate-500 rounded-xl p-2 w-48 gap-2 cursor-pointer"
    //             onClick={() => navigate("/loginEmail")}
    //           >
    //             <i className="ri-mail-line"></i>
    //             <p>Email</p>
    //           </div>
    //           <div
    //             className="flex justify-center border border-slate-500 rounded-xl p-2 w-48 gap-2 cursor-pointer"
    //             onClick={() => navigate("/loginPhone")}
    //           >
    //             <i className="ri-smartphone-line"></i>
    //             <p>Phone Number</p>
    //           </div>
    //         </div>

    //         <div className="text-[16px] font-300">
    //           <p>
    //             Don't have an account?{" "}
    //             <span
    //               className="underline font-700 hover:font-800 cursor-pointer"
    //               onClick={() => navigate("/signup1")}
    //             >
    //               Sign up now
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute top-[-60px] right-0 ">
    //     <img src="/ellipse32352-wf1-700w.png" alt="hello"></img>
    //   </div>
    //   <div className="absolute bottom-0 right-0 overflow-hidden">
    //     <img
    //       src="/external/ellipse32356-aujk-700w.png"
    //       alt="hello"
    //       className="bottom-0"
    //     ></img>
    //   </div>
    //   <div className="absolute bottom-0 left-0 overflow-hidden">
    //     <img
    //       src="/external/ellipse22356-sa34-1000w.png"
    //       alt="hello"
    //       className="bottom-0"
    //     ></img>
    //   </div>
    // </div>
  );
}
