import React, { useEffect, useState } from "react";

import ada from "./assets/ada.svg";
import avax from "./assets/avax.svg";
import bnb from "./assets/bnb.svg";
import btc from "./assets/btc.svg";
import doge from "./assets/doge.svg";
import eth from "./assets/eth.svg";
import link from "./assets/link.svg";
import shib from "./assets/shib.svg";
import sol from "./assets/sol.svg";
import trx from "./assets/trx.svg";
import usdc from "./assets/usdc.svg";
import usdt from "./assets/usdt.svg";
import wbtc from "./assets/wbtc.svg";
import xrp from "./assets/xrp.svg";

export default function LiveProfits() {
  const [livePrice, setLivePrice] = useState(null);
  const logoName = {
    cardano: ada,
    "avalanche-2": avax,
    binancecoin: bnb,
    bitcoin: btc,
    dogecoin: doge,
    ethereum: eth,
    chainlink: link,
    "shiba-inu": shib,
    solana: sol,
    tron: trx,
    "usd-coin": usdc,
    tether: usdt,
    "wrapped-bitcoin": wbtc,
    ripple: xrp,
  };
  // useEffect(() => {
  //   Object.entries(logoName).forEach(([name, url]) => {
  //     console.log("names: ", url); // This will log 'ada', 'avax', 'bnb', etc.
  //   });
  // }, []);

  useEffect(() => {
    let interval;

    const updateLiveProfits = async () => {
      try {
        const response = await fetch(
          `https://adrox-5ed452640f6d.herokuapp.com/api/live-prices/`
        );
        const responseData = await response.json();
        // console.log("response:", Object.entries(responseData));
        // console.log("response length: ", responseData.length);
        const arrayData = Object.entries(responseData);
        if (arrayData.length > 3) {
          console.log("data valid...");
          setLivePrice(arrayData);
        }
      } catch (error) {
        console.error("Error fetching Live Profits:", error);
      }
    };

    updateLiveProfits(); // Fetch the data immediately on mount
    interval = setInterval(updateLiveProfits, 60000); // Fetch the data every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // console.log("LivePrice: ", livePrice);
  }, [livePrice]);

  return (
    <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  lg:grid-rows-4 xl:grid-rows-3 gap-10">
      {livePrice ? (
        <>
          {livePrice.map((crypto, index) => {
            const cryptoName = crypto[0];
            const priceData = crypto[1];
            const logo = logoName[cryptoName]; // Get the logo for the current crypto
            // console.log("logo: ", logo);

            return (
              <div
                className="flex sm:flex-col gap-5 bg-[#1F1229] rounded-3xl p-3 py-5 items-start w-full h-full sm:w-56 font-700 text-[20px]"
                key={index}
              >
                <div className="flex gap-2 w-full">
                  <div className="items-center flex">
                    {logo && (
                      <img
                        src={logo} // Use the correct logo from the map
                        alt={logoName[cryptoName]}
                        className="w-10 sm:w-10"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-600">{cryptoName}</p>
                    <p className="font-500 text-[14px]">
                      {/* {parseInt(logo)} */}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-full w-full gap-5 max-sm:pr-5 text-[14px] sm:text-[18px]">
                  <div className="flex max-sm:justify-end">
                    <p>$ {priceData.usd}</p>
                  </div>
                  <div
                    className={`flex justify-end w-full ${
                      priceData.usd_24h_change < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    <p>{priceData.usd_24h_change?.toFixed(3)}%</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <span>Live Price not available</span>
      )}
    </div>
  );
}
