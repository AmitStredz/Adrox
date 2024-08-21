import { CopyCheck } from "lucide-react";

function SetPassword() {
  return (
    <div
      className="flex fixed justify-center w-screen h-screen left-0 top-0 text-white items-center backdrop-blur-lg z-[1000]"
      data-aos="zoom-in"
    >
      
      <div className="flex flex-col items-center gap-5 bg-gradient-to-r from-[#34104A] to-[#250939] p-10 rounded-3xl z-[1000]">
        <CopyCheck size={100} className="text-[#A702FA] " />
        <p>Password was set successfully</p>
      </div>
    </div>
  );
}

export default SetPassword;
