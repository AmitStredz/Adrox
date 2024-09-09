import Scanner from "./assets/scanner.png";
import leftStar from "./assets/leftStar.png";
import rightStar from "./assets/rightStar.png";

export default function page3() {
  return (
    <div className="flex justify-center bg-[#1E0031] relative">
      <div className="flex max-md:flex-col max-md:gap-10 items-center justify-between w-[65%] my-36">
        <div className="flex flex-col gap-10 max-sm:ml-20">
          <div className="text-[40px] sm:text-[64px] leading-none font-nunito font-700 text-[#C653FF]">
            <h1>Earn Anytime,</h1>
            <h1>Anywhere</h1>
          </div>
          <div className="text-[20px] sm:text-[24px] font-400 w-[25rem] sm:w-[27rem] leading-8">
            <p>
              Trade cryptocurrency seamlessly through the ADROX app and website.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <i className="ri-apple-fill text-4xl"></i>
              <div>
                <p className="text-xs">Download on the</p>
                <p className="text-xl font-semibold leading-5">App Store</p>
              </div>
            </div>

            <div className="flex gap-2">
              <i className="ri-google-play-fill text-4xl"></i>{" "}
              <div>
                <p className="text-xs">GET IT ON</p>
                <p className="text-xl font-semibold leading-5">Google Play</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center flex flex-col gap-7 items-center">
          <img src={Scanner} alt="Scanner" className="w-100" />
          <a
            className="font-400 text-[18px] border-slate-600 border rounded-xl p-2 w-11/12 bg-gradient-to-t from-[#0F011A] to-[#210134] cursor-pointer"
            style={{ width: "100%" }}
          >
            Coming&nbsp;Soon
          </a>
        </div>
      </div>

      <div className="absolue">
        <img
          src={leftStar}
          className="absolute -left-80 -top-10 rotating-image-anticlock opacity-10 z-10"
        ></img>
        <img
          src={rightStar}
          className="absolute -right-80 -bottom-16 rotating-image-clock opacity-10 w-[45%]"
        ></img>
      </div>
    </div>
  );
}
