import React, { useEffect } from "react";
import { useState } from "react";
import Background from "./assets/account-background.png";
import { useNavigate } from "react-router-dom";
import SetPassword from "./setPassword";

import globe1 from "./assets/globe1.png";
import globe2 from "./assets/globe2.png";
import starGlow from "./assets/Glowstar.png";
import circumcircle1 from "./assets/circumcircle.png";
import circle from "./assets/circle.png";

const Signup9 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [isEqual, setIsEqual] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (password == confirmPassword) {
      setIsEqual(true);
      setIsLoading(false);
    } else {
      setIsEqual(false);
      setIsLoading(true);
    }
  });

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/signup10"); // Replace "/other-component" with the path of the component you want to redirect to
  };
  

  const handleButtonClick = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please enter matching passwords.");
      return;
    } else if (password == "" || confirmPassword == "") {
      alert("Enter valid Password");
      return;
    }

    const userId = localStorage.getItem("user_id"); // Retrieve user_id from localStorage

    // Mock API call to set password
    try {
      const response = await fetch("your_api_endpoint_here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          password: password,
          referral_id: referral,
        }),
      });

      const data = await response.json();

      // Check if API call was successful
      if (response.ok) {
        // Redirect to the next page
        showModal(true);
        // navigate("/signup10");
      } else {
        // Handle error response from the API
        console.error(data.error); // Log the error message
        alert("Failed to set password. Please try again."); // Show an alert to the user
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again."); // Show an alert to the user
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  return (
    <div className="flex bg-[#0f011a] h-full text-white font-nunito p-24 justify-evenly gap-10 relative overflow-hidden">
      <div className="w-[40%] items-center">
        <div className="text-center">
          <h1 className="font-700 text-[48px] text-[#C653FF]">
            Welcome Aboard
          </h1>
          <p className="font-300 text-[16px]">
            Just A Couple Of Clicks And We Start
          </p>
        </div>

        <div className="relative">
          <img className="absolute " src={circle}></img>
          <img className="absolute top-20 left-20" src={starGlow}></img>
          <img
            className="absolute -top-4 -left-6 rotating-circle-clock opacity-30"
            src={circumcircle1}
          ></img>
          <img
            className="absolute -left-5 -top-6 rotating-image-clock"
            src={globe1}
          ></img>
          <img
            className="absolute -left-5 -top-6 rotating-image-anticlock"
            src={globe2}
          ></img>
        </div>
      </div>

      {/* Signup9 is this */}
      <div className="z-10">
        <div className="flex flex-col gap-10 ">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[30rem] p-20 rounded-2xl">
            <h1 className="font-700 text-[36px]">Create Account</h1>
            <input
              type="text"
              value={localStorage.getItem("full_name")}
              placeholder="Name"
              readOnly
              className="bg-transparent border-b-2 pb-2 outline-none"
            ></input>
            <div className=" flex justify-between border-b-2 pb-2 ">
              <input
                type="text"
                value={localStorage.getItem("mobile_number")}
                placeholder="Mobile Number"
                readOnly
                className="bg-transparent outline-none"
              ></input>
              <i className="ri-checkbox-circle-line text-green-500"></i>
            </div>
            <div className=" flex justify-between border-b-2 pb-2">
              <input
                type="email"
                value={localStorage.getItem("email")}
                placeholder="Email Id"
                readOnly
                className="bg-transparent outline-none"
              ></input>
              <i className="ri-checkbox-circle-line text-green-500"></i>
            </div>
            <input
              type="password"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-b-2 pb-2 outline-none"
            ></input>
            <div className="">
              <input
                type="password"
                required
                value={confirmPassword}
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent border-b-2 pb-2 outline-none w-full"
              ></input>
              <p
                className={`text-red-500 text-[14px] ${
                  isEqual ? "hidden" : ""
                }`}
              >
                Password does not match
              </p>
            </div>
            <input
              type="text"
              required
              value={referral}
              placeholder="Referral Code"
              onChange={(e) => setReferral(e.target.value)}
              className="bg-transparent border-b-2 pb-2 outline-none"
            ></input>
            <div className="mt-[-30px]">
              <p className="text-[12px] font-300">
                If you don't have a referral code, please use the one below
              </p>
              <span className="text-[16px] font-500 text-[#C653FF]">
                {localStorage.getItem("referral_id")}
              </span>
            </div>

            <div className="text-center">
              <button
                onClick={handleButtonClick}
                className={`p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] ${
                  isLoading
                    ? "bg-gradient-to-r from-gray-800 to-gray-500 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[90%] top-[-40%] right-[-40%] ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
      <div className="absolute w-[90%] bottom-[-50%] left-[-40%] ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
      <div className="absolute top-0 left-0">
        {showModal && <SetPassword closeModal={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Signup9;
