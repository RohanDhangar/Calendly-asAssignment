import React, { useState } from "react";
import logo from "../../Resources/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const Header = () => {
  const [isVisibility, setIsVisibility] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between m-[15px]">
        <img
          src={logo}
          alt="Image not available"
          className="w-[235px] h-[70px]"
        />
        <div className={`flex justify-evenly`}>
          <a
            href="#"
            className="font-[650] text-[17px] mx-5 my-auto lgg:hidden"
          >
            Individuals
          </a>
          <a
            href="#"
            className="font-[650] text-[17px] mx-5 my-auto lgg:hidden"
          >
            Teams
          </a>
          <a
            href="#"
            className="font-[650] text-[17px] mx-5 my-auto lgg:hidden"
          >
            Enterprises
          </a>
          <a
            href="#"
            className="font-[650] text-[17px] mx-5 my-auto lgg:hidden"
          >
            Product <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </a>
          <a
            href="#"
            className="font-[650] text-[17px] mx-5 my-auto lgg:hidden"
          >
            Pricing
          </a>
          <a
            href="#"
            className="font-[650] text-[17px] mx-5 my-auto lgg:hidden"
          >
            Resources <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </a>
        </div>
        <div className="mr-[30px]">
          <button className="font-[650] text-[17px] m-[15px] lgg:hidden">
            log In
          </button>
          {/* <button className="getStarted">Get Started</button> */}
          <Button title="Get Started" className="py-[14px] lgg:hidden" />
        </div>

        <div className={`hidden mt-[20px] lgg:block`}>
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            onClick={() => setIsVisibility(!isVisibility)}
            className={`cursor-pointer`}
          />
          <div
            className={`flex flex-col absolute top-16 right-4 bg-white rounded-md shadow-md transition-all ${
              isVisibility ? "visible opacity-100" : "invisible opacity-0"
            }`}
            style={{ zIndex: 100 }}
          >
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Individuals
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Enterprises
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Teams
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Product <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Pricing
            </a>

            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Resources <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              log In
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              <Button title="Get Started" className="py-[5px]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
