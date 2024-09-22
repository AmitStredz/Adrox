import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import table3 from "./assets/table3.png";
import swap from "./assets/swap.png";
import ellipse from "./assets/ellipse.png";
import withdrawImg from "./assets/withdraw.png";

import WithdrawModal from "./withdraw";
import SwapModal from "./swap";

export default function ProfitWallet() {
  const [isSwapModal, setIsSwapModal] = useState(false);
  const [isWithdrawModal, setIsWithdrawModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [holdings, setHoldings] = useState(null); //balance
  const [swappedUsdt, setSwappedUsdt] = useState(0); //balance
  const [swapHistory, setSwapHistory] = useState([]); //balance

  // useEffect(() => {
  //   const userId = Cookies.get("user_id");

  //   if (userId) {
  //     fetch(
  //       `https://adrox-89b6c88377f5.herokuapp.com/api/wallet/profit-wallet/balance/${userId}/`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setHoldings(data?.profit_wallet_balance); // Adjust the property to match your API response
  //         console.log("response: ", data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching holdings data:", error);
  //       });
  //   } else {
  //     console.log("UserId not found...");
  //   }
  // }, []);

  const userId = Cookies.get("user_id");

  const fetchProfitWalletDetails = () => {
    // if (isLoading) return;
    // setIsLoading(true);
    if (userId) {
      fetch(
        `https://adrox-89b6c88377f5.herokuapp.com/api/wallet/profit-wallet/details/${userId}/`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data?.detail == "Not found.") {
            console.log("Profit Wallet data not found...");
            setHoldings(0);
            setSwappedUsdt(0);
            // setIsLoading(false);
            return;
          }
          setHoldings(data?.unswapped_adrx);
          setSwappedUsdt(data?.swapped_usdt);
          console.log("response: ", data);
          // setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching holdings data:", error);
          // setIsLoading(false);
        });
    } else {
      console.log("UserId not found...");
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    let interval;
    fetchProfitWalletDetails();
    interval = setInterval(fetchProfitWalletDetails, 1000);
    fetchSwapHistory();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleWithdrawalClose = () => {
    fetchProfitWalletDetails();
    fetchSwapHistory();
    setIsWithdrawModal(false);
  };
  const handleSwapClose = () => {
    fetchProfitWalletDetails();
    fetchSwapHistory();
    setIsSwapModal(false);
  };

  useEffect(() => {
    if (swappedUsdt == "0E-8") {
      setSwappedUsdt(0);
    }
  }, [swappedUsdt]);

  const fetchSwapHistory = () => {
    if (isLoading) return;
    setIsLoading(true);
    if (userId) {
      fetch(
        `https://adrox-89b6c88377f5.herokuapp.com/api/staking/profit-wallet/swapping-history-datetime/${userId}/`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Swap History response: ", data);
          setHoldings(data?.swapping_history || []);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching holdings data:", error);
          setIsLoading(false);
        });
    } else {
      console.log("UserId not found...");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-10 max-sm:flex-col sm:items-center p-5 sm:px-10 lg:px-40 xl:px-52  mt-20 bg-slate-500 bg-opacity-10 rounded-3xl border border-slate-600 z-50">
        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center sm:items-center w-full">
          <div className="flex flex-col max-sm:items-center gap-5 z-50">
            <div>
              <a className="p-2 px-6 bg-slate-400 bg-opacity-15 rounded-xl">
                Holdings
              </a>
            </div>
            <div className="flex justify-center">
              <p className="font-800 text-[20px] sm:text-[30px] md:text-[52px]">
                {/* {isLoading
                  ? "Loading..."
                  : `${
                      holdings > 0 ? parseFloat(holdings).toFixed(3) : "0.00"
                    } USDT`} */}
                    {`${
                      holdings > 0 ? parseFloat(holdings).toFixed(3) : "0.00"
                    } USDT`}
              </p>
            </div>
          </div>
          <div className="flex items-end justify-end lg:justify-end h-full z-50">
            <div
              className="flex gap-2 p-1 sm:p-2 px-5 sm:px-12 items-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
              onClick={() => setIsSwapModal(true)}
            >
              <img src={swap} className="w-4 h-5"></img>
              <p>Swap</p>
            </div>
            {/* <div
              className="flex border border-slate-500 cursor-pointer p-1 sm:p-2 px-5 sm:px-12 rounded-xl sm:rounded-2xl items-center"
              onClick={() => setIsWithdrawModal(true)}
            >
              <img src={withdrawImg} className="w-5" alt="Withdraw"></img>
              <p>Withdraw</p>
            </div> */}
          </div>
        </div>

        {swappedUsdt > 0 && (
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center sm:items-center w-full z-50">
            <div className="flex flex-col max-sm:items-center gap-5">
              <div>
                <a className="p-2 px-6 bg-slate-400 bg-opacity-15 rounded-xl">
                  Swapped USDT
                </a>
              </div>
              <div className="flex justify-center">
                <p className="font-800 text-[20px] sm:text-[30px] md:text-[52px]">
                  <span className="text-font-bold">
                    {swappedUsdt && !isNaN(swappedUsdt)
                      ? parseFloat(swappedUsdt).toFixed(3)
                      : 0}
                    USDT
                    <span className="text-slate-400 font-semibold sm:text-[40px]">
                      (
                      {swappedUsdt && !isNaN(swappedUsdt)
                        ? (parseFloat(swappedUsdt) * 0.05).toFixed(3)
                        : 0}
                      ADX )
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-end justify-end lg:justify-end h-full">
              <div
                className="flex border border-slate-500 cursor-pointer p-1 sm:p-2 px-5 sm:px-12 rounded-xl sm:rounded-2xl items-center"
                onClick={() => setIsWithdrawModal(true)}
              >
                <img src={withdrawImg} className="w-5" alt="Withdraw"></img>
                <p>Withdraw</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 z-50">
        <div className="flex justify-between md:p-10 py-3 md:px-20 lg:px-10 z-50">
          <h1 className="font-700 text-[20px] sm:text-[40px] z-50">
            Swap History
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

        <div className="w-full overflow-auto z-[10000000000000]">
          <table className="w-full z-[10000000000000]">
            <thead className="z-[10000000000000]">
              <tr className="bg-white bg-opacity-10 text-[12px] sm:text-[16px] z-[10000000000000]">
                <th className="py-2 px-2 sm:px-4 text-left z-[10000000000000]">
                  Date & Time
                </th>
                <th className="py-2 px-2 sm:px-4 text-left">Swap Size (ADX)</th>
                <th className="py-2 px-2 sm:px-4 text-left">
                  Swap Size (USDT)
                </th>
                <th className="py-2 px-2 sm:px-4 text-left">
                  Daily Reward (ADX)
                </th>
                <th className="py-2 px-2 sm:px-4 text-left">
                  Daily Reward (USDT)
                </th>
              </tr>
            </thead>
            {swapHistory.length > 0 ? (
              swapHistory?.map((item, index) => (
                <tbody className="text-[12px] sm:text-[16px] font-200 z-[1000000]">
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2 px-4">{item.date_time}</td>
                    <td className="py-2 px-4">{item.staking_size_adrx}</td>
                    <td className="py-2 px-4">{item.staking_size_usdt}</td>
                    <td className="py-2 px-4">{item.daily_reward_adrx}</td>
                    <td className="py-2 px-4">{item.daily_reward_usdt}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div>No swapping history found.</div>
            )}
          </table>
        </div>
      </div>

      {/* <div className="mt-40">
        <img src={table3}></img>
      </div> */}

      {isSwapModal && (
        <SwapModal onClose={() => handleSwapClose()} holdings={holdings} />
      )}
      {isWithdrawModal && (
        <WithdrawModal
          onClose={() => handleWithdrawalClose()}
          holdings={swappedUsdt}
        />
      )}

      <div className="absolute right-[-40%] w-[80%] top-[50rem]">
        <img src={ellipse}></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src={ellipse}></img>
      </div>
    </div>
  );
}
