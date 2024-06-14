import React, { useState, useEffect } from "react";
import table2 from "./assets/table2.png";
import depositImg from "./assets/deposit.png";
import withdrawImg from "./assets/withdraw.png";
import ellipse from "./assets/ellipse.png";
import swap from "./assets/swap.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import DepositModal from "./deposit";
import WithdrawModal from "./withdraw";
import SwapModal from "./swap";
import Swap from "./swap";

export default function AdroxWallet() {
  const [holdings, setHoldings] = useState(null);
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState("");

  // useEffect(() => {
  //   // Replace this URL with the actual endpoint you are using
  //   fetch("https://api.example.com/holdings")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setHoldings(data.holdings); // Adjust the property to match your API response
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching holdings data:", error);
  //     });
  // }, []);

  useEffect(() => {
    const storedHoldings = Cookies.get("balance");
    console.log("Balance: ", storedHoldings);
    if (storedHoldings >= 0) {
      setHoldings(storedHoldings);
    } else {
      setHoldings(0); // Default value if no holdings are found in localStorage
    }
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-evenly items-center p-14 h-72 mt-20 bg-slate-500 bg-opacity-10 rounded-3xl border border-slate-600">
        <div className="flex flex-col gap-10">
          <div>
            <a className="p-2 px-6 bg-slate-400 bg-opacity-15 rounded-xl">
              Holdings
            </a>
          </div>
          <div>
            <p className="font-800 text-[52px]">
              {holdings !== null
                ? `$${parseFloat(holdings).toFixed(2)} USD`
                : "Loading..."}
            </p>
          </div>
          <div className="flex gap-5 z-50">
            <div
              className="flex p-2 px-12 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
              onClick={() => setTransactionType("deposit")}
            >
              <img src={depositImg} className="w-5" alt="Deposit"></img>
              <p>Deposit</p>
            </div>
            <div
              className="flex border border-slate-500 cursor-pointer p-2 px-12 rounded-2xl"
              onClick={() => setTransactionType("withdraw")}
            >
              <img src={withdrawImg} className="w-5" alt="Withdraw"></img>
              <p>Withdraw</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end h-full">
          <div className="flex gap-10">
            <div
              className="flex gap-2 p-2 px-12 items-center rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer z-50"
              onClick={() => setTransactionType("swap")}
            >
              <img src={swap} className="w-4 h-5" alt="Swap"></img>
              <p>Swap</p>
            </div>
          </div>
        </div>
      </div>


      {transactionType == "withdraw" ? (
        <WithdrawModal onClose={() => setTransactionType("")} />
      ) : (
        <></>
      )}
      {transactionType == "deposit" ? (
        <DepositModal onClose={() => setTransactionType("")} />
      ) : (
        <></>
      )}
      {transactionType == "swap" ? (
        <Swap onClose={() => setTransactionType("")} />
      ) : (
        <></>
      )}

      <div className="mt-40">
        <img src={table2} alt="Table"></img>
      </div>

      <div className="absolute right-[-40%] w-[80%] top-[50rem]">
        <img src={ellipse} alt="Ellipse"></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src={ellipse} alt="Ellipse"></img>
      </div>
      
    </div>
  );
}
