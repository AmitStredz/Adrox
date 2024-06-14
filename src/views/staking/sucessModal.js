import React, { useRef } from "react";
import { CopyCheck } from "lucide-react";

function successModal({ message }) {
  return (
    <div 
      className="flex fixed justify-center w-screen h-screen left-0 top-0 text-white items-center backdrop-blur-lg z-[10000]"
      data-aos="zoom-in"
    >
      <div className="flex flex-col items-center gap-10 bg-gradient-to-r from-[#34104A] to-[#250939] p-10 rounded-3xl">
        
        <CopyCheck size={100} className="text-[#A702FA] " />
        <p>{message}</p>
      </div>
    </div>
  );
}

export default successModal;
