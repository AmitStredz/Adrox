import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";

import LandingPage from "./views/landingPage/landingPage";
import NotFound from "./views/signupPage/pages/not-found";
import SignupFlow from "./views/signupPage/signupFlow";
import LoginRecovery from "./views/loginPage/pages/loginRecovery";
import LoginEmail from "./views/loginPage/pages/loginEmail";
import LoginPhone from "./views/loginPage/pages/loginPhone";
import Login from "./views/loginPage/login";

import Wallet from "./views/staking/wallet";
import HomePage from "./views/homePage/homePage";
import Staking1 from "./views/staking/staking1";
import Staking2 from "./views/staking/staking2";
import Staking1Month from "./views/staking/staking1Month";
import Staking3Month from "./views/staking/staking3Month";
import Staking6Month from "./views/staking/staking6Month";
import Staking1Year from "./views/staking/staking1Year";
import Withdraw from "./views/staking/withdraw";
import Deposit from "./views/staking/deposit";
import Swap from "./views/staking/swap";
import Account from "./views/staking/account";

const getInitialRoute = () => {
  const userId = Cookies.get("user_id");
  const signupDone = Cookies.get("signupDone");

  if (userId) {
    return signupDone === "true" ? "/homePage" : "/signup";
  } else {
    return "/landingPage";
  }
};

const App = () => {
  const initialRoute = getInitialRoute();

  return (
      <Routes>
        <Route path="/" element={<Navigate to={initialRoute} />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/signup" element={<SignupFlow />} />
        <Route path="/LoginRecovery" element={<LoginRecovery />} />
        <Route path="/LoginEmail" element={<LoginEmail />} />
        <Route path="/LoginPhone" element={<LoginPhone />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/homePage" element={<HomePage />} />
        <Route path="/staking1" element={<Staking1 />} />
        <Route path="/staking2" element={<Staking2 />} />
        <Route path="/staking1Month" element={<Staking1Month />} />
        <Route path="/staking3Month" element={<Staking3Month />} />
        <Route path="/staking6Month" element={<Staking6Month />} />
        <Route path="/staking1Year" element={<Staking1Year />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
