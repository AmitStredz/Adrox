import React, { useRef } from "react";

const DownloadPopup = ({ closeModal }) => {
  const modalRef = useRef();
  const bgModal = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={bgModal}
      className="flex fixed justify-center w-screen h-screen left-0 top-0 p-5 sm:px-10 text-white items-center backdrop-blur-lg z-[1000]"
      data-aos="fade-in"
    >
      <div className="flex flex-col items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#34104A] to-[#250939] p-5 px-10 rounded-3xl z-[1000]"  data-aos="zoom-in">
        <div className="items-end justify-end flex w-full">
          <button className="items-end justify-end flex ">
            <i className="ri-close-fill text-2xl" onClick={closeModal}></i>
          </button>
        </div>
        {/* <i className="ri-check-circle text-7xl sm:text-8xl text-red-600"></i> */}
        <p className="text-center text-[28px] sm:text-[40px] font-bold">Coming</p>
        <p className="text-center text-[18px] sm:text-[28px] font-bold"> Soon !</p>
      </div>
    </div>
  );
};

export default DownloadPopup;
