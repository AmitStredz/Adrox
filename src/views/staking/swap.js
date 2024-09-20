import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import stroke from "./assets/strokeEffect.png";
import dollarBlue from "./assets/dollarBlue.png";
import starBlue from "./assets/starBlue.png";
import swap from "./assets/swapBlue.png";
import SuccessModal from "./sucessModal";

const Swap = ({ onClose, holdings }) => {
  const [adxValue, setAdxValue] = useState("");
  const [usdtValue, setUsdtValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const history = useNavigate();

  const handleAdxValueChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAdxValue(value);
      setUsdtValue(value * 0.05);
    }
  };
  const handleUsdtValueChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setUsdtValue(value);
      setAdxValue(value / 0.05);
    }
  };

  const onMaxClick = () => {
    setAdxValue(holdings);
    setUsdtValue(holdings * 0.05);
  };

  const handleSwap = async () => {
    setIsLoading(true);

    if (adxValue <= 0) {
      setErrorText("Enter a valid amount.");
      setIsLoading(false);
      return;
    }
    try {
      const userId = Cookies.get("user_id");
      if (!userId) {
        alert("userId not found...");
        console.log("userId not found...");
        return;
      }

      const response = await axios.post(
        `https://adrox-89b6c88377f5.herokuapp.com/api/wallet/profit-wallet/swap-custom/${userId}/`,
        {
          adrx_amount: adxValue,
        }
      );

      console.log("response: ", response);

      if (response) {
        setShowModal(true);
        setTimeout(() => {
          // navigate("/wallet");
          onClose();
          setShowModal(false);
        }, 2000);
      } else {
        alert("No response");
      }
    } catch (error) {
      console.error("Error:", error.response.data.error);
      if (error.message === "Wallet not found") {
        alert("Wallet not found");
        // throw new Error("Wallet not found");
      } else if (error.message === "Insufficient balance") {
        setErrorText("Insuffient Balance.");
        // alert("Insufficient balance");
        // throw new Error("Insufficient balance");
      } else if (
        error.response.data.error ==
        "Insufficient ADRX balance in the profit wallet."
      ) {
        console.log("Insuficient balance...");
        setErrorText("Insuffient Balance.");
      } else {
        alert("ami");
        // throw new Error("unknown error occurred");
      }
      // alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <div className="bg-[#0F011A]  font-nunito text-white overflow-hidden flex items-center justify-center relative">
    <div
      className="flex justify-center h-full w-full z-[1000] backdrop:blur-sm fixed top-0 left-0 backdrop-blur-xl"
      data-aos="fade-in"
    >
      <div className="w-full h-full p-3 flex justify-center overflow-auto">
        <div className="flex flex-col gap-10 bg-gradient-to-r from-[#210F34] to-[#170D25] p-14 rounded-3xl max-w-xl z-[5000] h-[100vh]">
          <div className="flex items-center justify-between">
            <h1 className="font-700 text-[30px] sm:text-[48px]">Swap Tokens</h1>
            <i
              className="ri-close-fill text-4xl cursor-pointer hover:scale-105"
              onClick={onClose}
            ></i>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <p className="font-500">1 USDT = 20 ADX</p>
              <p className="bg-slate-800 p-1 px-2 rounded-lg">
                Available Balance: {holdings} $
              </p>
            </div>
            <div className="flex max-sm:flex-col gap-3 sm:gap-6 items-center">
              <div className="flex flex-col bg-gradient-to-tl from-[#1A0C24] to-[#251530] border border-slate-700 rounded-xl p-5 gap-5 ">
                <div className="flex  gap-1 rounded-3xl p-2 w-24 justify-center bg-slate-500 bg-opacity-20">
                  <img src={starBlue} className="w-5 h-5"></img>
                  <p className="text-24px">ADX</p>
                </div>
                <div className="flex justify-end border border-slate-600 rounded-lg p-1 px-3 text-[18px] font-700">
                  <input
                    required
                    type="text"
                    placeholder="00"
                    value={adxValue}
                    onChange={(e) => handleAdxValueChange(e)}
                    className="w-full p-2 outline-none bg-transparent"
                  />
                </div>
                <div className="flex justify-center w-full">
                  <span
                    className="text-slate-500 text-[14px] border border-slate-400 rounded-lg p- px-2 cursor-pointer hover:bg-slate-800 transition-all"
                    onClick={() => onMaxClick()}
                  >
                    Max
                  </span>
                </div>
              </div>
              <img src={swap} className="h-10"></img>
              <div className="flex flex-col border border-slate-700 bg-gradient-to-tl from-[#1A0C24] to-[#251530] rounded-xl p-5 gap-5 h-full">
                <div className="flex gap-1 rounded-3xl p-2 w-24 justify-center bg-slate-500 bg-opacity-20">
                  <img src={dollarBlue} className="w-5 h-5"></img>
                  <p className="text-24px">USDT</p>
                </div>
                <div className="flex justify-end border border-slate-600 rounded-lg p-1 px-3 text-[18px] font-700">
                  <input
                    required
                    type="text"
                    placeholder="00"
                    value={usdtValue}
                    onChange={(e) => handleUsdtValueChange(e)}
                    className="w-full p-2 outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 px-10 font-100 text-slate-300 bg-gradient-to-tl from-[#1A0C24] to-[#251530] border border-slate-700 rounded-xl">
            <div className="flex justify-between">
              <p>USDT</p>
              <p>{usdtValue}</p>
            </div>
            {/* <div className="flex justify-between">
              <p>Gas Fee</p>
              <p>5%</p>
            </div> */}
            <div className="w-full h-[1px] bg-opacity-45 bg-white"></div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>{usdtValue} USDT</p>
            </div>
          </div>

          <div className="flex flex-col">
            {/* <div className="flex items-center justify-center w-full"> */}
            <button
              className={`flex items-center justify-center p-2 px-24 rounded-2xl  w-full ${
                adxValue <= 0
                  ? " bg-gray-500"
                  : "bg-gradient-to-r from-[#4F0F81] to-[#A702FA]"
              }`}
              onClick={() => handleSwap()}
              disabled={adxValue <= 0}
            >
              {isLoading ? "Swapping..." : "Swap"}
            </button>
            {/* </div> */}
            {errorText && (
              <p className="text-red-500 text-[14px] p-2">{errorText}</p>
            )}
          </div>
        </div>
      </div>
      {showModal && <SuccessModal message="Swapped Successfully" />}
    </div>

    //   <div className="absolute right-0 top-[25rem]">
    //     <img src="/external/ellipse32356-aujk-700w.png" alt="ellipse" />
    //   </div>
    //   <div className="absolute left-[-30%] w-[80%] top-[5rem]">
    //     <img src={ellipse} alt="ellipse" />
    //   </div>
    // </div>
  );
};

export default Swap;
