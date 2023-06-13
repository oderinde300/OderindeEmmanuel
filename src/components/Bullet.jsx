import React from "react";
import { IoBriefcaseSharp } from "react-icons/io5";

const Bullet = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[3rem]">
      <div className="bg-primary-gold w-12 h-12 rounded-full flex justify-center items-center ">
        <IoBriefcaseSharp className="text-2xl text-white" />
      </div>
      <div className="h-[7rem] w-[0.2rem] bg-primary-black"></div>
    </div>
  );
};

export default Bullet;
