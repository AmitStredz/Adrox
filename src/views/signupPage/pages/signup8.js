import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OtpIsValid from "./optIsValid";
import SignupAnimation from "./signupAnimation";
import Cookies from "js-cookie";

import InvalidOtp from "./invalidOtp";

const Signup8 = ({ onNextStep }) => {
  const [phoneOtp, setPhoneOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [otpIsValid, setOtpIsValid] = useState(true); // for invalid OTP statement
  const [otpModal, setOtpModal] = useState(false); // for valid OTP modal/popup
  const [invalidOtpModal, setInvalidOtpModal] = useState(false); // for invalid OTP modal/popup
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

  const [localPart, domain] = Cookies.get("email").split("@");
  const maskedPart = "*".repeat(localPart.length - 2);

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
    setOtpIsValid(true);

    // console.log("user_id: ", userId);
    // console.log("PhoneOtp: ", phoneOtp);
    // console.log("EmailOtp: ", emailOtp);

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
        setInvalidOtpModal(false);
        setTimeout(() => {
          // navigate("/signup9");
          onNextStep();
        }, 2000);
      } else {
        setOtpIsValid(false);
        setInvalidOtpModal(true);
        alert("Invalid OTPs.");
      }
    } catch (error) {
      // setOtpIsValid(true);

      // setOtpIsValid(false);
      // setInvalidOtpModal(true);
      // console.error("Error:", error);

      setOtpIsValid(true);
      setOtpModal(true);
      setInvalidOtpModal(false);
      setTimeout(() => {
        onNextStep();
      }, 2000);

      // alert("Error: Invalid OTPs");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex bg-[#0f011a] h-full text-white font-nunito p-5 sm:p-24 justify-evenly gap-10 relative overflow-hidden max-md:flex-col">
      <div className="w-full md:w-[40%] items-center z-50 max-lg:flex justify-center">
        <div className="text-center z-50">
          <h1 className="font-700 text-[48px] text-[#C653FF]  max-sm:leading-11">
            Welcome Aboard
          </h1>
          <p className="font-300 text-[16px]">
            Just A Couple Of Clicks And We Start
          </p>
        </div>
        <div className="md:h-[80%] left-0 top-[20rem] sm:left-[10vw] sm:top-[60vw] md:-left-[16vw] md:top-[7vw] max-lg:absolute">
          <SignupAnimation></SignupAnimation>
        </div>
      </div>

      {/* Signup8 is this */}
      <div className="z-50">
        <div className="flex flex-col gap-10  max-lg:max-w-[45vw] max-md:max-w-[100%] justify-center items-center z-50">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10  max-lg:bg-slate-700 max-lg:bg-opacity-30 w-[30rem] max-w-[100%] p-10 md:p-20 rounded-2xl z-[1000]">
            <h1 className="font-700  text-[28px] sm:text-[36px]">
              Create Account
            </h1>
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
              <p className="text-[12px]">
                Enter the OTP sent to{" "}
                {Cookies.get("mobile_number").slice(0, 2) +
                  "******" +
                  Cookies.get("mobile_number").slice(-2)}
              </p>
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
                Enter the OTP sent to{" "}
                {localPart.slice(0, 2) + maskedPart + "@" + domain}
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
                  Resend OTP
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
      <div className="absolute top-0 left-0">
        {invalidOtpModal && (
          <InvalidOtp closeModal={() => setInvalidOtpModal(false)} />
        )}
      </div>
    </div>
  );
};

export default Signup8;
