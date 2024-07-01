import React, { useState } from "react";

import img1 from "../assets/adrox-logo.png";
import adam from "../assets/adam.png";
import { useNavigate } from "react-router-dom";

export default function HomeHeader() {
  const [showMenu, setShowMenu] = useState(false);

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
    navigate('/landingPage');
  };

  return (
    <div className=" w-screen flex items-center justify-between p-2 lg:p-5 px-5 md:px-14 xl:px-28 fixed bg-gradient-to-b from-[#150c1b] to-[#49474728] bg-opacity-15 z-[100]">
      <div className="w-[30vw] sm:w-56 cursor-pointer">
        <img src={img1} alt="img1" onClick={() => navigate("/landingPage")} />
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
          onClick={() => setShowMenu(true)}
        ></i>
      </div>

      <div
        className={`fixed p-10 px-7 -500 flex flex-col h z-50 5] h-full w-96 top-0 gap-10  transition-all bg-gradient-to-b from-[#210F34] to-[#170D25] ${
          showMenu ? "right-0" : "-right-96"
        }`}
      >
        <i
          className="ri-close-fill z-[1000] cursor-pointer text-3xl"
          onClick={() => setShowMenu(false)}
        ></i>
        <div className="flex justify-center">
          <a
            className=" max-sm:text-[12px] p-2 px-3 sm:px-8 rounded-2xl border border-slate-500 cursor-pointer"
            onClick={() => handleLogout()}
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
