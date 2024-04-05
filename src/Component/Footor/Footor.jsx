import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footor() {
  return (
    <div>
      <div className="footor flex justify-evenly pb-[30px] mdd:flex-col mdd:items-center">
        <div className="side-1 ">
          <h1 className="h1 text-3xl font-[700] text-[#0f2c50] mdd:text-[25px] smm:text-[20px]">
            Easy
          </h1>
          <h1 className="h2 text-3xl font-[700] text-[#006bfe] mdd:text-[25px] smm:text-[20px]">
            ahead
          </h1>
          <p className="para text-[13px] text-[#293d4e] mt-2.5 ">
            We take the work out of connecting with <br /> others so you can
            accomplish more
          </p>
          <div className="dropdown">
            <select
              id="languageSelect"
              className="select border text-xs w-[250px] h-[30px] font-[700] mx-auto my-10 rounded-[3px] border-solid border-[#293d4e] mdd:w-[200px] smm:w-[150px]"
            >
              <option value="english" defaultValue>
                English
              </option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
          <div className="store-buttons">
            <a
              href="#"
              className="store-button inline-block no-underline overflow-hidden rounded-lg"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="w-[130px] h-auto mdd:w-[100px] smm:w-20"
              />
            </a>
            <a
              href="#"
              className="store-button inline-block no-underline overflow-hidden rounded-lg"
            >
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                alt="Download on the App Store"
                className="w-[130px] h-auto mdd:w-[100px] smm:w-20"
              />
            </a>
          </div>
          <div className="social-icons w-[200px] flex justify-evenly mt-[30px] mdd:w-[150px] smm:w-[120px]">
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <p className="para-2 text-[10px] text-[#293d4e] ml-[30px] mt-2.5 mdd:text-[8px] mdd:ml-2.5 smm:text-[6px] smm:ml-[5px]">
            Copyright Reserved Rohan Dhangar © 2024
          </p>
        </div>
        <div className="side-2 flex flex-wrap">
          <div className="div-1 flex justify-between flex-col mx-[75px] my-0 mdd:mx-[30px] mdd:my-0 smm:mx-2.5 smm:my-0">
            <div className="sub-div-1 mb-[33px]">
              <h1 className="side-2-h1 text-[17px] font-[700] text-[#0f2c50] mdd:text-base">
                About
              </h1>
              <div className="s2-l flex justify-between flex-col">
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
              </div>
            </div>
            <div className="sub-div-2">
              <h1 className="side-2-h1 text-[17px] font-[700] text-[#0f2c50] mdd:text-base">
                Support
              </h1>
              <div className="s2-l flex justify-between flex-col">
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  support1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  support2
                </a>
              </div>
            </div>
          </div>
          <div className="div-1 flex justify-between flex-col mx-[75px] my-0 mdd:mx-[30px] mdd:my-0 smm:mx-2.5 smm:my-0">
            <div className="sub-div-1 mb-[33px]">
              <h1 className="side-2-h1 text-[17px] font-[700] text-[#0f2c50] mdd:text-base">
                About
              </h1>
              <div className="s2-l flex justify-between flex-col">
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
              </div>
            </div>
            <div className="sub-div-2">
              <h1 className="side-2-h1 text-[17px] font-[700] text-[#0f2c50] mdd:text-base">
                Support
              </h1>
              <div className="s2-l flex justify-between flex-col">
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  support1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  support2
                </a>
              </div>
            </div>
          </div>
          <div className="div-1 flex justify-between flex-col mx-[75px] my-0 mdd:mx-[30px] mdd:my-0 smm:mx-2.5 smm:my-0">
            <div className="sub-div-1 mb-[33px]">
              <h1 className="side-2-h1 text-[17px] font-[700] text-[#0f2c50] mdd:text-base">
                About
              </h1>
              <div className="s2-l flex justify-between flex-col">
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  about1
                </a>
              </div>
            </div>
            <div className="sub-div-2">
              <h1 className="side-2-h1 text-[17px] font-[700] text-[#0f2c50] mdd:text-base">
                Support
              </h1>
              <div className="s2-l flex justify-between flex-col">
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  support1
                </a>
                <a href="#" className="text-[15px] text-[#293d4e] mt-[15px]">
                  support2
                </a>
                <p className="para-2 text-[10px] text-[#293d4e] ml-[30px] mt-2.5 mdd:text-[8px] mdd:ml-2.5 smm:text-[6px] smm:ml-[5px]">
                  Privacy / Terms and condition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footor;
