import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "./views/customHook/AuthProvider";

import LandingPage from "./views/landingPage/landingPage";
import NotFound from "./views/signupPage/pages/not-found";
import SignupFlow from "./views/signupPage/signupFlow";
import Login from "./views/loginPage/login";
import ChangePassword from "./views/components/changePassword";
import AutoLogin from "./AutoLogin";
import ReferralPage from "./ReferralPage";
import Wallet from "./views/staking/wallet";
import HomePage from "./views/homePage/homePage";
import Staking1 from "./views/staking/staking1";
import Staking2 from "./views/staking/staking2";
import Account from "./views/staking/account";

const App = () => {
  const [signupStep, setSignupStep] = useState(Cookies.get("signup_step"));
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    const name = getInitialComponent()?.type?.name;
    console.log("name: ", name);
    
    console.log("initialComponent: ", getInitialComponent()?.type?.name);
    console.log("isAuthenticated: ", isAuthenticated);
  }, [isAuthenticated]);

  const getInitialComponent = () => {
    if (!isAuthenticated) return <LandingPage />;
    if (signupStep && signupStep < 11) return <SignupFlow />;
    return <HomePage />;
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-[20px]">
        Loading...
      </div>
    ); // Or some kind of loading spinner
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          getInitialComponent()?.type?.name == "SignupFlow"
            ? navigate("/signup")
            : getInitialComponent()
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupFlow />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/app/users/auto-login" element={<AutoLogin />} />
      <Route path="/referral" element={<ReferralPage />} />
      <Route
        path="/staking1"
        element={isAuthenticated ? <Staking1 /> : <Navigate to="/login" />}
      />
      <Route
        path="/staking2"
        // element={<Staking2 />}
        element={isAuthenticated ? <Staking2 /> : <Navigate to="/login" />}
      />
      <Route
        path="/wallet"
        element={isAuthenticated ? <Wallet /> : <Navigate to="/login" />}
      />
      <Route
        path="/account"
        element={isAuthenticated ? <Account /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
//   useNavigate,
// } from "react-router-dom";
// import Cookies from "js-cookie";

// import LandingPage from "./views/landingPage/landingPage";
// import NotFound from "./views/signupPage/pages/not-found";
// import SignupFlow from "./views/signupPage/signupFlow";
// import Login from "./views/loginPage/login";
// import ChangePassword from "./views/components/changePassword";
// import AutoLogin from "./AutoLogin";
// import ReferralPage from "./ReferralPage";

// import Wallet from "./views/staking/wallet";
// import HomePage from "./views/homePage/homePage";
// import Staking1 from "./views/staking/staking1";
// import Staking2 from "./views/staking/staking2";
// import Account from "./views/staking/account";
// import { Home } from "lucide-react";

// const App = () => {
//   // const initialRoute = getInitialRoute();
//   const [initialComponent, setInitialComponent] = useState(null);
//   const [authStatus, setAuthstatus] = useState(false);
//   const [loginComponent, setLoginComponent] = useState(null);

//   const navigate = useNavigate();
//   // const getInitialRoute = () => {
//   const signupDone = Cookies.get("signupDone");

//   const userId = Cookies.get("user_id");
//   const signup_step = Cookies.get("signup_step");

//   const fetchInitialComponent = () => {
//     if (userId) {
//       console.log("user found: ", userId);
//       if (signup_step < 11) {
//         console.log("signup_step: ", signup_step);
//         setInitialComponent(<SignupFlow />);
//         // return "/signup";
//       } else {
//         setInitialComponent(<HomePage onLogout={handleLogout} />);
//         // return "/homePage";
//       }
//       // return signupDone === "true" ? "/homePage" : "/signup";
//     } else {
//       console.log("no user found...");

//       setInitialComponent(<LandingPage />);
//       // return "/landingPage";
//     }
//   };
//   useEffect(() => {
//     setLoginComponent(<Login onLoginSuccess={handleLoginSuccess} />);

//     fetchInitialComponent();
//   }, []);

//   useEffect(() => {
//     fetchInitialComponent();
//   }, [authStatus]);

//   useEffect(() => {
//     console.log("initalComponent: ", initialComponent?.type?.name);
//   }, [initialComponent]);

//   const handleLogout = () => {
//     console.log("logout triggered in app...");
//     navigate("/");
//     setAuthstatus(true);
//     setInitialComponent(<LandingPage />);
//     // fetchInitialComponent();
//   };
//   const handleLoginSuccess = () => {
//     console.log("login triggered in app...");
//     navigate("/");
//     setAuthstatus(true);
//     setInitialComponent(<HomePage onLogout={handleLogout} />);
//     // fetchInitialComponent();
//   };

//   return (
//     // <Router>
//     <Routes>
//       <Route
//         path="/"
//         element={
//           initialComponent?.type?.name == "SignupFlow"
//             ? navigate("/signup")
//             : initialComponent
//         }
//       />
//       {/* <Route path="/landingPage" element={<LandingPage />} /> */}
//       <Route path="/signup" element={<SignupFlow />} />
//       <Route path="/Login" element={loginComponent} />
//       <Route path="/changePassword" element={<ChangePassword />} />
//       <Route path="/app/users/auto-login" element={<AutoLogin />} />
//       <Route path="/referral" element={<ReferralPage />} />

//       {/* <Route path="/homePage" element={<HomePage />} /> */}
//       <Route path="/staking1" element={<Staking1 />} />
//       <Route path="/staking2" element={<Staking2 />} />
//       <Route path="/wallet" element={<Wallet />} />
//       <Route path="/account" element={<Account />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//     // </Router>
//   );
// };

// export default App;
