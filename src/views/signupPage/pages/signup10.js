import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InvalidPhrase from "./invalidPhraseModal";
import Cookies from "js-cookie";
import SignupAnimation from "./signupAnimation";

const Signup10 = ({ onNextStep }) => {
  const [phraseInputs, setPhraseInputs] = useState(Array(12).fill(""));
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (index, value) => {
    const newInputs = [...phraseInputs];
    newInputs[index] = value;
    setPhraseInputs(newInputs);
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const paste = event.clipboardData.getData("text");
    const words = paste.split(/\s+/).slice(0, 12);

    if (words.length === 12) {
      setPhraseInputs(words);
    } else {
      alert("Please paste exactly 12 words.");
    }
  };

  const handleButtonClick = () => {
    const storedPhrase = JSON.parse(Cookies.get("recoveryPhrase"));
    const inputPhrase = phraseInputs.join(" ");


    if (storedPhrase.join(" ") === inputPhrase) {
      // navigate("/signup11");
      onNextStep();
    } else {
      // alert("Secret recovery phrase does not match");
      setShowModal(true);
    }
  };

  return (
    <div className="flex bg-[#0f011a] h-screen text-white font-nunito p-5 lg:p-24 justify-evenly gap-10 relative overflow-hidden  max-md:flex-col">
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

      <div className="z-50 flex justify-center">
        <div className="flex flex-col gap-10 max-md:w-[100%] max-lg:max-w-[55vw] max-w-[100%] items-center justify-center">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem]  max-md:w-[80vw] p-3 sm:p-7 lg:p-12 rounded-2xl">
            <h1 className="font-400 text-[20px] text-center">
              Validate Your Secret Recovery Phrase
            </h1>

            <div
              className="grid grid-cols-3 sm:grid-cols-4 gap-5 sm:gap-10 md:gap-5 lg:gap-12 border p-2 sm:p-5 lg:p-8 justify-center items-center text-center rounded-2xl"
              onPaste={handlePaste}
            >
              {phraseInputs.map((input, index) => (
                <input
                  key={index}
                  className="w-[80px] sm:w-[90px] md:w-[10vw] lg:w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md outline-none p-1 text-center"
                  value={input}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ))}
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
        <img src="/ellipse.png" alt="hello" />
      </div>
      <div className="absolute w-[90%] bottom-[-50%] left-[-40%] z-10">
        <img src="/ellipse.png" alt="hello" />
      </div>
      {/* <div className="absolute left-0 w-[100%] h-[10%] top-0 ">
        <img src={statAnimation}></img>
      </div> */}

      <div className="z-50">
        {showModal && <InvalidPhrase closeModal={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default Signup10;
