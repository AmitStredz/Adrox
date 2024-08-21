import React from "react";
import globe1 from "../assets/globe1.png";
import globe2 from "../assets/globe2.png";
import starGlow from "../assets/Glowstar.png";
import circumcircle1 from "../assets/circumcircle.png";
import circle from "../assets/circle.png";

export default function SignupAnimation() {
  return (
    <div className="relative w-full h-full max-lg:absolute  max-lg:top-[5vw] max-sm:top-[20vw] -z-10" > {/* Maintains aspect ratio */}
      <div className="absolute inset-0 flex justify-center items-center max-lg:w-[70vw] max-lg:left-16 max-lg:opacity-40">
        <img className="absolute" src={circle} alt="Circle" />
        <img className="absolute w-[45%] h-auto" src={starGlow} alt="Star Glow" />
        <img className="absolute w-[100%] h-auto rotating-circle-clock opacity-30" src={circumcircle1} alt="Circumcircle" />
        <img className="absolute w-[100%] h-auto rotating-image-clock" src={globe1} alt="Globe 1" />
        <img className="absolute w-[100%] h-auto rotating-image-anticlock" src={globe2} alt="Globe 2" />
      </div>
    </div>
  );
}
