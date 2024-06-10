import React, { useRef } from "react";
import { CopyCheck } from "lucide-react";

function SetPassword({ closeModal }) {
  const modalRef = useRef();
  const bgModal = (e) => {
    if (modalRef.current == e.target) {
      closeModal();
    }

  };
  return (
    <div ref={modalRef} onClick={bgModal}
      className="flex fixed justify-center w-screen h-screen left-0 top-0 text-white items-center backdrop-blur-lg z-10"
      data-aos="zoom-in"
    >
      <div className="flex flex-col items-center gap-5 bg-gradient-to-r from-[#34104A] to-[#250939] p-10 rounded-3xl">
        <div className="items-end justify-end flex w-full">
          <button className="items-end justify-end flex ">
            <i className="ri-close-fill text-3xl" onClick={closeModal}></i>
          </button>
        </div>
        <CopyCheck size={100} className="text-[#A702FA] " />
        <p>Password was set successfully</p>
      </div>
    </div>
  );
}

export default SetPassword;
