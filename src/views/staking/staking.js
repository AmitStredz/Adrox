import React from "react";
import table from "./assets/table.png";
import ellipse from "./assets/ellipse.png";
import dollar from "./assets/dollar.png";
import star from "./assets/star.png";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Staking() {
  const [stakingData, setStakingData] = useState(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    weeks: 0,
    months: 0,
  });

  // useEffect(() => {
  //   if (Cookies.get("stakingData")) {
  //     setStakingData(JSON.parse(Cookies.get("stakingData")));
  //   }
  //   if (stakingData) {
  //     // setStakingData(data);
  //     console.log("Staking Data found");
  //   } else {
  //     console.log("Staking Data not found.");
  //   }
  // }, []);

  useEffect(() => {
    // const stakingData = JSON.parse(Cookies.get("stakingData"));
    if (Cookies.get("stakingData")) {
          setStakingData(JSON.parse(Cookies.get("stakingData")));
        }

    if (stakingData) {
      const interval = setInterval(() => {
        const endDate = new Date(stakingData.end_date);
        const now = new Date();
        const difference = endDate - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / (1000 * 60)) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
          const weeks = Math.floor(days / 7);
          const months = Math.floor(days / 30); // Approximation

          setTimeLeft({ days, hours, minutes, seconds, weeks, months });
        } else {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      console.log("StakingData not found");
      // alert("No stakingData found.");
    }
  }, [stakingData]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <div className="sm:p-20 flex flex-col items-center">
        <div className="flex items-center justify-center w-[80vw] sm:w-[70vw] md:w-4/5 p-5 sm:p-10 md:p-16 px-5 sm:px-8 md:px-12 rounded-xl bg-gradient-to-b from-[#22122F] to-[#10031B]">
          <div className="flex flex-col text-center gap-5">
            <div>
              <a className="bg-[#AB00FF] shadow-[2px 2px 4px rgb(171,0,255)] shadow rounded-lg p-1 px-6">
                Token Rate
              </a>
            </div>
            <div className="flex text-[20px] sm:text-[32px] gap-3 items-center">
              <img src={dollar} className="w-10 h-10"></img>
              <p>
                1 <span className="font-100">USD</span>
              </p>
              <p>=</p>
              <img src={star} className="w-10 h-10"></img>
              <p>
                20.83 <span className="font-100">ADX</span>
              </p>
            </div>
          </div>
        </div>
        {stakingData ? (
          <div className="flex max-lg:flex-col gap-5 items-center justify-between w-4/5 my-20">
            <div className="box1 flex flex-col gap-10 max-sm:w-[90vw]">
              <div className="flex flex-col gap-3 text-center rounded-xl p-5 bg-gradient-to-b from-[#22122F] to-[#10031B]">
                <div className="flex flex-col gap-5 text-center p-5 px-10">
                  <div>
                    <a className="text-[16px] bg-[#AB00FF] shadow-2xl rounded-lg p-1 px-4">
                      Today's Reward
                    </a>
                  </div>
                  <a className="font-800 text-[64px] border border-slate-500 rounded-xl">
                    0 ADX
                  </a>
                </div>
              </div>

              <div className="text-center font-700 text-[32px] flex flex-col gap-5">
                <div className="rounded-xl p-5 bg-gradient-to-b from-[#22122F] to-[#10031B]">
                  <p className="font-100 text-[16px]">Total Value Locked</p>
                  <p className="">
                    {(stakingData.staked_usdt * 20.83).toFixed(4)} ADX{" "}
                    <span className="font-100">
                      ({stakingData.staked_usdt} USD)
                    </span>
                  </p>
                </div>
                <div className="rounded-xl p-5 bg-gradient-to-b from-[#22122F] to-[#10031B]">
                  <p className="font-100 text-[16px]">Tokens Generated</p>
                  <p>150 ADX</p>
                </div>
                <div className="flex gap-3 items-center justify-evenly sm:justify-between">
                  <div className="rounded-xl p-5 sm:px-10 bg-gradient-to-b from-[#22122F] to-[#10031B]">
                    <p className="font-100 text-[16px]">APY</p>
                    <p>36.5%</p>
                  </div>
                  <div className="rounded-xl p-5 sm:px-10 bg-gradient-to-b from-[#22122F] to-[#10031B]">
                    <p className="font-100 text-[16px]">DPY</p>
                    <p>10.5%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box2 py-10 sm:py-20 max-sm:w-[90vw] w-[30rem] flex items-center justify-center rounded-xl bg-gradient-to-b from-[#22122F] to-[#10031B]">
              <div className="font-100 text-[20px] text-center flex flex-col gap-10 max-sm:w-[90vw] w-[2/3]">
                <div>
                  <a className="text-[16px] bg-[#AB00FF] shadow-2xl rounded-lg p-1 px-4">
                    Holding Period
                  </a>
                </div>
                <div className="flex gap-3 justify-center">
                  <div className="p-3 text-start bg-slate-400 bg-opacity-10 rounded-2xl">
                    <p>From</p>
                    <p>{formatDate(stakingData.start_date)}</p>
                    <p>{formatTime(stakingData.start_date)}</p>
                  </div>
                  <div className="p-3 text-start bg-slate-400 bg-opacity-10 rounded-2xl">
                    <p>To</p>
                    <p>{formatDate(stakingData.end_date)}</p>
                    <p>{formatTime(stakingData.end_date)}</p>
                  </div>
                </div>

                <div className="flex justify-evenly sm:justify-between">
                  <div className="border border-slate-500 p-1 px-4 rounded-xl ">
                    <p className="font-700 text-[32px]">{timeLeft.days}</p>
                    <p className="">Day</p>
                  </div>
                  <div className="border border-slate-500 p-1 px-4 rounded-xl">
                    <p className="font-700 text-[32px]">{timeLeft.hours}</p>
                    <p>Hour</p>
                  </div>
                  <div className="border border-slate-500 p-1 px-4 rounded-xl">
                    <p className="font-700 text-[32px]">{timeLeft.minutes}</p>
                    <p>Min</p>
                  </div>
                  <div className="border border-slate-500 p-1 px-4 rounded-xl">
                    <p className="font-700 text-[32px]">{timeLeft.seconds}</p>
                    <p>Sec</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <div className="border border-slate-500 p-1 px-4 rounded-xl">
                    <p className="font-700 text-[32px]">{timeLeft.weeks}</p>
                    <p>Weeks</p>
                  </div>
                  <div className="border border-slate-500 p-1 px-4 rounded-xl">
                    <p className="font-700 text-[32px]">{timeLeft.months}</p>
                    <p>Months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading Staking Data...</p>
        )}
      </div>

      {/* Page2 */}

      <div className="px-10">
        <div className="flex justify-between md:p-10 py-3 md:px-20 lg:px-28">
          <h1 className="font-700 text-[24px] sm:text-[40px]">
            Staking History
          </h1>
          <div className="flex border items-center rounded-3xl border-slate-600 px-3 sm:px-5 gap-1 sm:gap-2">
            <i className="ri-calendar-2-line font-100"></i>
            <p className="text-[14px] sm:text-[20px] font-100">Date</p>
          </div>
        </div>

        {/* Table starts here */}
        {/* <div className="flex justify-around bg-[#1D1027] p-2">
            <p>Date</p>
            <p>Token</p>
            <p>Staking Size</p>
            <p>Token</p>
            <p>Daily Reward</p>
        </div>

        <div className="flex font-200 justify-between">
            <p>2024-5-31 21:30</p>
            <p>ADX</p>
            <p>150000 ADX</p>
            <p>100 USD</p>
            <p>10.5 ADX</p>
        </div> */}

        <div>
          <img src={table}></img>
        </div>
      </div>

      <div className="absolute right-[-40%] w-[80%] top-[50rem]">
        <img src={ellipse}></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src={ellipse}></img>
      </div>
    </div>
  );
}
