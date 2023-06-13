import React from "react";
import { FaDownload } from "react-icons/fa";
import Navigation from "./layouts/Navigation";
import Button from "./Button";
import { BsDashLg } from "react-icons/bs";

const About = () => {
  return (
    <main className="h-full md:h-screen w-full mt-16" id="about-me">
      <div className="w-full flex justify-center mb-12">
        <div className="text-7xl uppercase font-[900] text-primary-black w-[15rem] tracking-widest">
          <span className="hidden sm:block"> RESUME</span>
          <p className="text-4xl uppercase font-extrabold text-white flex justify-center items-center sm:relative bottom-14 left-[3.2rem] tracking-normal">
            About <span className=" text-primary-gold ml-2">Me</span>
          </p>
        </div>
      </div>
      <p className="uppercase text-2xl text-semibold text-white pl-12">
        Personal Infos
      </p>
      <div className="flex justify-between w-full">
        <div className="flex flex-col lg:justify-between lg:items-center pl-12 lg:flex-row w-[85%]">
          <div className="flex flex-col md:flex-row lg:justify-between lg:items-center w-full lg:w-[45%]">
            <div className="mr-12 lg:mr-0 w-full">
              <ul>
                <li className="text-gray-500 my-8 ">
                  First Name: <span className="text-white">Emmanuel</span>
                </li>
                <li className="text-gray-500 my-8">
                  Age: <span className="text-white">24</span>
                </li>
                <li className="text-gray-500 my-8">
                  Freelance: <span className="text-white">Available</span>
                </li>
                <li className="text-gray-500 my-8">
                  Phone: <span className="text-white">+2347052273700</span>
                </li>
                <li className="text-gray-500 my-8">
                  Twitter: <span className="text-white">Emma_tobiloba</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-gray-500 my-8">
                  Last Name: <span className="text-white">Oderinde</span>
                </li>
                <li className="text-gray-500 my-8">
                  Nationality: <span className="text-white">Nigeria</span>
                </li>
                <li className="text-gray-500 my-8">
                  Address: <span className="text-white">Lagos</span>
                </li>
                <li className="text-gray-500 my-8">
                  Email:
                  <span className="text-white">oderindee25@gmail.com</span>
                </li>
                <li className="text-gray-500 my-8">
                  Language: <span className="text-white">English</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-36 w-56 border-2 border-primary-black rounded-md p-4">
              <p className="text-4xl font-bold text-primary-gold mb-2">
                2<span className="text-xl align-top inline-block">+</span>
              </p>
              <div className="flex">
                <BsDashLg className="text-2xl text-primary-gray mr-2" />
                <p className="uppercase leading-6 text-sm text-white">
                  Years of <br></br>experience
                </p>
              </div>
            </div>
            <div className="h-36 w-56 border-2 border-primary-black rounded-md p-4">
              <p className="text-4xl font-bold text-primary-gold mb-2">
                10<span className="text-xl align-top inline-block">+</span>
              </p>
              <div className="flex">
                <BsDashLg className="text-2xl text-primary-gray mr-2" />
                <p className="uppercase leading-6 text-sm text-white">
                  Completed <br></br>Projects
                </p>
              </div>
            </div>
            <div className="h-36 w-56 border-2 border-primary-black rounded-md p-4">
              <p className="text-4xl font-bold text-primary-gold mb-2">
                4<span className="text-xl align-top inline-block">+</span>
              </p>
              <div className="flex">
                <BsDashLg className="text-2xl text-primary-gray mr-2" />
                <p className="uppercase leading-6 text-sm text-white">
                  Happy <br></br> Customers
                </p>
              </div>
            </div>
            <div className="h-36 w-56 border-2 border-primary-black rounded-md p-4">
              <p className="text-4xl font-bold text-primary-gold mb-2">
                2<span className="text-xl align-top inline-block">+</span>
              </p>
              <div className="flex">
                <BsDashLg className="text-2xl text-primary-gray mr-2" />
                <p className="uppercase leading-6 text-sm text-white">
                  Awards <br></br> won
                </p>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
      </div>

      <div className="mt-12 ml-12">
        <Button
          text="DOWNLOAD CV"
          icon={<FaDownload className="text-white text-2xl" />}
        />
      </div>
    </main>
  );
};

export default About;
