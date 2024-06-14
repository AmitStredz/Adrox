import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Routes, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Cookies from "js-cookie";
import LandingPage from "./views/landingPage/landingPage";
import NotFound from './views/signupPage/pages/not-found';
import Signup1 from './views/signupPage/pages/signup1';
import Signup2 from './views/signupPage/pages/signup2';
import Signup3 from './views/signupPage/pages/signup3';
import Signup4 from './views/signupPage/pages/signup4';
import Signup5 from './views/signupPage/pages/signup5';
import Signup6 from './views/signupPage/pages/signup6';
import Signup7 from './views/signupPage/pages/signup7';
import Signup8 from './views/signupPage/pages/signup8';
import Signup9 from './views/signupPage/pages/signup9';
import Signup10 from './views/signupPage/pages/signup10';
import Signup11 from './views/signupPage/pages/signup11';
import Signup12 from "./views/signupPage/pages/signup12";

import Signup from "./views/signupPage/signupFlow";

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
import Withdraw from "./views/staking/withdraw";
import Deposit from "./views/staking/deposit";
import Swap from "./views/staking/swap";
import Account from "./views/staking/account";

const App = () => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userId = Cookies.get('user_id');
  //   const signupDone = Cookies.get('signupDone');

  //   if (userId) {
  //     if (signupDone === 'true') {
  //       // Redirect to homepage if signup is done
  //       navigate('/homePage');
  //     } else {
  //       // Redirect to signup flow if signup is not done
  //       navigate('/signup');
  //     }
  //   } else {
  //     // Redirect new users to the landing page
  //     navigate('/landingPage');
  //   }
  // }, [navigate]); // Include navigate in the dependency array to fix eslint warning


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

        <Route path="/signup" element={<Signup/>} />

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

        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/swap" element={<Swap/>} />
        <Route path="/account" element={<Account/>} />

        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;