import React, { useRef } from "react";

function InvalidPhrase({ closeModal }) {
  const modalRef = useRef();
  const bgModal = (e) => {
    if (modalRef.current == e.target) {
      closeModal();
    }

  };
  return (
    <div ref={modalRef} onClick={bgModal}
      className="flex fixed justify-center w-screen h-screen left-0 top-0 text-white items-center backdrop-blur-lg z-[1000]"
      data-aos="zoom-in"
    >
      <div className="flex flex-col items-center gap-10 bg-opacity-100 p-10 rounded-3xl z-[1000000] bg-gradient-to-r from-[#34104A] to-[#250939]">
        <div className="items-end justify-end flex w-full">
          <button className="items-end justify-end flex ">
            <i className="ri-close-fill text-3xl" onClick={closeModal}></i>
          </button>
        </div>
        <i className="ri-close-circle-line text-8xl text-red-600"></i> 
        <p>Secret Recovery Phrase Verification Failed</p>
        
      </div>
    </div>
  );
}

export default InvalidPhrase;
