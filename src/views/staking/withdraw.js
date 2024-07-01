import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dollar from "./assets/dollarBlue.png";
import Modal from "./sucessModal";
import Cookies from "js-cookie";

const Withdraw = ({ onClose }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(""); // State for withdrawal amount
  const [withdrawalAddress, setWithdrawalAddress] = useState(""); // State for withdrawal address
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const [balance, setBalance] = useState(0); // State for available balance
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedBalance = Cookies.get("balance");
    if (storedBalance) {
      setBalance(parseFloat(storedBalance)); // Ensure balance is a number
    }
  }, []);

  const handleWithdraw = async () => {
    setIsLoading(true);

    if (amount < 20) {
      alert("Minimum Withdrawal Amount: 20$");
      setIsLoading(false);
      return;
    }
    try {
      const walletId = Cookies.get("wallet_id");
      if (!walletId) {
        throw new Error("Wallet ID not found for User.");
      }

      const response = await axios.post(
        "https://adrox-89b6c88377f5.herokuapp.com/api/wallet/withdraw/",
        {
          wallet_id: walletId,
          amount: amount,
        }
      );

      Cookies.set("balance", response.data.new_balance);

      if (response.data.message === "Withdrawal successful") {
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
      console.error("Error:", error);
      if (error.message === "Wallet not found") {
        alert("Wallet not found");
      } else if (error.message === "Insufficient balance") {
        alert("Insufficient balance");
      } else {
        alert("ami");
      }
      // alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <div className="bg-[#0F011A] font-nunito text-slate-300 overflow-hidden flex items-center justify-center relative">
    <div className="flex justify-center w-full h-full fixed top-0 left-0 backdrop-blur-xl z-[100]">
      <div className="w-full h-full px-3 flex items-center justify-center overflow-auto">
        <div className="flex flex-col gap-10 my-20 p-7 sm:p-14 rounded-3xl max-w-xl bg-gradient-to-r from-[#210F34] to-[#170D25] backdrop-blur-lg mt-[30rem]">
          <div className="flex justify-end">
            <i
              className="ri-close-fill text-3xl cursor-pointer hover:scale-105"
              onClick={onClose}
            ></i>
          </div>
          <div>
            <div className="flex justify-between p-2 px-5 ">
              <p>Withdrawal Amount</p>
              <p className="bg-slate-800 p-1 px-2 rounded-lg">
                Available Balance: {balance} $
              </p>
            </div>
            <div className="flex justify-between gap-[2vw] sm:gap-5 border border-slate-600 rounded-2xl p-5 sm:p-14">
              <img src={dollar} alt="Dollar" className="w-10 sm:w-16"/>
              <input
                placeholder="Minimum 20 $"
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent outline-none text-2xl sm:text-4xl font-light w-full text-center"
              ></input>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Withdrawal Address</p>
            <input
              placeholder="Long press to paste"
              type="text"
              value={withdrawalAddress}
              onChange={(e) => setWithdrawalAddress(e.target.value)}
              className="p-2 px-3 rounded-xl bg-transparent border border-slate-600 w-full outline-none"
            ></input>
          </div>

          <div className="flex flex-col gap-2">
            <p>Withdrawal Address</p>
            <input
              placeholder="Long press to paste"
              type="text"
              value={withdrawalAddress}
              onChange={(e) => setWithdrawalAddress(e.target.value)}
              className="p-2 px-3 rounded-xl bg-transparent border border-slate-600 w-full outline-none"
            ></input>
          </div>

          <div className="flex flex-col gap-3 font-200 bg-gradient-to-l from-[#21102E] to-[#2A163A] bg-opacity-70 p-10 px-5 rounded-xl">
            <div className="flex justify-between">
              <p>USD</p>
              <p>{amount}</p>
            </div>
            <div className="flex justify-between">
              <p>Withdrawal Transfer fees</p>
              <p>0.0005 BTC</p>
            </div>

            <div className="w-full h-[1px] bg-opacity-45 bg-white"></div>

            <div className="flex justify-between">
              <p>Total Withdrawal Amount</p>
              <p>{amount - 0.0005} BTC</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className={`p-2 px-14 sm:px-32 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
              onClick={handleWithdraw}
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? "Withdrawing..." : "Withdraw"}
            </button>
          </div>
        </div>
      </div>
      {showModal && <Modal message="Withdrawal Successful" />}
    </div>

    //   <div className="absolute right-0 top-[25rem]">
    //     <img src="/external/ellipse32356-aujk-700w.png" alt="ellipse" />
    //   </div>
    //   <div className="absolute left-[-30%] w-[80%] top-[5rem]">
    //     <img src={ellipse} alt="ellipse" />
    //   </div>

    //   {showModal && <Modal message="Withdrawal Successful" />}
    // </div>
  );
};

export default Withdraw;
