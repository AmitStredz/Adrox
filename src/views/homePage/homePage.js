import React from "react";
import "./homePage.css";
import HomeHeader from "./pages/homeHeader";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Footer from "./pages/footer";
import StarAnimation from "../landingPage/pages/starAnimation";
import { Helmet } from "react-helmet";

export default function homePage({onLogout}) {
  return (
    <div className="bg-[#0F011A] w-screen h-screen font-nunito text-white overflow-x-hidden relative">
      <HomeHeader onLogout={onLogout}></HomeHeader>
      <Page1></Page1>
      <Page3></Page3>
      <Page2></Page2>
      <Page4></Page4>
      <Footer></Footer>

      <Helmet>
        <title>Adrox - Homepage</title>
      </Helmet>

      <div className="absolute right-[-40%] w-[90%] top-[60rem]">
        <img src="/ellipse.png"></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src="/ellipse.png"></img>
      </div>

      <div className="absolute right-[-40%] w-[90%] top-[180rem]">
        <img src="/ellipse.png"></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-[130rem]">
        <img src="/ellipse.png"></img>
      </div>

      <div className="absolute w-screen h-screen top-0 left-0  z-10">
        <StarAnimation></StarAnimation>
      </div>
    </div>
  );
}
