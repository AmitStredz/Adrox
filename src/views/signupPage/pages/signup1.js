import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './signup1.css';

const Signup1 = ({onNextStep}) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      // navigate('/signup2');
      onNextStep();
    }
  };

  return (
    <div className="signup01-container relative">
      <Helmet>
        <title>Adrox - Signup </title>
      </Helmet>
      <div className="signup01-signup01">
        <img
          src="/ellipse.png"
          alt="Ellipse22352"
          className="signup01-ellipse2"
        />
        <img
          src="/ellipse.png"
          alt="Ellipse32352"
          className="signup01-ellipse3"
        />
        <img
          src="/rectangle252352-tzfr-600w.png"
          alt="Rectangle252352"
          className="signup01-rectangle25"
        />
        <img
          src="/adrox2352-alue.svg"
          alt="adrox2352"
          className="signup01-adrox"
        />
        <div className="signup01-frame49">
          <div className="signup01-group79">
            <span className="signup01-text">
              <span className="signup01-text01">a</span>
              <span className="signup01-text02">d</span>
              <span className="signup01-text03">rox</span>
            </span>
            <div className="signup01-group2">
              <img
                src="/layer12352-w93e.svg"
                alt="Layer12352"
                className="signup01-layer1"
              />
            </div>
          </div>
          <div className="signup01-frame48">
            <div
              className={`signup01-frame46 ${isChecked ? 'enabled' : 'disabled'}`}
              onClick={handleButtonClick}
            >
              <span className="signup01-text04">
                <span>Create a new wallet</span>
              </span>
            </div>
            <div className="signup01-frame47">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange} 
                className="signup01-frame-checkboxbase"
              />
              <span className="signup01-text06">
                <span>I Agree to ADROX’S Terms of Use</span>
              </span>
            </div>
          </div>
        </div>
        <div className="signup01-automated-decentralized-resource-optimization-exchange">
          <span className="signup01-text08">
            <span>Automated</span>
            <br />
            <span>Decentralized</span>
            <br />
            <span>Resource</span>
            <br />
            <span>Optimization</span>
            <br />
            <span>Exchange Wallet</span>
          </span>
        </div>
      </div>
      <div className="bg-[#0f011a] fixed top-0 left-0 -z-10 h-screen w-screen"></div>

    </div>
  );
};

export default Signup1;
