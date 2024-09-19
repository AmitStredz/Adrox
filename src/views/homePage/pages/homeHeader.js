import React, { useState } from "react";

import img1 from "../assets/adrox-logo.png";
import adam from "../assets/adam.png";
import { useNavigate } from "react-router-dom";
import { FaRegCopy, FaUserPlus, FaWallet } from "react-icons/fa";
import { LuUser2, LuWallet2 } from "react-icons/lu";
import { FiLogOut, FiRepeat } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { GiWallet } from "react-icons/gi";
import Cookies from "js-cookie";
import DownloadPopup from "../../components/downloadPopup";

export default function HomeHeader({onLogout}) {
  const [showMenu, setShowMenu] = useState(false);
  const [downloadPopup, setDownloadPopup] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    alert("Successfully Logget Out.");
    console.log("logout triggered in homeheader...");

    onLogout();
    // navigate("/");
  };

  const handleReferralClick = () => {
    localStorage.setItem("op", "link");
    navigate("/staking2");
  };
  const handleLendingClick = () => {
    localStorage.setItem("op", "Staking");
    navigate("/staking2");
  };
  // const handleLendingClick = () => {
  //   localStorage.setItem("op", "staking");
  //   navigate("/staking2");
  // };
  return (
    <div className=" w-screen flex items-center justify-between p-2  lg:p-5 px-5 md:px-14 xl:px-28 fixed bg-gradient-to-b from-[#150c1b] to-[#49474728] bg-opacity-15 z-[100]">
      <div className="w-[30vw] sm:w-56 cursor-pointer">
        <img src={img1} alt="img1" onClick={() => navigate("/")} />
      </div>
      <div className="flex gap-5 md:gap-10 items-center">
        <div className="hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-2xl w-96 p-2 px-5 bg-slate-500 bg-opacity-15"
          />
        </div>
        <img
          src={adam}
          className="w-9 sm:w-12 cursor-pointer"
          onClick={() => navigate("/account")}
        ></img>
        <a
          className=" max-sm:text-[12px] p-2 px-3 sm:px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
          onClick={() => navigate("/wallet")}
        >
          ADX Wallet
        </a>
        <i
          className={`ri-menu-5-line text-2xl sm:text-4xl cursor-pointer ${
            showMenu ? "-z-10" : "z-50"
          }`}
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </div>

      <div
        className={`fixed p-5 px-14 flex flex-col h z-50 h-full sm:w-96 top-0 gap-10  transition-all bg-gradient-to-b from-[#210f34e3] to-[#170d25d2] ${
          showMenu ? "right-0" : "-right-96"
        }`}
      >
        <div className="flex justify-between">
          <i
            className="ri-close-fill z-[1000] cursor-pointer text-3xl"
            onClick={() => setShowMenu(!showMenu)}
          ></i>

          <div
            className="flex flex-col items-end"
            style={{
              gap: "10px",
              alignItems: "center",
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "1.5em",
            }}
          >
            <img src={adam}></img>
            <span>{Cookies.get("full_name")}</span>
            {/* <p className="flex gap-1 items-center">
              UID: 0x2999dc <FaRegCopy />
            </p> */}
          </div>
        </div>

        <div className="flex flex-col gap- justify-between h-full text-slate-400">
          <div
            className="flex flex-col gap-2 max-sm:text-[12px] p-2 px-3 sm:px-8 cursor-pointer"
            // onClick={() => handleLogout()}
          >
            <span
              className="flex gap-1 items-center"
              onClick={() => navigate("/account")}
            >
              <LuUser2 />
              Account
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-300 to-slate-600"></div>
          </div>
          <div
            className="flex flex-col gap-2 max-sm:text-[12px] p-2 px-3 sm:px-8 cursor-pointer"
            onClick={() => navigate("/wallet")}
          >
            <span className="flex gap-1 items-center">
              <LuWallet2 />
              Wallets
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-300 to-slate-600"></div>
          </div>
          <div
            className="flex flex-col gap-2 max-sm:text-[12px] p-2 px-3 sm:px-8 cursor-pointer"
            onClick={() => handleLendingClick()}
          >
            <span className="flex gap-1 items-center">
              <GiWallet />
              My Lendings
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-300 to-slate-600"></div>
          </div>
          <div
            className="flex flex-col gap-2 max-sm:text-[12px] p-2 px-3 sm:px-8 cursor-pointer"
            // onClick={() => handleLogout()}
          >
            <span
              className="flex gap-1 items-center"
              onClick={() => setDownloadPopup(!downloadPopup)}
            >
              <HiOutlineDownload />
              Downloads
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-300 to-slate-600"></div>
          </div>
          <div
            className="flex flex-col gap-2 max-sm:text-[12px] p-2 px-3 sm:px-8 cursor-pointer"
            onClick={() => handleReferralClick()}
          >
            <span className="flex gap-1 items-center">
              <FaUserPlus />
              Referrals
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-300 to-slate-600"></div>
          </div>
          <div
            className="flex flex-col gap-2 max-sm:text-[12px] p-2 px-3 sm:px-8 cursor-pointer"
            onClick={() => navigate("/changePassword")}
          >
            <span className="flex gap-1 items-center">
              <FiRepeat />
              Change Password
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-300 to-slate-600"></div>
          </div>
          <div
            className="flex flex-col gap-2 max-sm:text-[12px] p-2 px-3 sm:px-8 cursor-pointer"
            onClick={() => handleLogout()}
          >
            <span className="flex gap-1 items-center">
              <FiLogOut />
              Logout
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-300 to-slate-600"></div>
          </div>

          {/* <div
            className="flex gap-1 items-center  max-sm:text-[12px] p-2 px-3 sm:px-8  cursor-pointer"
            onClick={() => handleLogout()}
          >
            <FiLogOut />
            Logout
          </div> */}

          {downloadPopup && (
            <DownloadPopup closeModal={() => setDownloadPopup(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
