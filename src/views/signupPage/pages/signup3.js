import React from 'react';
import { Navigate, useHistory, useNavigate } from 'react-router-dom';
import './signup3.css';

const Signup3 = ({onNextStep}) => {

  const navigate = useNavigate();
  
  const handleSecureMyWalletClick = () => {
    onNextStep();
  // navigate('/signup4');
  };

  return (
    <div className="signup3-container">
      {/* <Helmet>
        <title>Adrox - Secure My Wallet</title>
      </Helmet> */}
      <div className="signup3-signup3">
        <img
          src="/external/ellipse22356-sa34-1000w.png"
          alt="Ellipse22356"
          className="signup3-ellipse2"
        />
        <img
          src="/external/ellipse32356-6m6m-700w.png"
          alt="Ellipse32356"
          className="signup3-ellipse3"
        />
        <div className="signup3-frame56">
          <div className="signup3-group84">
            <button className="signup3-buttons" onClick={handleSecureMyWalletClick}>
              <span className="signup3-text">
                <span>Secure My Wallet</span>
              </span>
            </button>
            <div className="signup3-frame68">
              <div className="signup3-frame61">
                <span className="signup3-text02">
                  <span>Secure Your Wallet</span>
                </span>
                <span className="signup3-text04">
                  <span>
                    Before you begin, Read and understand the importance of your
                    Recovery Phrase and how to safeguard your wallet.
                  </span>
                </span>
              </div>
              <div className="signup3-frame67">
                <div className="signup3-frame60">
                  <div className="signup3-frame57">
                    <span className="signup3-text06">
                      <span>
                        What is a Secret Recovery Phrase?
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="signup3-text08">
                      <span>
                        Your Secret Recovery Phrase consists of 12 words,
                        serving as the &quot;master key&quot; to access your
                        wallet and funds.
                      </span>
                    </span>
                  </div>
                  <div className="signup3-frame58">
                    <span className="signup3-text10">
                      <span>
                        How should I safeguard my Secret Recovery Phrase?
                      </span>
                    </span>
                    <span className="signup3-text12">
                      <span>1. Save it in a password manager.</span>
                      <br></br>
                      <span>2. Store it in a secure deposit box.</span>
                      <br></br>
                      <span>
                        3. Write it down and keep copies in multiple secluded
                        locations.
                      </span>
                    </span>
                  </div>
                  <div className="signup3-frame59">
                    <span className="signup3-text18">
                      <span>
                        Should I disclose my Secret Recovery Phrase?
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="signup3-text20">
                      <span>
                        Under no circumstances should you share your Secret
                        Recovery Phrase, not even with ADROX!
                      </span>
                    </span>
                  </div>
                </div>
                <div className="signup3-frame66">
                  <span className="signup3-text22">
                    <span>
                      If someone asks for your recovery phrase they are likely
                      trying
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>to scam you and steal your wallet funds.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup3;
