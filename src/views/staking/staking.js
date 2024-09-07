import React from "react";
import table from "./assets/table.png";
import ellipse from "./assets/ellipse.png";
import dollar from "./assets/dollar.png";
import star from "./assets/star.png";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import styles from "./staking.module.css";
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
        <div className={`${styles.dataStyles}`}>
          <div className={styles.firstRow}>
            <div className={styles.eachRow}>
              <Heading Name={"Today's Reward"} />
              <span className={`${styles.heading} ${styles.highLighted}`}>
                800&nbsp;ADX
              </span>
            </div>
            <div className={styles.eachRow}>
              <Heading Name={"Total Value Locked"} />
              <span className={`${styles.heading}`}>150000 ADX (100 USD)</span>
            </div>
            <div className={styles.eachRow}>
              <Heading Name={"Tokens Genarted"} />
              <span className={`${styles.heading}`}>150 ADX</span>
            </div>
            <div className={styles.firstBottomRow}>
              <div className={styles.eachRow}>
                <Heading Name={"APY"} />
                <span className={`${styles.heading}`}>10.5%</span>
              </div>
              <div className={styles.eachRow}>
                <Heading Name={"DPY"} />
                <span className={`${styles.heading}`}>35.5%</span>
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
              <span className={`${styles.heading}`}>
                01&nbsp;&nbsp;USD&nbsp;&nbsp;=&nbsp;&nbsp;20&nbsp;&nbsp;ADX
              </span>
            </div>
            <div className={styles.eachRow}>
              <Heading Name={"Holding Period"} />
              <div className={styles.letterTimeCont}>
                <div className={styles.letterTime}>
                  <span>From</span>
                  <span>2024-5-31 21:30</span>
                </div>
                <div className={styles.letterTime}>
                  <span>To</span>
                  <span>2024-5-31 21:30</span>
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
                  <span className={styles.time}>{timeLeft.weeks}</span>
                  <span>Week{timeLeft.weeks >= 1 ? "s" : ""}</span>
                </div>
                <div className={styles.timeCounter}>
                  <span className={styles.time}>{timeLeft.months}</span>
                  <span>Month{timeLeft.months >= 1 ? "s" : ""}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page2 */}

      <div className="px-10">
        <div className="flex justify-between md:p-10 py-3 md:px-20 lg:px-28">
          <h1 className="font-700 text-[24px] sm:text-[40px]">
            Staking Profit History
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
