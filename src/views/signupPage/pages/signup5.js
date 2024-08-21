import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "./signup5.css";
import CopiedModal from "./copiedModal";
import Cookies from "js-cookie";

const Signup5 = ({ onNextStep }) => {
  const [recoveryPhrase, setRecoveryPhrase] = useState([]);
  const navigate = useNavigate();
  const [clipBoard, setClipBoard] = useState("Copy to Clipboard");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const phrase = JSON.parse(Cookies.get("recoveryPhrase"));
    if (phrase) {
      setRecoveryPhrase(phrase);
    } else {
      // navigate("/signup4"); Redirect to signup4 if no phrase found
      console.log("No phrase found");
    }
  }, [navigate]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(recoveryPhrase.join(" "));
    setShowModal(true);
    setClipBoard("Copied...");
  };

  return (
    <div className="signup5-container">
      {/* <Helmet>
        <title>Secret Recovery Phrase</title>
      </Helmet> */}
      <div className="signup5-signup5">
        <div className="signup5-frame57"></div>
        <div className="signup5-group92">
          <div className="signup5-frame91">
            <div className="signup5-frame71">
              <span className="signup5-text">
                <span>
                  Note down your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>Secret Recovery Phrase</span>
              </span>
              <span className="signup5-text04">
                <span>
                  Please write down the 12-word Secret Recovery Phrase and store
                  it in a secure location that only you can access.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="signup5-group85">
              <span className="signup5-text06">
                <span>Consider these tips:</span>
              </span>
              <div className="signup5-frame70">
                <div className="signup5-frame69">
                  <span className="signup5-text08">
                    <span>Save it in a password manager.</span>
                  </span>
                  <span className="signup5-text10">
                    <span>Place it in a safe deposit box.</span>
                  </span>
                  <span className="signup5-text12">
                    <span>
                      Write it down and store copies in multiple confidential
                      locations.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="signup5-group91">
            <button className="signup5-buttons" onClick={onNextStep}>
              <span className="signup5-text14">
                <span>Next</span>
              </span>
            </button>
            <span className="signup5-text16" onClick={handleCopyToClipboard}>
              <span>{clipBoard}</span>
            </span>
            <div className="signup5-group90">
              <div className="signup5-group86"></div>
              <div className="signup5-frame87">
                <div className="signup5-phrase-grid">
                  {recoveryPhrase.map((word, index) => (
                    <div key={index} className="signup5-phrase-item">
                      <span className="signup5-text18">
                        <span>{word}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/external/ellipse22357-ri4-1000w.png"
          alt="Ellipse22357"
          className="signup5-ellipse2"
        />
        <img
          src="/external/ellipse32357-bmww-700w.png"
          alt="Ellipse32357"
          className="signup5-ellipse3"
        />
      </div>

      <div>
        {showModal && (
          <CopiedModal
            closeModal={() => setShowModal(false)}
            text="Your secret recovery phrase has been copied to the clipboard."
          />
        )}
      </div>
    </div>
  );
};

export default Signup5;
