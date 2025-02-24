import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup4.css";
import Cookies from "js-cookie";

const Signup4 = ({ onNextStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRevealPhrase = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);

    try {
      console.log("Button clicked, initiating API call");
      const response = await fetch(
        "https://adrox-5ed452640f6d.herokuapp.com/api/users/generate-phrase/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      // console.log("Raw response:", response);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const data = await response.json();
      console.log("API response received", data);

      if (data.phrase && data.user_id) {
        const phraseArray = data.phrase.split(" ");

        
        localStorage.setItem("recoveryPhrase", JSON.stringify(phraseArray));
        Cookies.set("recoveryPhrase", JSON.stringify(phraseArray));
        Cookies.set("user_id", data.user_id);
        Cookies.set("signupDone", false);
        Cookies.set("recoveryPhraseDate", new Date().toISOString());
        onNextStep();

        // console.log(
        //   "Phrase and user_id stored in localStorage",
        //   phraseArray,
        //   data.user_id
        // );
        // console.log("User_Id: ", data.user_id);
        // navigate('/signup5');
        // console.log("Navigated to signup5");
      } else {
        console.error("Phrase or user_id is missing in the response:", data);
        throw new Error("Phrase or user_id is missing in the response");
      }
    } catch (error) {
      console.error("Error fetching recovery phrase:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup4-container">
      {/* <Helmet>
        <title>Reveal Secret Recovery Phrase</title>
      </Helmet> */}
      <div className="signup4-signup4">
        <img
          src="/external/ellipse22356-fwl-1000w.png"
          alt="Ellipse22356"
          className="signup4-ellipse2"
        />
        <img
          src="/external/ellipse32356-aujk-700w.png"
          alt="Ellipse32356"
          className="signup4-ellipse3"
        />
        <div className="signup4-frame57"></div>
        <div className="signup4-group93">
          <button
            className="signup4-buttons"
            onClick={handleRevealPhrase}
            disabled={isLoading}
          >
            <span className="signup4-text">
              <span>
                {isLoading ? "Revealing..." : "Reveal Secret Recovery Phrase"}
              </span>
            </span>
          </button>
          <div className="signup4-frame90">
            <div className="signup4-frame71">
              <span className="signup4-text02">
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
              <span className="signup4-text06">
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
            <div className="signup4-group85">
              <span className="signup4-text08">
                <span>Consider these tips:</span>
              </span>
              <div className="signup4-frame70">
                <div className="signup4-frame69">
                  <span className="signup4-text10">
                    <span>Save it in a password manager.</span>
                  </span>
                  <span className="signup4-text12">
                    <span>Place it in a safe deposit box.</span>
                  </span>
                  <span className="signup4-text14">
                    <span>
                      Write it down and store copies in multiple confidential
                      locations.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="signup4-group89">
              <div className="signup4-group86"></div>
              <div className="signup4-frame89">
                <div className="signup4-group88">
                  <img
                    src="/external/ellipse142356-bmh4-200h.png"
                    alt="Ellipse142356"
                    className="signup4-ellipse14"
                  />
                  <div className="signup4-component15">
                    <div className="signup4-frame88">
                      <div className="signup4-group87">
                        <img
                          src="/external/vectori235-1aac.svg"
                          alt="VectorI235"
                          className="signup4-vector"
                        />
                        <img
                          src="/external/ellipse12i235-h8r8-200h.png"
                          alt="Ellipse12I235"
                          className="signup4-ellipse12"
                        />
                        <img
                          src="/external/ellipse13i235-jfbq-200h.png"
                          alt="Ellipse13I235"
                          className="signup4-ellipse13"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="signup4-text16">
                  <span>Make sure you&apos;re alone when you</span>
                  <br></br>
                  <span> write it down</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0f011a] fixed top-0 left-0 -z-10 h-screen w-screen"></div>
    </div>
  );
};

export default Signup4;
