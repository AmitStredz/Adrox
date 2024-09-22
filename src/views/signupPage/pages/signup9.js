import React, { useEffect } from "react";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import SignupAnimation from "./signupAnimation";
import SuccessModal from "./SuccessModal";
import FailedModal from "./FailedModal";

const Signup9 = ({ onNextStep }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isEqual, setIsEqual] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [invalidReferral, setInvalidRefferal] = useState(false);
  const [errorText, setErrorText] = useState("");

  const [successModal, setSuccessModal] = useState(false);
  const [successModalText, setSuccesModalText] = useState("");
  const [failedModal, setFailedModal] = useState(false);
  const [failedModalText, setFailedModalText] = useState("");

  const [sponsorName, setSponsorName] = useState("");
  const [sponsorCode, setSponsorCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (password == confirmPassword) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  });

  useEffect(() => {
    const sponsor_name = Cookies.get("sponsor_name");
    const sponsor_code = Cookies.get("sponsor_code");
    if (sponsor_name && sponsor_code) {
      console.log("sponsor details fetched...");
      console.log("sponsor_code", sponsor_code);
      console.log("sponsor_name", sponsor_name);

      setSponsorCode(sponsor_code);
      setSponsorName(sponsor_name);
      setReferralCode(sponsor_code);
    } else {
      console.log("sponsor not available...");
    }
  }, []);

  const handleButtonClick = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);
    setInvalidRefferal(false);

    const userId = Cookies.get("user_id");

    if (!userId) {
      console.log("UserId not found...");
      setIsLoading(false);
      return;
    }
    if (password == "" || confirmPassword == "") {
      setFailedModalText("Enter valid password.");
      setFailedModal(true);
      setIsLoading(false);
      return;
    }
    if (password == confirmPassword) {
      try {
        const response = await fetch(
          "https://adrox-89b6c88377f5.herokuapp.com/api/users/set-password/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: userId,
              password: password,
            }),
          }
        );

        const data = await response.json();
        console.log("passwordResponse: ", data);
        if (response.ok && data.message === "Password set successfully.") {
          console.log("password set successfully.");

          // setTimeout(() => {
          //   // onNextStep();
          //   setSuccessModal(false);
          // }, 1000);
        } else {
          console.error(data.error);
          setFailedModalText("Failed to set password. Try again.");
          setFailedModal(true);

          // alert("Failed to set password. Please try again."); // Show an alert to the user
          // setInvalidRefferal(true);
        }
      } catch (error) {
        console.error("Error:", error);
        setFailedModalText("Something went wrong. Try again");
        setFailedModal(true);

        return;
      } finally {
        setIsLoading(false);
        // setInvalidRefferal(false);
      }
    } else if (password !== confirmPassword) {
      alert("Passwords do not match. Please enter matching passwords.");
      setIsLoading(false);
      return;
    }

    if (referralCode) {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://adrox-89b6c88377f5.herokuapp.com/referrals/add-referral/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sponsor_referral_id: referralCode,
              recruit_user_id: userId,
            }),
          }
        );

        console.log("response: ", response);

        const data = await response.json();

        if (response.ok) {
          setSuccesModalText("Password set Successfully.");
          setSuccessModal(true);
          setTimeout(() => {
            onNextStep();
          }, 2000);
          setInvalidRefferal(false);
        } else {
          console.error(data.error);
          setFailedModalText("Invalid referral Code.");
          setFailedModal(true);

          setInvalidRefferal(true);
        }
      } catch (error) {
        console.error("Error:", error);
        setFailedModalText("Invalid referral code. Try again.");
        setFailedModal(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      setInvalidRefferal(true);
      console.log("No referral Code found...");
    }

    // if (referral == Cookies.get("referral_id")) {
    //   setIsLoading(true);
    //   // Mock API call to set password
    //   try {
    //     const response = await fetch(
    //       "https://adrox-89b6c88377f5.herokuapp.com/api/users/set-password/",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           user_id: userId,
    //           password: password,
    //           referral_id: referral,
    //         }),
    //       }
    //     );

    //     const data = await response.json();
    //     console.log("response: ", response);

    //     // Check if API call was successful
    //     if (response.ok && data.message === "Password set successfully.") {
    //       setPasswordModal(true);
    //       setTimeout(() => {
    //         // navigate("/signup10");
    //         onNextStep();
    //       }, 2000);
    //       setInvalidRefferal(false);
    //     } else {
    //       // Handle error response from the API
    //       console.error(data.error); // Log the error message
    //       // alert("Failed to set password. Please try again."); // Show an alert to the user
    //       setInvalidRefferal(true);
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     alert("An error occurred. Please try again."); // Show an alert to the user
    //   } finally {
    //     setIsLoading(false);
    //     // setInvalidRefferal(false);
    //   }
    // } else {
    //   setIsLoading(true);

    //   try {
    //     const response = await fetch(
    //       "https://adrox-89b6c88377f5.herokuapp.com/referrals/add-referral/",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           sponsor_referral_id: referral,
    //           recruit_referral_id: Cookies.get("referral_id"),
    //           recruit_user_id: userId,
    //         }),
    //       }
    //     );

    //     console.log("response: ", response);

    //     const data = await response.json();

    //     // Check if API call was successful
    //     if (response.ok) {
    //       setPasswordModal(true);
    //       setTimeout(() => {
    //         // navigate("/signup10");
    //         onNextStep();
    //       }, 2000);
    //       setInvalidRefferal(false);
    //     } else {
    //       // Handle error response from the API
    //       console.error(data.error); // Log the error message
    //       // alert("Failed to set password. Please try again."); // Show an alert to the user
    //       setInvalidRefferal(true);
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     alert("An error occurred. Please try again."); // Show an alert to the user
    //   } finally {
    //     setIsLoading(false);
    //     // setInvalidRefferal(false);
    //   }
    // }
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

      {/* Signup9 is this */}
      <div className="z-50">
        <div className="flex flex-col gap-10 max-lg:max-w-[45vw] max-md:max-w-[100%] justify-center items-center">
          <div className="flex items-center gap-1 justify-center">
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
            <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
            <div className="line w-10 h-[2px] bg-white"></div>
            <div className="circle bg-white rounded-full w-3 h-3"></div>
          </div>
          <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10  max-lg:bg-slate-700 max-lg:bg-opacity-30 w-[30rem] max-w-[100%] p-5 sm:p-10 md:p-20  rounded-2xl">
            <h1 className="font-700 text-[28px] sm:text-[36px]">
              Create Account
            </h1>
            <input
              type="text"
              value={Cookies.get("full_name")}
              placeholder="Name"
              readOnly
              className="bg-transparent border-b-2 pb-2 outline-none"
            ></input>
            <div className=" flex justify-between border-b-2 pb-2 ">
              <input
                type="text"
                value={Cookies.get("mobile_number")}
                placeholder="Mobile Number"
                readOnly
                className="bg-transparent outline-none"
              ></input>
              <i className="ri-checkbox-circle-line text-green-500"></i>
            </div>
            <div className=" flex justify-between border-b-2 pb-2">
              <input
                type="email"
                value={Cookies.get("email")}
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
            {sponsorCode && sponsorCode ? (
              <div>
                <span className="flex text-green-500 border border-slate-500 rounded-xl p-2 flex-wrap w-full">
                  <span className="text-slate-400">Referred by: </span>
                  {sponsorName}
                  {/* <span className="flex flex-wrap">Abdull rahmaan faris</span> */}
                </span>
              </div>
            ) : (
              <div className="w-full z-[1000000]">
                <input
                  type="text"
                  required
                  value={referralCode}
                  placeholder="Referral Code"
                  onChange={(e) => setReferralCode(e.target.value)}
                  className="bg-transparent border-b-2 pb-2 outline-none w-full"
                ></input>
                <p
                  className={`text-red-500 text-[14px] ${
                    invalidReferral ? "" : "hidden"
                  }`}
                >
                  Invalid refferal id...
                </p>
              </div>
            )}
            {/* <div className="mt-[-30px]">
              <p className="text-[12px] font-300">
                If you don't have a referral code, please use the one below
              </p>
              <span className="text-[16px] font-500 text-[#C653FF]">
                {Cookies.get("referral_id")}
              </span>
            </div> */}

            <div className="text-center">
              <button
                disabled={isLoading || !isEqual}
                onClick={handleButtonClick}
                className={`p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] ${
                  isLoading || !isEqual
                    ? "bg-gradient-to-r from-gray-800 to-gray-500 cursor-not-allowed"
                    : ""
                }`}
              >
                {isLoading ? "Loading..." : "Next"}
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
        {successModal && <SuccessModal text={successModalText} />}
      </div>
      <div className="absolute top-0 left-0">
        {failedModal && (
          <FailedModal
            closeModal={() => setFailedModal(false)}
            text={failedModalText}
          />
        )}
      </div>
      <div className="bg-[#0f011a] fixed top-0 left-0 -z-10 h-screen w-screen"></div>
    </div>
  );
};

export default Signup9;
