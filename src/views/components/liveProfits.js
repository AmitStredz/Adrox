import React, { useEffect, useState } from "react";

export default function LiveProfits() {

    const [livePrice, setLivePrice] = useState(null);

  useEffect(() => {
    let interval;

    const updateLiveProfits = async () => {
      try {
        const response = await fetch(
          `https://adrox-89b6c88377f5.herokuapp.com/api/live-prices/`
        );
        const responseData = await response.json();
        setLivePrice(Object.entries(responseData));
        console.log("response:", Object.entries(responseData));
      } catch (error) {
        console.error("Error fetching Live Profits:", error);
      }
    };

    updateLiveProfits(); // Fetch the data immediately on mount
    interval = setInterval(updateLiveProfits, 10000); // Fetch the data every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("LivePrice: ", livePrice);
  }, [livePrice]);


  return (
    <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  lg:grid-rows-4 xl:grid-rows-3 gap-10">
      {livePrice ? (
        <>
          {livePrice?.map((crypto, index) => (
            <div
              className="flex sm:flex-col gap-5 bg-[#1F1229] rounded-3xl p-3 py-5 items-start w-full sm:w-56 font-700 text-[20px]"
              key={index}
            >
              <div className="flex">
                <div className="items-center flex">
                  {/* <img
                      src={Bitcoin}
                      alt="bitcoin"
                      className="w-48 sm:w-20 "
                    /> */}
                </div>
                <div>
                  <p>{crypto[0]}</p>
                  <p className="font-600 text-[14px]">BTC</p>
                </div>
              </div>
              <div className="flex flex-col w-full sm:gap-5 max-sm:pr-5">
                <div className="flex max-sm:justify-end">
                  <p>$ {crypto[1].usd}</p>
                </div>
                <div
                  className={`flex justify-end w-full  ${
                    crypto[1].usd_24h_change < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  <p>{crypto[1]?.usd_24h_change?.toFixed(3)}%</p>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <span>Live Price not available</span>
      )}
    </div>
  );
}
