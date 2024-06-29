// import React from "react";
// import { useState } from "react";
// import Background from "./assets/account-background.png";
// import { useNavigate } from "react-router-dom";

// const Signup7 = () => {

//   const history = useNavigate();
//   const handleButtonClick = () => {
//     history("/signup8");
//   };
//   return (
//     <div className="flex bg-[#0f011a] h-screen text-white font-nunito p-24 justify-evenly gap-10 relative overflow-hidden">
//       <div className="w-[40%] items-center">
//         <div className="text-center">
//           <h1 className="font-700 text-[48px] text-[#C653FF]">
//             Welcome Aboard
//           </h1>
//           <p className="font-300 text-[16px]">
//             Just A Couple Of Clicks And We Start
//           </p>
//         </div>
//         <div className="w-">
//           <img src={Background}></img>
//         </div>
//       </div>

//       {/* Signup7 is this */}
//       <div className="z-10">
//         <div className="flex flex-col gap-10 ">
//           <div className="flex items-center gap-1 justify-center">
//             <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
//             <div className="line w-10 h-[2px] bg-white"></div>
//             <div className="circle bg-white rounded-full w-3 h-3"></div>
//             <div className="line w-10 h-[2px] bg-white"></div>
//             <div className="circle bg-white rounded-full w-3 h-3"></div>
//             <div className="line w-10 h-[2px] bg-white"></div>
//             <div className="circle bg-white rounded-full w-3 h-3"></div>
//           </div>
//           <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[30rem] p-20 rounded-2xl">
//             <h1 className="font-700 text-[36px]">Create Account</h1>
//             <input
//               type="text"
//               required
//               placeholder="Name"
//               className="bg-transparent outline-none border-b-2 pb-2"
//             ></input>
//             <input
//               type="text"
//               required
//               placeholder="Mobile Number"
//               className="bg-transparent outline-none border-b-2 pb-2"
//             ></input>
//             <input
//               type="email"
//               required
//               placeholder="Email Id"
//               className="bg-transparent outline-none border-b-2 pb-2"
//             ></input>
//             <div className="text-center">
//               <button
//                 onClick={handleButtonClick}
//                 className="p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
//               >
//                 Send OTP
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute w-[90%] top-[-40%] right-[-40%] ">
//         <img src="/ellipse.png" alt="hello"></img>
//       </div>
//       <div className="absolute w-[90%] bottom-[-50%] left-[-40%] ">
//         <img src="/ellipse.png" alt="hello"></img>
//       </div>

//     </div>
//   );
// };

// export default Signup7;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./animateLogo.css";
import Cookies from "js-cookie";

import Background from "../assets/account-background.png";
import statAnimation from "../assets/starAnimation.png";

import SignupAnimation from "./signupAnimation";

const Signup7 = ({ onNextStep }) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validateForm = () => {
      const phoneRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isNameValid = fullName.trim() !== "";

      setIsFormValid(
        phoneRegex.test(mobileNumber) && emailRegex.test(email) && isNameValid
      );
    };

    validateForm();
  }, [mobileNumber, email, fullName]);

  const handleButtonClick = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);

    // const userId = localStorage.getItem("user_id");
    const userId = Cookies.get("user_id");

    const data = {
      full_name: fullName,
      mobile_number: mobileNumber,
      email: email,
      user_id: userId,
    };

    console.log("user_id: ", userId);

    try {
      const response = await axios.post(
        "https://adrox-89b6c88377f5.herokuapp.com/api/users/store-profile/",
        data
      );
      // localStorage.setItem("mobile_otp", response.data.mobile_otp);
      // localStorage.setItem("email_otp", response.data.email_otp);
      // localStorage.setItem("full_name", fullName);
      // localStorage.setItem("mobile_number", mobileNumber);
      // localStorage.setItem("email", email);
      Cookies.set("full_name", fullName, { expires: new Date("2050-01-01") });
      Cookies.set("mobile_number", mobileNumber, {
        expires: new Date("2050-01-01"),
      });
      Cookies.set("email", email, { expires: new Date("2050-01-01") });
      Cookies.set("referral_id", response.data.referral_id, {
        expires: new Date("2050-01-01"),
      });
      Cookies.set("wallet_id", response.data.wallet_id);
      Cookies.set("balance", 0);
      // localStorage.setItem("referral_id", response.data.referral_id);
      // localStorage.setItem("wallet_id", response.data.wallet_id);
      // localStorage.setItem("balance", 0);

      // Cookies.set("mobile_otp: ", response.data.mobile_otp, { secure: true, sameSite: 'Strict' });
      // Cookies.set("email_otp: ", response.data.email_otp, { secure: true, sameSite: 'Strict' });
      console.log("mobile_otp: ", response.data.mobile_otp);
      console.log("email_otp: ", response.data.email_otp);
      // alert(JSON.stringify(response.data));

      // navigate("/signup8");
      onNextStep();
    } catch (error) {
      console.error("There was an error!", error);
      alert("Error: " + (error.response?.data || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex   bg-[#0f011a] h-screen text-white font-nunito p-5 sm:p-14 lg:p-24 justify-evenly gap-10 relative overflow-hidden max-md:flex-col">
     
      <div className="w-full md:w-[40%] items-center z-50 max-lg:flex justify-center">
        <div className="text-center z-50 max-lg:-left-40">
          <h1 className="font-700 text-[48px] text-[#C653FF] max-sm:leading-11">
            Welcome Aboard
          </h1>
          <p className="font-300 text-[16px]">
            Just A Couple Of Clicks And We Start
          </p>
        </div>
        <div>
        </div>
          <SignupAnimation></SignupAnimation>
      </div>

      {/* Signup7 is this */}
      <div className="z-50">
        <div className="flex flex-col gap-10 max-lg:max-w-[45vw] max-md:max-w-[100%] justify-center items-center">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 max-lg:bg-slate-700 max-lg:bg-opacity-30 w-[30rem] max-w-[100%] p-10 md:p-20 rounded-2xl">
            <h1 className="font-700  text-[28px] sm:text-[36px]">
              Create Account
            </h1>
            <input
              type="text"
              required
              placeholder="Name"
              className="bg-transparent outline-none border-b-2 pb-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <input
              type="text"
              required
              placeholder="Mobile Number"
              className="bg-transparent outline-none border-b-2 pb-2"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></input>
            <input
              type="email"
              required
              placeholder="Email Id"
              className="bg-transparent outline-none border-b-2 pb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="text-center">
              <button
                disabled={!isFormValid || isLoading}
                onClick={handleButtonClick}
                className={`p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] ${
                  !isFormValid || isLoading
                    ? "bg-gradient-to-  r from-gray-800 to-gray-500 cursor-not-allowed"
                    : ""
                }`}
              >
                <span>{isLoading ? "Sending OTP..." : "Send OTP"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[90%] top-[-40%] right-[-40%] z-10">
        <img src="/ellipse.png" alt="hello"></img>
      </div>
      <div className="absolute w-[80%] bottom-[-50%] left-[-40%] z-10 ">
        <img src="/ellipse.png" alt="hello"></img>
      </div>

      {/* <div className="back absolute left-0 w-[100%] h-[10%] top-0 ">
        <img src={statAnimation}></img>
      </div> */}
    </div>
  );
};

export default Signup7;
