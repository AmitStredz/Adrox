import LiveProfits from "../../components/liveProfits";
import Bitcoin from "../assets/bitcoin.webp";

export default function page2() {
  return (
    <div className="p-5 sm:p-20 md:p-24 lg::p-44">
      <div className="flex justify-center mb-24">
        <h1 className="text-[38px] font-600 sm:text-[56px] sm:font-800">
          Crypto Markets
        </h1>
      </div>

      <LiveProfits />

      <div className="flex flex-col justify-center mt-40 gap-10">
        <div className="text-[40px] sm:text-[56px] font-800 flex flex-col gap-2 leading-12">
          <h1 className="text-center">Your Reliable &</h1>
          <h1 className="text-center text-[#C653FF]">Secure Crypto Exchange</h1>
        </div>
        <div className="flex justify-center text-center">
          <button className="relative group border-2 border-[#4F0F81] p-2 px-14 rounded-2xl  text-[18px] font-400 bg-gradient-to-t from-[#4C127C] to-[#AA00FE] cursor-pointer">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-[#0F011A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
