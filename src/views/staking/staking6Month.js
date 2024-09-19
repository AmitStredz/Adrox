import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stroke from "./assets/strokeEffect.png";
import ellipse from "./assets/ellipse.png";
import Cookies from "js-cookie";
import SuccessModal from "./sucessModal";

const Staking6Month = ({ onClose }) => {
  //   useEffect(() => {
  //     setInitialData();
  //   }, []);

  const [usdt, setUsdt] = useState(150); // Initial value of USDT
  const [adx, setAdx] = useState(150 * 20); // Initial value of ADX based on conversion ratio
  const [stakeDate, setStakeDate] = useState(new Date());
  const [rewardDate, setRewardDate] = useState(
    new Date(new Date().setMonth(new Date().getMonth() + 6))
  );

  const [successModal, setSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const currentStakeDate = new Date();
    const currentRewardDate = new Date(currentStakeDate);
    currentRewardDate.setMonth(currentStakeDate.getMonth() + 6); // Set reward collection date to one month later

    const initialData = {
      staked_usdt: "123",
      lock_in_period: 1,
      start_date: currentStakeDate.toISOString(),
      end_date: currentRewardDate.toISOString(),
    };

    Cookies.set("stakingData", JSON.stringify(initialData));

    const userId = Cookies.get("user_id"); // Retrieve user_id from Cookies

    if (!userId) {
      alert("User ID is not available. Please sign up or log in first.");
      return;
    }

    // const currentStakeDate = new Date();
    console.log("CurrentStakeDate: ", currentStakeDate);
    // const currentRewardDate = new Date(currentStakeDate);
    console.log("CurrentRewardDate: ", currentRewardDate);
    currentRewardDate.setMonth(currentStakeDate.getMonth() + 6); // Set reward collection date to one month later

    const data = {
      user_id: userId,
      staked_usdt: usdt.toFixed(2), // Ensure the value is formatted as a string with two decimals
      lock_in_period: 1,
    };

    try {
      console.log("Sending data to API:", data);
      const response = await axios.post(
        "https://adrox-89b6c88377f5.herokuapp.com/api/staking/create-stake/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Cookies.set("balance", Cookies.get("balance") - usdt);
      // Store the response data in Cookies
      Cookies.set(
        "stakingData",
        JSON.stringify({
          ...response.data,
          start_date: currentStakeDate,
          end_date: currentRewardDate,
        })
      );

      // alert(JSON.stringify(response.data));
      setStakeDate(currentStakeDate);
      setRewardDate(currentRewardDate);
      setSuccessModal(true);
      setTimeout(() => {
        navigate("/staking2"); // Navigate to staking2 on successful response
        setSuccessModal(false);
      }, 2000);
    } catch (error) {
      console.error("There was an error!", error);

      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Server Response:", error.response.data);
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Request:", error.request);
        alert("Error: No response from the server.");
      } else {
        // Something else happened
        console.error("Error Message:", error.message);
        alert("Error: " + error.message);
      }
    }
  };

  const handleUsdtChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value < 0) {
      setUsdt(0);
      setAdx(0); // Update ADX based on the conversion ratio
    } else {
      setUsdt(value);
      setAdx(value * 20 || 0); // Update ADX based on the conversion ratio
    }
  };

  const formatDateToIST = (date) => {
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  return (
    // <div className="bg-[#0F011A] w-screen h-screen font-nunito text-white overflow-x-hidden flex items-center justify-center relative">
    <div
      className="flex justify-center w-full h-full fixed backdrop-blur-xl z-[100]"
      data-aos="fade-in"
      style={{
        margin: "auto",
        bottom: "0",
        top: "0",
      }}
    >
      <div
        className="w-full h-full flex items-center justify-center overflow-auto"
        style={{ marginTop: "1em" }}
      >
        <div
          className="flex flex-col gap-5 sm:gap-10 mt-60 p-4 sm:p-14 rounded-3xl w-[95vw] sm:w-[40rem] z-50 bg-gradient-to-r from-[#210F34] to-[#170D25]"
          style={{
            marginTop: "auto",
          }}
        >
          <div className="flex justify-end">
            <i
              className="ri-close-fill text-3xl cursor-pointer hover:scale-105"
              onClick={onClose}
            ></i>
          </div>
          <div>
            <h1 className="text-[48px] font-700">LEND USDT</h1>
            <a className="text-[20px] font-300 bg-slate-600 bg-opacity-20 p-1 px-3 rounded-xl">
              6 Month Plan
            </a>
          </div>

          <div className="flex flex-col w-full gap-6">
            <div className="flex text-[24px] font-700 justify-between border border-slate-500 rounded-xl p-3 px-5">
              <input
                type="number"
                value={usdt}
                onChange={handleUsdtChange}
                placeholder="0"

                className="bg-transparent outline-none w-full text-left"
                style={{ appearance: "textfield" }}
              />
              <div className="flex items-center">
                <p className="font-400">USDT</p>
                <div className="ml-2 flex flex-col">
                  <button
                    onClick={() =>
                      handleUsdtChange({ target: { value: usdt + 1 } })
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      handleUsdtChange({ target: { value: usdt - 1 } })
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <i className="ri-arrow-down-line p-1 text-2xl rounded-full bg-[#C653FF]"></i>
            </div>

            <div className="flex text-[24px] font-700 justify-between border border-slate-500 rounded-xl p-3 px-5">
              <p>{adx.toFixed(2)}</p>
              <div className="flex items-center">
                <p className="font-400">ADX</p>
              </div>
            </div>
          </div>

          <div className="font-300 text-[16px] gap-3 flex flex-col">
            <div className="flex justify-between">
              <p>Conversion Ratio</p>
              <p>1 USDT : 20 ADX</p>
            </div>
            <div className="flex justify-between">
              <p>APY</p>
              <p>146%</p>
            </div>
            <div className="flex justify-between">
              <p>Projected Monthly Reward</p>
              {/* <p>{((usdt * 20 * 0.365) / 12).toFixed(2)} ADX</p> */}
              <p>0.4 * 30</p>

            </div>
          </div>

          <div className="font-300 text-[16px] gap-3 flex flex-col">
            <div>
              <p>Schedule Project Guideline</p>
            </div>
            <div>
              <img src={stroke} alt="stroke effect" />
            </div>
            <div className="flex justify-between">
              <p>Lend Date</p>
              <p>{formatDateToIST(stakeDate)}</p>
            </div>
            <div className="flex justify-between">
              <p>Reward Collection</p>
              <p>{formatDateToIST(rewardDate)}</p>
            </div>
          </div>

          <div className="text-center">
            <a
              className="p-2 px-32 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
              onClick={handleButtonClick}
            >
              Lend
            </a>
          </div>
        </div>
      </div>

      {successModal && <SuccessModal message="Staking Successfull" />}
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

export default Staking6Month;
