import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPhone() {
  const history = useNavigate();

  const handleLoginClick = () => {
    history("/homePage");
  };
  return (
          <div className="flex flex-col w-full gap-10 py-5 sm:p-10 z-50 my-10">
              <input
                type="email"
                required
                placeholder="Enter Phone Number Here"
                className="bg-transparent border-b-2 pb-2 outline-none"
                // onChange={(e) => setEmail(e.target.value)}
              ></input>
            <input
              type="password"
              required
              placeholder="Enter Password Here"
              className="bg-transparent border-b-2 pb-2 outline-none"
            //   onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="text-center   z-50">
              <button
                className="p-2 px-20 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer" onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
          </div>
  );
}
