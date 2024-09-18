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

  const userId = Cookies.get("user_id");
  const fetchAdroxWalletDetails = () => {
    if (userId) {
      fetch(
        `https://adrox-89b6c88377f5.herokuapp.com/api/wallet/details/${userId}/`
      )
        .then((response) => response.json())
        .then((data) => {
          setHoldings(data?.wallet.balance); // Adjust the property to match your API response
          console.log("response: ", data);
        })
        .catch((error) => {
          console.error("Error fetching holdings data:", error);
        });
    }
  };
  useEffect(() => {
    fetchAdroxWalletDetails();
  }, []);

  const handledepositClose = () => {
    fetchAdroxWalletDetails();
    setTransactionType("");
  };

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
      <div className="flex max-md:flex-col max-md:gap-10 justify-evenly md:items-center p-5 sm:p-10 lg:p-14 mt-5 sm:mt-20 bg-slate-500 bg-opacity-10 rounded-3xl border border-slate-600">
        <div className="flex flex-col sm:flex-row justify-evenly w-full gap-5 md:gap-10">
          <div className="flex flex-col gap-3 z-50">
            <div>
              <a className="p-2 px-6 bg-slate-400 bg-opacity-15 rounded-xl">
                Holdings
              </a>
            </div>
            <div>
              <p className="font-800 text-[40px] sm:text-[52px]">
                {holdings !== null
                  ? `$${parseFloat(holdings).toFixed(2)} USDT`
                  : "Loading..."}
              </p>
            </div>
          </div>
          <div className="items-center flex sm:gap-5 z-50">
            <span
              className="flex p-1 sm:p-2 px-5 sm:px-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer items-center justify-center"
              onClick={() => setTransactionType("deposit")}
            >
              <img src={depositImg} className="w-5" alt="Deposit"></img>
              <p>Deposit</p>
            </span>
            {/* <div
              className="flex border border-slate-500 cursor-pointer p-1 sm:p-2 px-5 sm:px-12 rounded-xl sm:rounded-2xl items-center"
              onClick={() => setTransactionType("withdraw")}
            >
              <img src={withdrawImg} className="w-5" alt="Withdraw"></img>
              <p>Withdraw</p>
            </div> */}
          </div>
        </div>
        {/* <div className="flex flex-col md:justify-center md:items-end h-full">
          <div className="flex gap-10">
            <div
              className="flex gap-2 p-2 px-12 items-center rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer z-50"
              onClick={() => setTransactionType("swap")}
            >
              <img src={swap} className="w-4 h-5" alt="Swap"></img>
              <p>Swap</p>
            </div>
          </div>
        </div> */}
      </div>

      <div className="mt-10 z-50">
        <div className="flex justify-between md:p-10 py-3 md:px-20 lg:px-10">
          <h1 className="font-700 text-[20px] sm:text-[40px] z-50">
            Transaction History
          </h1>
          {/* <div className="flex items-center">
            <div className="flex border items-center rounded-3xl border-slate-600 px-3 sm:px-5 gap-1 sm:gap-2">
              <i className="ri-calendar-2-line font-100"></i>
              <p className="text-[14px] sm:text-[20px] font-100">Date</p>
            </div>
          </div> */}
        </div>

        {/* <div>
          <img src={table}></img>
        </div> */}

        <div className="w-full overflow-auto">
          <table className="w-full">
            <thead className="">
              <tr className="bg-white bg-opacity-10 text-[12px] sm:text-[16px]">
                <th className="py-2 px-2 sm:px-4 text-left">Date & Time</th>
                <th className="py-2 px-2 sm:px-4 text-left">Crypto</th>
                <th className="py-2 px-2 sm:px-4 text-left">Amount</th>
                <th className="py-2 px-2 sm:px-4 text-left">Type</th>
                {/* <th className="py-2 px-2 sm:px-4 text-left">
                  Daily Reward (USDT)
                </th> */}
              </tr>
            </thead>
            <tbody className="text-[12px] sm:text-[16px] font-200">
              {/* {historyData?.map((item, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-2 px-4">{item.date_time}</td>
                  <td className="py-2 px-4">{item.staking_size_adrx}</td>
                  <td className="py-2 px-4">{item.staking_size_usdt}</td>
                  <td className="py-2 px-4">{item.daily_reward_adrx}</td>
                  <td className="py-2 px-4">{item.daily_reward_usdt}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="mt-40">
        <img src={table2} alt="Table"></img>
      </div> */}

      {transactionType == "withdraw" ? (
        <WithdrawModal onClose={() => setTransactionType("")} />
      ) : (
        <></>
      )}
      {transactionType == "deposit" ? (
        <DepositModal onClose={() => handledepositClose()} />
      ) : (
        <></>
      )}
      {transactionType == "swap" ? (
        <SwapModal onClose={() => setTransactionType("")} />
      ) : (
        <></>
      )}

      <div className="absolute right-[-40%] w-[80%] top-[50rem]">
        <img src={ellipse} alt="Ellipse"></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src={ellipse} alt="Ellipse"></img>
      </div>
    </div>
  );
}
