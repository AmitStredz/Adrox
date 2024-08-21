import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";

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

const SignupFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = Cookies.get("user_id");
    const recoveryPhraseDate = Cookies.get("recoveryPhraseDate");
    const recoveryPhrase = Cookies.get("recoveryPhrase");
    const signupDone = Cookies.get("signupDone");
    const userName = Cookies.get("full_name");
    const userEmail = Cookies.get("email");
    const userPhone = Cookies.get("mobile_number");

    if (userId) {
      if (signupDone === "true") {
        navigate("/homePage");
      } else if (recoveryPhrase) {
        // If user details are present, navigate to the step they left off
        if (userName || userEmail || userPhone) {
          // Logic to determine the correct step if user details are present
          const lastStep = Cookies.get("signup_step") || 1;
          console.log("LastStep: ", lastStep);
          setCurrentStep(parseInt(lastStep, 10));
        } else {
          // Apply 15-day expiration rule
          const recoveryDate = new Date(recoveryPhraseDate);
          const currentDate = new Date();
          const diffTime = Math.abs(currentDate - recoveryDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          console.log("in date...");

          if (diffDays <= 15) {
            setCurrentStep(5);
          } else {
            Cookies.remove("user_id");
            Cookies.remove("recoveryPhraseDate");
            Cookies.remove("recoveryPhrase");
            setCurrentStep(1);
          }
        }
      }
    } else {
      setCurrentStep(1);
    }
  }, [navigate]);

  const handleNextStep = (nextStep) => {
    setCurrentStep(nextStep);
    Cookies.set("signup_step", nextStep); // Save the current step
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Signup1 onNextStep={() => handleNextStep(2)} />;
      case 2:
        return (
          <Signup2
            onNextStep={() => handleNextStep(3)}
            onPrevious={() => handleNextStep(1)}
          />
        );
      case 3:
        return (
          <Signup3
            onNextStep={() => handleNextStep(4)}
            onPrevious={() => handleNextStep(2)}
          />
        );
      case 4:
        return (
          <Signup4
            onNextStep={() => handleNextStep(5)}
            onPrevious={() => handleNextStep(3)}
          />
        );
      case 5:
        return (
          <Signup5
            onNextStep={() => handleNextStep(6)}
            onPrevious={() => handleNextStep(4)}
          />
        );
      // case 6:
      //   return (
      //     <Signup6
      //       onNextStep={() => handleNextStep(7)}
      //       onPrevious={() => handleNextStep(5)}
      //     />
      //   );
      case 6:
        return (
          <Signup7
            onNextStep={() => handleNextStep(7)}
            onPrevious={() => handleNextStep(6)}
          />
        );
      case 7:
        return (
          <Signup8
            onNextStep={() => handleNextStep(8)}
            onPrevious={() => handleNextStep(7)}
          />
        );
      case 8:
        return (
          <Signup9
            onNextStep={() => handleNextStep(9)}
            onPrevious={() => handleNextStep(8)}
          />
        );
      case 9:
        return (
          <Signup10
            onNextStep={() => handleNextStep(10)}
            onPrevious={() => handleNextStep(9)}
          />
        );
      case 10:
        return (
          <Signup11
            onNextStep={() => handleNextStep(11)}
            onPrevious={() => handleNextStep(10)}
          />
        );
      case 11:
        return (
          <Signup12
            onNextStep={() => navigate("/homePage")}
            onPrevious={() => handleNextStep(11)}
          />
        );
      default:
        return <Signup1 onNextStep={() => handleNextStep(2)} />;
    }
  };

  return (
    <div>
      <Helmet>Hello</Helmet>
      <div>{renderStep()}</div>
    </div>
  );
};

export default SignupFlow;
