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

export default function AdroxWallet() {
  const [holdings, setHoldings] = useState(null); //balance
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState("");

  useEffect(() => {
    const userId = Cookies.get("user_id");

    if (userId) {
      fetch(`https://adrox-89b6c88377f5.herokuapp.com/api/wallet/details/${userId}/`)
        .then((response) => response.json())
        .then((data) => {
          setHoldings(data?.wallet.balance); // Adjust the property to match your API response
          console.log("response: ", data);
          
        })
        .catch((error) => {
          console.error("Error fetching holdings data:", error);
        });
    }
  }, []);

  // useEffect(() => {
  //   // const storedHoldings = Cookies.get("balance");
  //   // console.log("Balance: ", storedHoldings);
  //   if (storedHoldings >= 0) {
  //     setHoldings(storedHoldings);
  //   } else {
  //     setHoldings(0); // Default value if no holdings are found in localStorage
  //   }
  // }, []);

  return (
    <div className="relative">
      <div className="flex max-md:flex-col max-md:gap-10 justify-evenly md:items-center p-8 sm:p-10 lg:p-14 mt-5 sm:mt-20 bg-slate-500 bg-opacity-10 rounded-3xl border border-slate-600">
        <div className="flex flex-col gap-5 md:gap-10">
          <div>
            <a className="p-2 px-6 bg-slate-400 bg-opacity-15 rounded-xl">
              Holdings
            </a>
          </div>
          <div>
            <p className="font-800 text-[40px] sm:text-[52px]">
              {holdings !== null
                ? `$${parseFloat(holdings).toFixed(2)} USD`
                : "Loading..."}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-5 z-50">
            <div
              className="flex p-1 sm:p-2 px-5 sm:px-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer items-center"
              onClick={() => setTransactionType("deposit")}
            >
              <img src={depositImg} className="w-5" alt="Deposit"></img>
              <p>Deposit</p>
            </div>
            <div
              className="flex border border-slate-500 cursor-pointer p-1 sm:p-2 px-5 sm:px-12 rounded-xl sm:rounded-2xl items-center"
              onClick={() => setTransactionType("withdraw")}
            >
              <img src={withdrawImg} className="w-5" alt="Withdraw"></img>
              <p>Withdraw</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:justify-center md:items-end h-full">
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
        <SwapModal onClose={() => setTransactionType("")} />
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
