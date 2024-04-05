import React from "react";

function Card({
  title,
  heading,
  discription,
  btn_text,
  bgColor,
  margin,
  fontColor,
  borderColor,
}) {
  return (
    <div
      className={`m-[8px] w-[185px] h-auto flex flex-col rounded-[10px] border-[0.7px] border-solid border-[#e9edef] ${
        bgColor ? bgColor : "bg-[#f7fbfe]"
      }`}
    >
      <h1
        className={`text-[16px] font-semibold  mt-[10px] ml-[12px] ${
          fontColor ? fontColor : "text-[#0f2c50]"
        }`}
      >
        {title}
      </h1>
      <h1
        className={`text-[20px] font-bold mt-[10px] ml-[12px] ${
          fontColor ? fontColor : "text-[#0f2c50]"
        } `}
      >
        {heading}
      </h1>
      <p
        className={`text-[13px]  mx-[12px] my-[4px] ${
          fontColor ? fontColor : "text-[#293d4e]"
        }`}
      >
        {discription}
      </p>
      {btn_text && (
        <button
          className={` font-semibold border-[2px] border-[solid]  rounded-[7px] text-[10px] px-[12px] py-[8px]  cursor-pointer mr-[10px] my-[20px] ml-[10px] ${
            fontColor ? fontColor : "text-[#0e6bec]"
          } ${bgColor ? bgColor : "bg-[white]"}
          ${borderColor ? borderColor : "border-[#0e6bec]"} ${
            margin ? margin : "mt-[120px]"
          }
          `}
        >
          {btn_text}
        </button>
      )}
    </div>
  );
}

export default Card;

