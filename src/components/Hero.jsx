import React from "react";
import { GoArrowRight } from "react-icons/go";
import Navigation from "./layouts/Navigation";
import { FaRegLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import Button from "./Button";
import ImageComp from "./Image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className="flex justify-between items-center mr-4 md:mr-0"
      id="home"
    >
      <section
        id="hero"
        className="font-Poppins h-screen flex justify-between items-center w-[90%]"
      >
        <div className="text-3xl absolute top-0 right-16 mr-8 mt-8 bg-[#4F3D17] w-12 h-12 rounded-full cursor-pointer h">
          <div className="w-full h-full flex justify-center items-center">
            <MdDarkMode className="text-primary-gold text-center" />
          </div>
        </div>
        <div className="text-3xl absolute top-16 right-0 mr-8 mt-8 bg-primary-black w-12 h-12 rounded-full cursor-pointer ">
          <div className="w-full h-full flex justify-center items-center">
            <FaRegLightbulb className="text-3xl text-white " />
          </div>
        </div>
        {/* <main className="flex flex-col justify-between items-center w-[90%] mt-8 lg:flex-row"> */}
        <div className="w-[30rem] h-[45rem] rounded-xl ml-12 hidden lg:block">
          <ImageComp
            image="https://res.cloudinary.com/emmatobiloba/image/upload/v1686570535/Portfolio/Image_3_1_hmtqc2.jpg"
            width="480"
            height="720"
            styles="rounded-xl"
          />
        </div>
        <div className="w-[656px] ml-12 lg:ml-0">
          <p className="text-2xl sm:text-3xl md:text-4xl text-primary-gold font-semibold mb-4">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "- I'M ODERINDE EMMANUEL.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                // Same substring at the start will only be typed out once, initially
                "- I'M ODERINDE OLUWATOBILOBA.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold pl-0 lg:pl-[2.6rem] mb-8">
            FRONTEND WEB DEVELOPER
            {/* <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "WEB APP DEVELOPER",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "FRONTEND DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            /> */}
          </p>
          <p className="text-white text-base leading-7 mb-8 text-ellipsis">
            I'm a Nigerian based front end developer focused on creating clean &
            user-friendy experiences. I am passionate about building excellent
            software that improves the lives of people around me.
          </p>

          <Button
            text="MORE ABOUT ME"
            icon={<GoArrowRight className="text-white text-3xl" />}
          />
        </div>
        {/* </main> */}
      </section>
      <Navigation />
    </section>
  );
};

export default Hero;
