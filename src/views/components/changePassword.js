import React, { useState, useEffect, useId } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import "../signupPage/pages/animateLogo.css";
import SignupAnimation from "../signupPage/pages/signupAnimation";
import SuccessModal from "../signupPage/pages/SuccessModal";
import HomeHeader from "../homePage/pages/homeHeader";

const ChangePassword = ({ onNextStep }) => {
  const [userId, setUserId] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEqual, setIsEqual] = useState(true);
  const [errorText, setErrorText] = useState(false);

  const [passwordModal, setPasswordModal] = useState(false);
  const [successModalText, setSuccesModalText] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (newPassword == confirmPassword) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  });

  const handleButtonClick = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);
    setErrorText(false);
    // const userId = localStorage.getItem("user_id");
    // const userId = Cookies.get("user_id");

    const data = {
      user_id: userId,
      current_password: oldPassword,
      new_password: newPassword,
    };

    console.log("data: ", data);

    try {
      const response = await axios.post(
        "https://adrox-5ed452640f6d.herokuapp.com/api/users/change-password/",
        data
      );

      console.log("Response: ", response.data.message);
      if (
        response &&
        response.data.message === "Password changed successfully."
      ) {
        setSuccesModalText("Password set succeffully...");
        setPasswordModal(true);
        console.log("password set successfully.");

        setTimeout(() => {
          setPasswordModal(false);
          navigate("/homepage");
        }, 1000);
      } else {
        console.error(data.error); // Log the error message
      }
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response.data.error == "Current password is incorrect.") {
        setErrorText(true);
      } else {
        alert("Error: " + (error.response?.data || error.message));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0f011a] h-screen text-white font-nunito p-5 sm:p-14 lg:p-24 justify-evenly gap-10 relative overflow-hidden max-md:flex-col">
      <div className="top-0 fixed left-0 z-[100000]">
        <HomeHeader/>
      </div>
      <div className="relative flex justify-evenly">
        <div className="w-full md:w-[40%] items-center z-50 max-lg:flex justify-center">
          <SignupAnimation></SignupAnimation>
        </div>
        {/* Signup7 is this */}
        <div className="z-50 mt-10">
          <div className="flex flex-col gap-10 max-lg:max-w-[45vw] max-md:max-w-[100%] justify-center items-center z-[1000]">
            <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 max-lg:bg-slate-700 max-lg:bg-opacity-30 w-[30rem] max-w-[100%] p-10 md:p-16 rounded-2xl z-[1000]">
              <h1 className="font-700  text-[28px] sm:text-[36px]">
                Change Password
              </h1>

              <div className="flex flex-col">
                <input
                  type="text"
                  required
                  placeholder="Old Password"
                  className="bg-transparent outline-none border-b-2 pb-2"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                ></input>
                {errorText && (
                  <span className="text-red-500 text-[14px]">
                    invalid password
                  </span>
                )}
              </div>
              <input
                type="text"
                required
                placeholder="New Password"
                className="bg-transparent outline-none border-b-2 pb-2"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              ></input>
              <input
                type="text"
                required
                placeholder="Confirm Password"
                className="bg-transparent outline-none border-b-2 pb-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
              <div className="text-center">
                <button
                  disabled={!isEqual || isLoading}
                  onClick={handleButtonClick}
                  className={`p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] ${
                    !isEqual || isLoading
                      ? "bg-gradient-to-  r from-gray-800 to-gray-500 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <span>{isLoading ? "Loading..." : "Reset Password"}</span>
                </button>
              </div>
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
      <div className="absolute top-0 left-0">
        {passwordModal && <SuccessModal text={successModalText} />}
      </div>
    </div>
  );
};

export default ChangePassword;
