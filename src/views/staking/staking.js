import React from "react";
import table from "./assets/table.png";
import ellipse from "./assets/ellipse.png";
import dollar from "./assets/dollar.png";
import star from "./assets/star.png";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import styles from "./staking.module.css";
export default function Staking() {
  // const [stakingData, setStakingData] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  const [todayProfit, setTodayProfit] = useState("");
  const [apyValue, setApyValue] = useState("");
  const [dpyValue, setDpyValue] = useState("");

  const [data, setData] = useState();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    weeks: 0,
    months: 0,
  });

  // const dummyData = [
  //   {
  //     date: "2024-09-09",
  //     size: 15000,
  //     daily_profit_adrx: 187.5,
  //     daily_profit_usdt: 9.0,
  //   },
  // ];

  useEffect(() => {
    let interval;
    let tickingInterval;

    const updateStakingData = async () => {
      const userID = Cookies.get("user_id");
      if (userID) {
        try {
          const response = await fetch(
            `https://adrox-89b6c88377f5.herokuapp.com/api/staking/live-profit/${userID}`
          );
          console.log(response);

          const responseData = await response.json();
          console.log("responseData:", responseData);
          if (responseData?.error == "No active stake found for this user.") {
            console.log("no data...");

            setData("No active stake found for this user.");
            return;
          } else {
            setData(responseData);
          }

          const {
            days_completed,
            hours_completed,
            minutes_completed,
            seconds_completed_loop,
            daily_profit_history,
            APY,
            DPY,
          } = responseData;

          setTimeLeft((prev) => ({
            ...prev,
            days: days_completed || 0,
            hours: hours_completed || 0,
            minutes: minutes_completed || 0,
            seconds: seconds_completed_loop || 0,

            // You can compute the seconds dynamically if needed, or set a default
          }));
          setHistoryData(daily_profit_history);
          setApyValue(APY || 0);
          setDpyValue(DPY || 0);
        } catch (error) {
          console.error("Error fetching referral tree:", error);
        }
      }
    };

    updateStakingData(); // Fetch the data immediately on mount
    interval = setInterval(updateStakingData, 10000); // Fetch the data every 10 seconds

    // Ticking interval to update seconds every second
    tickingInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        let { days, hours, minutes, seconds } = prevTimeLeft;

        // Increment seconds
        seconds += 1;

        if (seconds >= 60) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes >= 60) {
          minutes = 0;
          hours += 1;
        }
        if (hours >= 24) {
          hours = 0;
          days += 1;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => {
      clearInterval(interval);
      clearInterval(tickingInterval);
    };
  }, []);

  useEffect(() => {
    // console.log("history: ", historyData);

    const getTodaysDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const day = String(today.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    };

    const fetchDate = () => {
      let todaysDate = getTodaysDate();
      // console.log("date: ", todaysDate);

      historyData?.map((val) => {
        // console.log("ex: ", val.date_time.split(' ')[0]);
        if (val.date_time.split(" ")[0] == todaysDate) {
          setTodayProfit(val.daily_reward_adrx);
        }
      });
    };

    fetchDate();
  }, [historyData]);

  // useEffect(() => {
  //   // const stakingData = JSON.parse(Cookies.get("stakingData"));
  //   if (Cookies.get("stakingData")) {
  //     setStakingData(JSON.parse(Cookies.get("stakingData")));
  //   }

  //   if (stakingData) {
  //     const interval = setInterval(() => {
  //       const endDate = new Date(stakingData.end_date);
  //       const now = new Date();
  //       const difference = endDate - now;

  //       if (difference > 0) {
  //         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //         const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  //         const minutes = Math.floor((difference / (1000 * 60)) % 60);
  //         const seconds = Math.floor((difference / 1000) % 60);
  //         const weeks = Math.floor(days / 7);
  //         const months = Math.floor(days / 30); // Approximation

  //         setTimeLeft({ days, hours, minutes, seconds, weeks, months });
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   } else {
  //     console.log("StakingData not found");
  //     // alert("No stakingData found.");
  //   }
  // }, [stakingData]);

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  //   const day = String(date.getDate()).padStart(2, "0");
  //   return `${year}-${month}-${day}`;
  // };

  // const formatTime = (dateString) => {
  //   const date = new Date(dateString);
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   return `${hours}:${minutes}`;
  // };

  if (data == "No active stake found for this user.") {
    return (
      <div className="px-5 sm:px-40 sm:text-[30px] fon -mt-12">
        NO ACTIVE LENDS FOUND.
      </div>
    );
  }
  return (
    <div className=" overflow-hidden p-5 sm:p-10">
      <div className="sm:p-20 flex flex-col items-center z-50">
        <div className={`z-50 ${styles.dataStyles}`}>
          <div className={styles.firstRow}>
            <div className={styles.eachRow}>
              <Heading Name={"Live Profit"} />
              {data && data.live_profit ? (
                <span className={`${styles.heading} ${styles.highLighted}`}>
                  {Number(data.live_profit).toFixed(2) || 0}&nbsp;ADX
                </span>
              ) : (
                <span className={`${styles.heading} ${styles.highLighted}`}>
                  0&nbsp;ADX
                </span>
              )}
            </div>
            <div className={styles.eachRow}>
              <Heading Name={"Total Value Locked"} />
              <span className={`${styles.heading}`}>
                {data?.total_staked_adrx || 0}
              </span>
            </div>
            <div className={styles.eachRow}>
              <Heading Name={"Today's Profit"} />
              <span className={`${styles.heading}`}>{todayProfit || 0}</span>
            </div>
            <div className={styles.firstBottomRow}>
              <div className={styles.eachRow}>
                <Heading Name={"APY"} />
                <span className={`${styles.heading}`}>{apyValue}</span>
              </div>
              <div className={styles.eachRow}>
                <Heading Name={"DPY"} />
                <span className={`${styles.heading}`}>{dpyValue}</span>
              </div>
            </div>
          </div>

          <div className={styles.secondRow}>
            <div className={styles.eachRow}>
              <div
                style={{
                  display: "flex",
                  width: "fit-content",
                  padding: "0.25em 1em",
                  borderRadius: "0.5em",
                  backgroundColor: "#3B254A",
                  fontWeight: 300,
                  marginLeft: "1.5em",
                  alignSelf: "flex-start",
                  fontFamily: "Nunito Sans",
                  lineHeight: "1.5em",
                  letterSpacing: "-0.032px",
                }}
              >
                Token Data
              </div>{" "}
              <span className={`${styles.heading}`}>01 USDT = 20 ADX</span>
            </div>
            <div className={styles.eachRow}>
              <Heading Name={"Holding Period"} />
              <div className={styles.letterTimeCont}>
                <div className={styles.letterTime}>
                  <span>From</span>
                  {data && data.stake_start_time ? (
                    <span>
                      {new Date(data.stake_start_time)
                        .toLocaleString("en-GB", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false, // Ensures 24-hour format
                        })
                        .replace(/\//g, "-")
                        .replace(",", "")}
                    </span>
                  ) : (
                    <span>Loading...</span>
                  )}
                </div>
                <div className={styles.letterTime}>
                  <span>To</span>
                  {data && data.staking_end_time ? (
                    <span>
                      {new Date(data.staking_end_time)
                        .toLocaleString("en-GB", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false, // Ensures 24-hour format
                        })
                        .replace(/\//g, "-")
                        .replace(",", "")}
                    </span>
                  ) : (
                    <span>Loading...</span>
                  )}
                </div>
              </div>

              <div className={styles.timeCounterCont}>
                <div className={styles.timeCounter}>
                  <span className={styles.time}>{timeLeft.days}</span>
                  <span>Day{timeLeft.days >= 1 ? "s" : ""}</span>
                </div>
                <div className={styles.timeCounter}>
                  <span className={styles.time}>{timeLeft.hours}</span>
                  <span>Hour{timeLeft.hours >= 1 ? "s" : ""}</span>
                </div>
                <div className={styles.timeCounter}>
                  <span className={styles.time}>{timeLeft.minutes}</span>
                  <span>Min{timeLeft.minutes >= 1 ? "s" : ""}</span>
                </div>
                <div className={styles.timeCounter}>
                  <span className={styles.time}>{timeLeft.seconds}</span>
                  <span>Sec{timeLeft.seconds >= 1 ? "s" : ""}</span>
                </div>
                <div className={styles.timeCounter}>
                  <span className={styles.time}>
                    {timeLeft.weeks ? `${timeLeft.weeks}` : "0"}
                  </span>
                  <span>Week{timeLeft.weeks >= 1 ? "s" : ""}</span>
                </div>
                <div className={styles.timeCounter}>
                  <span className={styles.time}>
                    {timeLeft.months ? `${timeLeft.months}` : "0"}
                  </span>
                  <span>Month{timeLeft.months >= 1 ? "s" : ""}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[-30%] w-[80%] -top-40">
        <img src={ellipse}></img>
      </div>

      {/* Page2 */}

      <div className="mt-10">
        <div className="flex justify-between md:p-10 py-3 md:px-20 lg:px-10">
          <h1 className="font-700 text-[20px] sm:text-[40px]">
            Lending Daily Profit History
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
                <th className="py-2 px-2 sm:px-4 text-left">
                  Lending Size (ADX)
                </th>
                <th className="py-2 px-2 sm:px-4 text-left">
                  Lending Size (USDT)
                </th>
                <th className="py-2 px-2 sm:px-4 text-left">
                  Daily Reward (ADX)
                </th>
                <th className="py-2 px-2 sm:px-4 text-left">
                  Daily Reward (USDT)
                </th>
              </tr>
            </thead>
            {historyData.length > 0 ? (
              historyData?.map((item, index) => (
                <tbody className="text-[12px] sm:text-[16px] font-200">
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
              <div>No profit history found.</div>
            )}
          </table>
        </div>
      </div>

      <div className="absolute right-[-40%] w-[80%] top-[50rem]">
        <img src={ellipse}></img>
      </div>
    </div>
  );
}

const Heading = ({ Name }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "fit-content",
        padding: "0.25em 1em",
        borderRadius: "0.5em",
        backgroundColor: "#3B254A",
        fontWeight: 300,
        fontFamily: "Nunito Sans",
        lineHeight: "1.5em",
        letterSpacing: "-0.032px",
      }}
    >
      {Name}
    </div>
  );
};
