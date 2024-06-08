import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import LandingPage from "./views/landingPage/landingPage";
import NotFound from './views/signupPage/not-found';
import Signup1 from './views/signupPage/signup1';
import Signup2 from './views/signupPage/signup2';
import Signup3 from './views/signupPage/signup3';
import Signup4 from './views/signupPage/signup4';
import Signup5 from './views/signupPage/signup5';
import Signup6 from './views/signupPage/signup6';
import Signup7 from './views/signupPage/signup7';
import Signup8 from './views/signupPage/signup8';
import Signup9 from './views/signupPage/signup9';
import Signup10 from './views/signupPage/signup10';
import Signup11 from './views/signupPage/signup11';
import Signup12 from "./views/signupPage/signup12";

import LoginRecovery from "./views/loginPage/loginRecovery";
import LoginEmail from "./views/loginPage/loginEmail";
import LoginPhone from "./views/loginPage/loginPhone";

import Wallet from "./views/staking/wallet";

import HomePage from "./views/homePage/homePage";
import Staking1 from "./views/staking/staking1";
import Staking2 from "./views/staking/staking2";
import Staking1Month from "./views/staking/staking1Month";
import Staking3Month from "./views/staking/staking3Month";
import Staking6Month from "./views/staking/staking6Month";
import Staking1Year from "./views/staking/staking1Year";

import GlobeAnimation from "./views/landingPage/pages/globeAnimation";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element ={<LandingPage/>} />
        <Route path="/landingPage" element ={<LandingPage/>} />
        <Route path="/signup1" element={<Signup1/>} />
        <Route path="/signup2" element={<Signup2/>} />
        <Route path="/signup3" element={<Signup3/>} />
        <Route path="/signup4" element={<Signup4/>} />
        <Route path="/signup5" element={<Signup5/>} />
        <Route path="/signup6" element={<Signup6/>} />
        <Route path="/signup7" element={<Signup7/>} />
        <Route path="/signup8" element={<Signup8/>} />
        <Route path="/signup9" element={<Signup9/>} />
        <Route path="/signup10" element={<Signup10/>} />
        <Route path="/signup11" element={<Signup11/>} />
        <Route path="/signup12" element={<Signup12/>} />

        <Route path="/LoginRecovery" element={<LoginRecovery/>} />
        <Route path="/LoginEmail" element={<LoginEmail/>} />
        <Route path="/LoginPhone" element={<LoginPhone/>} />

        <Route path="/homePage" element={<HomePage/>} />
        <Route path="/staking1" element={<Staking1/>} />
        <Route path="/staking2" element={<Staking2/>} />
        <Route path="/staking1Month" element={<Staking1Month/>} />
        <Route path="/staking3Month" element={<Staking3Month/>} />
        <Route path="/staking6Month" element={<Staking6Month/>} />
        <Route path="/staking1Year" element={<Staking1Year/>} />

        <Route path="/globeAnimation" element={<GlobeAnimation  />} />
        <Route path="/wallet" element={<Wallet/>} />

        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
}
