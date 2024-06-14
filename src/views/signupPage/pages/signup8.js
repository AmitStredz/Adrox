import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OtpIsValid from "./optIsValid";
import SignupAnimation from "./signupAnimation";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";

import InvalidOtp from "./invalidOtp";

import { CookieIcon, PhoneMissed } from "lucide-react";

const Signup8 = ({onNextStep}) => {
  const [phoneOtp, setPhoneOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [otpIsValid, setOtpIsValid] = useState(true);
  const [otpModal, setOtpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const phoneOtpRefs = useRef([]);
  const emailOtpRefs = useRef([]);

  useEffect(() => {
    // Focus the next OTP input field if the current one has been filled
    const focusNextInput = (currentIndex, refs) => {
      if (refs.current[currentIndex + 1]) {
        refs.current[currentIndex + 1].focus();
      }
    };

    // Focus the previous OTP input field if the current one is empty
    const focusPrevInput = (currentIndex, refs) => {
      if (refs.current[currentIndex - 1]) {
        refs.current[currentIndex - 1].focus();
      }
    };

    // Listen for changes in phoneOtp state and automatically move focus
    for (let i = 0; i < phoneOtp.length; i++) {
      if (phoneOtp[i] && !phoneOtpRefs.current[i + 1]) {
        focusNextInput(i, phoneOtpRefs);
        break;
      }
    }

    // Listen for changes in emailOtp state and automatically move focus
    for (let i = 0; i < emailOtp.length; i++) {
      if (emailOtp[i] && !emailOtpRefs.current[i + 1]) {
        focusNextInput(i, emailOtpRefs);
        break;
      }
    }
  }, [phoneOtp, emailOtp]);

  const handlePhoneOtpChange = (index, value) => {
    const updatedOtp = phoneOtp.split("");
    updatedOtp[index] = value;
    setPhoneOtp(updatedOtp.join(""));
    // Move cursor backward if deleting a digit
    if (value === "" && index > 0) {
      phoneOtpRefs.current[index - 1].focus();
    }
  };

  const handleEmailOtpChange = (index, value) => {
    const updatedOtp = emailOtp.split("");
    updatedOtp[index] = value;
    setEmailOtp(updatedOtp.join(""));

    // Move cursor backward if deleting a digit
    if (value === "" && index > 0) {
      emailOtpRefs.current[index - 1].focus();
    }
  };

  const userId = Cookies.get("user_id");

  const handleButtonClick = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);

    // const userId = localStorage.getItem("user_id");
    // const storedPhoneOtp = localStorage.getItem("mobile_otp");
    // const storedEmailOtp = localStorage.getItem("email_otp");
    // const storedPhoneOtp = Cookies.get("mobile_otp");
    // const storedEmailOtp = Cookies.get("email_otp");

    // console.log("storedPhoneOtp: ", storedPhoneOtp);
    // console.log("storedEmailOtp: ", storedEmailOtp);
    console.log("user_id: ", userId);
    console.log("PhoneOtp: ", phoneOtp);
    console.log("EmailOtp: ", emailOtp);

    try {
      const response = await axios.post(
        "https://adrox-89b6c88377f5.herokuapp.com/api/users/verify-otp/",
        {
          user_id: userId,
          mobile_otp: phoneOtp,
          email_otp: emailOtp,
        }
      );

      if (response.data.message === "OTP verification successful.") {
        setOtpIsValid(true);
        setOtpModal(true);
        setTimeout(() => {
          // navigate("/signup9");
          onNextStep();
        }, 2000);
      } else {
        setOtpIsValid(false);
        alert("Invalid OTPs.");
      }
    } catch (error) {
      setOtpIsValid(true);
      setOtpIsValid(false);
      console.error("Error:", error);
      // alert("Error: Invalid OTPs");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex bg-[#0f011a] h-full text-white font-nunito p-24 justify-evenly gap-10 relative overflow-hidden">
      <Helmet>
        <title>Signup - Adrox</title>
      </Helmet>
      <div className="w-[40%] items-center">
        <div className="text-center">
          <h1 className="font-700 text-[48px] text-[#C653FF]">
            Welcome Aboard
          </h1>
          <p className="font-300 text-[16px]">
            Just A Couple Of Clicks And We Start
          </p>
        </div>
        <div className="h-[80%]">
          <SignupAnimation></SignupAnimation>
        </div>
      </div>

      {/* Signup8 is this */}
      <div className="z-10">
        <div className="flex flex-col gap-10 ">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[30rem] p-20 rounded-2xl">
            <h1 className="font-700 text-[36px]">Create Account</h1>
            <input
              type="text"
              readOnly
              placeholder="Name"
              value={Cookies.get("full_name")}
              className="bg-transparent border-b-2 pb-2 outline-none cursor-not-allowed"
            ></input>

            <input
              type="text"
              readOnly
              value={Cookies.get("mobile_number")}
              placeholder="Mobile Number"
              className="bg-transparent border-b-2 pb-2 outline-none cursor-not-allowed"
            ></input>
            <div className="flex flex-col gap-2">
              <p className="text-[12px]">Enter the OTP sent to 9*******85</p>
              <div className="flex gap-5">
                <div className="flex gap-3">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      ref={(el) => (phoneOtpRefs.current[index] = el)}
                      className={`w-5 h-5 border bg-transparent p-1 ${
                        otpIsValid ? "" : "border-red-500"
                      }`}
                      maxLength="1"
                      value={phoneOtp[index] || ""}
                      onChange={(e) => {
                        handlePhoneOtpChange(index, e.target.value);
                        if (e.target.value !== "") {
                          if (index < 3) {
                            phoneOtpRefs.current[index + 1].focus();
                          } else {
                            phoneOtpRefs.current[index].blur();
                          }
                        }
                      }}
                    ></input>
                  ))}
                </div>
                <div
                  className={`text-red-500 text-[12px] ${
                    otpIsValid ? "hidden" : ""
                  }`}
                >
                  <p>OTP Verification Failed: Retry</p>
                </div>
              </div>
            </div>
            <input
              type="email"
              readOnly
              value={Cookies.get("email")}
              placeholder="Email Id"
              className="bg-transparent border-b-2 pb-2 outline-none cursor-not-allowed"
            ></input>
            <div className="flex flex-col gap-2">
              <p className="text-[12px]">
                Enter the OTP sent to a*******in@gmail.com
              </p>
              <div className="flex gap-5">
                <div className="flex gap-3">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      ref={(el) => (emailOtpRefs.current[index] = el)}
                      className={`w-5 h-5 border bg-transparent p-1 ${
                        otpIsValid ? "" : "border-red-500"
                      }`}
                      maxLength="1"
                      value={emailOtp[index] || ""}
                      onChange={(e) => {
                        handleEmailOtpChange(index, e.target.value);
                        if (e.target.value !== "") {
                          if (index < 3) {
                            emailOtpRefs.current[index + 1].focus();
                          } else {
                            emailOtpRefs.current[index].blur();
                          }
                        }
                      }}
                    ></input>
                  ))}
                </div>
                <div
                  className={`text-red-500 text-[12px] ${
                    otpIsValid ? "hidden" : ""
                  }`}
                >
                  <p>OTP Verification Failed: Retry</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleButtonClick}
                className={`p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer ${
                  isLoading
                    ? "bg-gradient-to-r from-gray-800 to-gray-500 cursor-not-allowed"
                    : ""
                }`}
              >
                {isLoading ? "Verifying" : "Verify"}
              </button>
            </div>
            <div className="text-[14px] text-center mt-[-20px]">
              <p>
                Didn't receive the OTP?{" "}
                <span className="underline font-300 cursor-pointer">
                  Resent OTP
                </span>
              </p>
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
      <div className="absolute top-0 left-0">{otpModal && <OtpIsValid />}</div>
      <div className="absolute top-0 left-0">{!otpIsValid && <InvalidOtp closeModal={() => setOtpIsValid(true)} />}</div>
    </div>
  );
};

export default Signup8;
