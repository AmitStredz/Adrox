import React from "react";
import Background from "./assets/account-background.png";
import Signup7 from "./signup7";
import Signup8 from "./signup8";
import Signup9 from "./signup9";
import Signup10 from "./signup10";
import Signup11 from "./signup11";
import { useState } from "react";

export default function Signupp7() {

  const [currentStep, setCurrentStep] = useState(7);

  const handleNextStep = () => {
    if (currentStep < 11) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 7:
        return <Signup7 onNextStep={handleNextStep} />;
      case 8:
        return <Signup8 onNextStep={handleNextStep} />;
      case 9:
        return <Signup9 onNextStep={handleNextStep} />;
      case 10:
        return <Signup10 onNextStep={handleNextStep} />;
      case 11:
        return <Signup11 />;
      default:
        return null;
    }
  };

  return (
   

      <div className="z-10">{renderCurrentStep()}
      </div>

      
  );
}
