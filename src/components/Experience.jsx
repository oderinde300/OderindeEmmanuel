import React from "react";
import Bullet from "./Bullet";
import { MdPunchClock } from "react-icons/md";

const Experience = () => {
  return (
    <main className="w-full h-full lg:h-[516px] px-12 mt-24 ">
      <p className="flex justify-center uppercase font-extrabold text-2xl mb-12 text-white">
        Education and Experience
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex w-full md:w-[30rem] items-center">
          <Bullet />
          <div>
            <div className="ml-4">
              <p className="bg-primary-black rounded-full px-2 py-1 text-xs uppercase text-primary-gray w-[7.2rem]">
                <span>2022</span>
                <span className="px-1">-</span>
                <span>Present</span>
              </p>
              <p className="mt-4">
                <span className="uppercase text-white">
                  Freelance Web Developer
                </span>
                <span className="text-primary-gray px-1">-</span>
                <span className="text-primary-gray uppercase text-sm">
                  Fovero
                </span>
              </p>
              <p className="mt-4 text-sm text-primary-gray">
                Worked with a team of developers to improve the company's web
                App.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[30rem] items-center">
          <Bullet />
          <div>
            <div className="ml-4">
              <p className="bg-primary-black rounded-full px-2 py-1 text-xs uppercase text-primary-gray w-[5.5rem]">
                <span>2018</span>
                <span className="px-1">-</span>
                <span>2023</span>
              </p>
              <p className="mt-4">
                <span className="uppercase text-white">Bachelors Degree</span>
                <span className="text-primary-gray px-1">-</span>
                <span className="text-primary-gray uppercase text-sm">
                  FUTA
                </span>
              </p>
              <p className="mt-4 text-sm text-primary-gray">
                Bachelor of Statistics, Minor in Data Analytics in the Federal
                University of Technology, Akure.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[30rem] items-center">
          <Bullet />
          <div>
            <div className="ml-4">
              <p className="bg-primary-black rounded-full px-2 py-1 text-xs uppercase text-primary-gray w-[3rem]">
                <span>2023</span>
                {/* <span className="px-1">-</span>
                <span>Present</span> */}
              </p>
              <p className="mt-4">
                <span className="uppercase text-white">Frontend Developer</span>
                <span className="text-primary-gray px-1">-</span>
                <span className="text-primary-gray uppercase text-sm">
                  Concise
                </span>
              </p>
              <p className="mt-4 text-sm text-primary-gray">
                Developed a Document management App for Durham Schools in
                California.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[30rem] items-center">
          <Bullet />
          <div>
            <div className="ml-4">
              <p className="bg-primary-black rounded-full px-2 py-1 text-xs uppercase text-primary-gray w-[5.7rem]">
                <span>2022</span>
                <span className="px-1">-</span>
                <span>2023</span>
              </p>
              <p className="mt-4">
                <span className="uppercase text-white">
                  Software Engineering
                </span>
                <span className="text-primary-gray px-1">-</span>
                <span className="text-primary-gray uppercase text-sm">
                  Alt School Africa
                </span>
              </p>
              <p className="mt-4 text-sm text-primary-gray">
                Took a Diploma in Frontend Software Engineering at Alt School
                Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
