import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import stroke from "./assets/strokeEffect.png";
import ellipse from "./assets/ellipse.png";
import dollar from "./assets/dollarBlue.png";
import Modal from "./sucessModal";

export default function Deposit() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(""); // State for deposit amount
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const storedWalletId = localStorage.getItem("wallet_id");
  //   if (storedWalletId) {
  //     setWalletId(storedWalletId);
  //   }
  // }, []);

  const WalletId = localStorage.getItem("wallet_id");
  console.log("WalletId: ", WalletId);

  const handleDeposit = async () => {
    setIsLoading(true);

    if (amount < 20) {
      alert("Minimum Deposit Amount: 20$");
      setIsLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "https://adrox-89b6c88377f5.herokuapp.com/api/wallet/deposit/",
        {
          wallet_id: WalletId,
          amount: amount,
        }
      );

      localStorage.setItem("balance", response.data.balance);

      if (response.status === 200) {
        setShowModal(true);
        setTimeout(() => {
          navigate("/wallet");
        }, 2000);
      } else {
        alert("No response");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0F011A] h-screen font-nunito text-slate-300 overflow-hidden flex items-center justify-center relative">
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-10 my-20 bg-slate-600 bg-opacity-15 p-14 rounded-3xl w-5/12 z-50">
          <div className="flex justify-end">
            <i
              className="ri-close-fill text-3xl cursor-pointer hover:scale-105"
              onClick={() => navigate("/wallet")}
            ></i>
          </div>
          <div>
            <div className="flex justify-between p-2 px-5 ">
              <p>Deposit Amount</p>
            </div>
            <div className="flex justify-between gap-5 border border-slate-600 rounded-2xl p-14">
              <img src={dollar}></img>
              <input
                placeholder="Minimum 20 $"
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent outline- text-4xl font-light w-full text-center outline-none"
              ></input>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className={`p-2 px-32 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
              onClick={handleDeposit}
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? "Depositing..." : "Deposit"}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[25rem]">
        <img src="/external/ellipse32356-aujk-700w.png" alt="ellipse" />
      </div>
      <div className="absolute left-[-30%] w-[80%] top-[5rem]">
        <img src={ellipse} alt="ellipse" />
      </div>

      {showModal && <Modal message="Deposit Successful" />}
    </div>
  );
}
