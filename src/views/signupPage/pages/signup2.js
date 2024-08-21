import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup2.css";

const Signup2 = ({ onNextStep }) => {
  const navigate = useNavigate();

  const handleNoThanksClick = () => {
    navigate("/");
  };

  const handleIAgreeClick = () => {
    onNextStep();
    // navigate('/signup3');
  };

  return (
    <div className="signup2-container">
      
      <div className="signup2-signup2">
        <img
          src="/external/ellipse23212-y26r-1000w.png"
          alt="Ellipse23212"
          className="signup2-ellipse2"
        />
        <img
          src="/external/ellipse33212-kjlq-700w.png"
          alt="Ellipse33212"
          className="signup2-ellipse3"
        />
        <div className="signup2-frame57"></div>
        <div className="signup2-frame65">
          <div className="signup2-frame64">
            <div className="signup2-frame63">
              <div className="signup2-frame62">
                <span className="signup2-text">
                  <p>
                    <span className="signup2-text01">ADROX </span>
                    aims to enhance its service by gathering usage data to
                    better understand user interactions. this information will
                    be used to improve the overall user experience.
                  </p>
                </span>
                <div className="signup2-group83">
                  <span className="signup2-text03">
                    <span>Here's what ADROX will do:</span>
                  </span>
                  <div className="signup2-frame51">
                    <span className="signup2-text05">
                      <li>
                        Always Provide An Opt-Out Option In The Settings Menu.
                      </li>
                    </span>
                    <span className="signup2-text07">
                      <li>Send Anonymized Click And Pageview Events.</li>
                    </span>
                    <span className="signup2-text09">
                      <li>
                        Never Collect Unnecessary Information Such As Keys,
                        
                      </li>
                      <span>Addresses, Transaction Hashes, or Balances.</span>
                    </span>
                    <span className="signup2-text11">
                      <li>Never Capture Your Complete IP Address.</li>
                    </span>
                    <span className="signup2-text13">
                      <li>Never Engage in Data Selling.</li>
                    </span>
                    <span className="signup2-text15">
                      <li>
                        The collected Data Is Aggregated And Anonymized To
                        
                      </li>
                      <span>Comply With GDPR Regulations.</span>
                    </span>
                  </div>
                </div>
              </div>
              <span className="signup2-text17">
                <span>
                  It&apos;s worth noting that when using ADROX, your IP address
                  and relevant transaction details may be collected. However,
                  ADROX ensures that such data is stored securely and not used
                  for any unauthorized purposes.
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
            <span className="signup2-text21">
              <span>
                For more insights into ADROX&apos;s privacy practices, please
                refer to our Privacy Policy.
              </span>
            </span>
          </div>
          <div className="signup2-frame50">
            <button className="signup2-buttons" onClick={handleIAgreeClick}>
              <span className="signup2-text23">
                <span>I Agree</span>
              </span>
            </button>
            <button className="signup2-buttons1" onClick={handleNoThanksClick}>
              <span className="signup2-text25">
                <span>No Thanks</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
