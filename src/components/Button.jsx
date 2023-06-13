import React, { FC, ReactNode } from "react";

const Button = ({ text, icon, width, height, type }) => {
  return (
    <button
      type={type ? "submit" : ""}
      className={`w-[15rem]  ${width ? width : "w-[15rem]"} ${
        height ? height : "h-[3rem]"
      } border-2 border-primary-gold rounded-full flex items-center pl-8 justify-between`}
    >
      <p className="text-base font-semibold uppercase text-white">{text}</p>
      <div className="bg-primary-gold w-[3rem] h-[3rem] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#ce8900] ease-in-out">
        {icon}
      </div>
    </button>
  );
};

export default Button;
