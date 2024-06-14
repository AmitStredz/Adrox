import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Signup1 from "./pages/signup1";
import Signup2 from "./pages/signup2";
import Signup3 from "./pages/signup3";
import Signup4 from "./pages/signup4";
import Signup5 from "./pages/signup5";
import Signup6 from "./pages/signup6";
import Signup7 from "./pages/signup7";
import Signup8 from "./pages/signup8";
import Signup9 from "./pages/signup9";
import Signup10 from "./pages/signup10";
import Signup11 from "./pages/signup11";
import Signup12 from "./pages/signup12";
import { Helmet } from "react-helmet";

// Component to handle the sequential signup flow
const Signup = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      <Helmet>Adrox - Signup</Helmet>
      {step === 1 && <Signup1 onNextStep={handleNextStep} />}
      {step === 2 && <Signup2 onNextStep={handleNextStep} />}
      {step === 3 && <Signup3 onNextStep={handleNextStep} />}
      {step === 4 && <Signup4 onNextStep={handleNextStep} />}
      {step === 5 && <Signup5 onNextStep={handleNextStep} />}
      {/* {step === 5 && <Signup6 onNextStep={handleNextStep} />} */}
      {step === 6 && <Signup7 onNextStep={handleNextStep} />}
      {step === 7 && <Signup8 onNextStep={handleNextStep} />}
      {step === 8 && <Signup9 onNextStep={handleNextStep} />}
      {step === 9 && <Signup10 onNextStep={handleNextStep} />}
      {step === 10 && <Signup11 onNextStep={handleNextStep} />}
      {step === 11 && <Signup12 onNextStep={handleNextStep} />}
    </>
  );
};

export default Signup;
