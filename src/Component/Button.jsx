import React from "react";

function Button({ title, className }) {
  return (
    <button className={`font-[500] text-white text-[15px] bg-[#056af3] rounded-[8px] px-[16px] ${className} hover:bg-white hover:text-[#056af3] `}>
      {title}
    </button>
  );
}

export default Button;
