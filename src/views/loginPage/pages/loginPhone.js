import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import InvalidPopup from "./incorrectPhraseModal"; // popup to show invalid input
import ValidPopup from "./correctPhraseModal"; // popup to show success

export default function LoginEmail() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showInvalidPopup, setShowInvalidPopup] = useState(false);
  const [showValidPopup, setShowValidPopup] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const phoneRegex = /^[0-9]{10}$/;
      setIsFormValid(phoneRegex.test(phoneNo));
    };

    validateForm();
  }, [phoneNo]);

  const handlePhoneNoChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 10) {
      setPhoneNo(value);
    }
  };

  const handleLoginClick = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError("");

    if (!isFormValid || !password) {
      setError("Enter a valid phone number and password");
      setIsLoading(false);
      return;
    }

    const data = {
      email_or_phone: phoneNo,
      password: password,
    };
    console.log("data: ", data);

    try {
      const response = await fetch(
        "https://adrox-89b6c88377f5.herokuapp.com/api/users/login-with-credentials/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        Cookies.set("user_id", responseData.user_id);
        Cookies.set("full_name", responseData.full_name);
        Cookies.set("email", responseData.email);
        Cookies.set("mobile_number", responseData.mobile_number);
        Cookies.set("referral_id", responseData.referral_id);
        // console.log("Login responseData: ", responseData);

        setShowValidPopup(true);
        setTimeout(() => {
          navigate("/homePage");
        }, 2000);
      } else {
        setShowInvalidPopup(true);
      }
    } catch (error) {
      setShowInvalidPopup(true);
      console.error("Error during login: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col w-full gap-10 py-5 sm:p-10 z-50 my-10">
      <div className="w-full">
        <input
          type="text"
          required
          value={phoneNo}
          onChange={handlePhoneNoChange}
          placeholder="Enter Phone Number Here"
          className="bg-transparent border-b-2 pb-2 outline-none w-full"
          // onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="text-red-500 text-[14px]">{error}</p>
      </div>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password Here"
        className="bg-transparent border-b-2 pb-2 outline-none"
        //   onChange={(e) => setEmail(e.target.value)}
      ></input>
      <div className="text-center   z-50">
        <button
          className="p-2 px-20 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
          onClick={handleLoginClick}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>

      {showInvalidPopup && (
        <InvalidPopup
          text="invalid credentials. please try again."
          closeModal={() => setShowInvalidPopup(false)}
        />
      )}
      {showValidPopup && <ValidPopup text="PhoneNo successfully verified..." />}
    </div>
  );
}
