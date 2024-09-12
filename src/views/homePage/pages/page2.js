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
          <p className="p-2 px-14 rounded-2xl  text-[18px] font-400 bg-gradient-to-t from-[#4C127C] to-[#AA00FE]">
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}
