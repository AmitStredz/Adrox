import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './signup6.css'

const Signup6 = (props) => {
  const history = useNavigate();

  const handleNextClick = () => {
    history('/signup7');
  };  return (
    <div className="signup6-container">
      {/* <Helmet>
        <title>Secret Recovery Phrase</title>
      </Helmet> */}
      <div className="signup6-signup6">
        <div className="signup6-frame57"></div>
        <div className="signup6-group92">
          <div className="signup6-frame91">
            <div className="signup6-frame71">
              <span className="signup6-text">
                <span>
                  Note down your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Secret Recovery Phrase</span>
              </span>
              <span className="signup6-text04">
                <span>
                  Please write down the 12-word Secret Recovery Phrase and store
                  it in a secure location that only you can access.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="signup6-group85">
              <span className="signup6-text06">
                <span>Consider these tips:</span>
              </span>
              <div className="signup6-frame70">
                <div className="signup6-frame69">
                  <span className="signup6-text08">
                    <span>Save it in a password manager.</span>
                  </span>
                  <span className="signup6-text10">
                    <span>Place it in a safe deposit box.</span>
                  </span>
                  <span className="signup6-text12">
                    <span>
                      Write it down and store copies in multiple confidential
                      locations.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="signup6-group91">
            <button className="signup6-buttons" onClick={handleNextClick}>
              <span className="signup6-text14">
                <span>Next</span>
              </span>
            </button>
            <span className="signup6-text16">
              <span>Copied.</span> 
            </span>
            <div className="signup6-group90">
              <div className="signup6-group86"></div>
              <div className="signup6-frame87">
                <div className="signup6-frame84">
                  <div className="signup6-frame72">
                    <span className="signup6-text18">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame73">
                    <span className="signup6-text20">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame74">
                    <span className="signup6-text22">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame75">
                    <span className="signup6-text24">
                      <span>Simply </span>
                    </span>
                  </div>
                </div>
                <div className="signup6-frame85">
                  <div className="signup6-frame76">
                    <span className="signup6-text26">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame77">
                    <span className="signup6-text28">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame78">
                    <span className="signup6-text30">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame79">
                    <span className="signup6-text32">
                      <span>Simply </span>
                    </span>
                  </div>
                </div>
                <div className="signup6-frame86">
                  <div className="signup6-frame80">
                    <span className="signup6-text34">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame81">
                    <span className="signup6-text36">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame82">
                    <span className="signup6-text38">
                      <span>Simply </span>
                    </span>
                  </div>
                  <div className="signup6-frame83">
                    <span className="signup6-text40">
                      <span>Simply </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/external/ellipse22357-n4he-1000w.png"
          alt="Ellipse22357"
          className="signup6-ellipse2"
        />
        <img
          src="/external/ellipse32357-ttik-700w.png"
          alt="Ellipse32357"
          className="signup6-ellipse3"
        />
      </div>
    </div>
  )
}

export default Signup6
