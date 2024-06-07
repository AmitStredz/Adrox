
import Scanner from "./assets/scanner.png";
export default function page3() {
  return (
    <div className="flex justify-center bg-[#1E0031] ">
      <div className="flex items-center justify-between w-[65%] my-36">
        <div className="flex flex-col gap-10">
          <div className="text-[64px] leading-none font-nunito font-700 text-[#C653FF]">
            <h1>Stake Anytime,</h1>
            <h1>Anywhere</h1>
          </div>
          <div className="text-[24px] font-400 w-[27rem] leading-8">
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
          <img src={Scanner} alt="Scanner" className="w-80" />
          <a className="font-400 text-[18px] border-slate-600 border rounded-xl p-2 w-11/12 bg-gradient-to-t from-[#0F011A] to-[#210134] cursor-pointer">
            Scan to Download
          </a>
        </div>
      </div>
    </div>
  );
}
