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
import Login from "./views/loginPage/login";
import ChangePassword from "./views/components/changePassword";
import AutoLogin from "./AutoLogin";

import Wallet from "./views/staking/wallet";
import HomePage from "./views/homePage/homePage";
import Staking1 from "./views/staking/staking1";
import Staking2 from "./views/staking/staking2";
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
        <Route path="/Login" element={<Login />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/app/users/auto-login" element={<AutoLogin />} />

        <Route path="/homePage" element={<HomePage />} />
        <Route path="/staking1" element={<Staking1 />} />
        <Route path="/staking2" element={<Staking2 />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
