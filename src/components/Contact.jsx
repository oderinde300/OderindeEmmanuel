import React from "react";
import Navigation from "./layouts/Navigation";
import { FaMap } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Button from "./Button";

const Contact = () => {
  return (
    <main className="h-full lg:h-screen w-full mt-12" id="contact">
      <div className="w-full flex justify-center mb-12">
        <div className="text-7xl uppercase font-[900] text-primary-black w-[17rem] tracking-widest ">
          <span className="hidden sm:block">CONTACT</span>
          <p className="text-4xl uppercase font-extrabold text-white flex justify-center items-center sm:relative z-50 bottom-14 left-[4rem] tracking-normal">
            Get In <span className=" text-primary-gold ml-2">Touch</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-between lg:flex-row w-[80%] pl-12">
          <div className="w-[90%] md:w-[25rem]">
            <p className="uppercase">Don't Be Shy!</p>
            <p className="mt-4 text-sm text-primary-gray">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="flex mt-8">
              <FaMap className="text-4xl text-primary-gold" />
              <div className="ml-4">
                <p className="text-sm text-primary-gray uppercase">
                  Address Point
                </p>
                <p className="text-sm text-white">
                  24, Mosadolorun Str, Iba Junction, Lagos State, Nigeria.
                </p>
              </div>
            </div>

            <div className="flex mt-8">
              <HiMailOpen className="text-4xl text-primary-gold" />
              <div className="ml-4">
                <p className="text-sm text-primary-gray uppercase">Mail Me</p>
                <p className="text-sm text-white">steve@mail.com</p>
              </div>
            </div>

            <div className="flex mt-8">
              <FaPhoneSquareAlt className="text-4xl text-primary-gold" />
              <div className="ml-4">
                <p className="text-sm text-primary-gray uppercase">Call Me</p>
                <p className="text-sm text-white">+2347052273700</p>
              </div>
            </div>

            <div className="flex mt-8 w-[10rem] justify-between">
              <div className="bg-primary-black hover:bg-primary-gold w-10 h-10 rounded-full flex justify-center items-center my-4 cursor-pointer hover:scale-110">
                <a href="mailto:oderindee25@gmail.com" target="_blank">
                  <SiGmail className="text-xl text-white" />
                </a>
              </div>
              <div className="bg-primary-black hover:bg-primary-gold w-10 h-10 rounded-full flex justify-center items-center my-4 cursor-pointer hover:scale-110">
                <a href="https://twitter.com/Emma_tobiloba" target="_blank">
                  <AiOutlineTwitter className="text-xl text-white" />
                </a>
              </div>
              <div className="bg-primary-black hover:bg-primary-gold w-10 h-10 rounded-full flex justify-center items-center my-4 cursor-pointer hover:scale-110">
                <a
                  href="https://www.linkedin.com/in/oderinde-emmanuel-b43913184/"
                  target="_blank"
                >
                  <GrLinkedinOption className="text-xl text-white" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] md:w-[36rem]">
              <form
                action="https://formsubmit.co/bfcbbaff080f2f8a1ac01392f3c66d45"
                method="POST"
              >
                <div className="flex flex-col justify-between md:flex-row">
                  <input
                    placeholder="YOUR NAME"
                    name="name"
                    type="text"
                    className="bg-primary-black py-2 px-4 w-[90%] md:w-[17rem] rounded-full placeholder-[#505050] text-sm"
                  />
                  <input
                    placeholder="YOUR EMAIL"
                    name="email"
                    type="email"
                    className="bg-primary-black py-2 px-4 w-[90%] md:w-[17rem] rounded-full placeholder-[#505050] text-sm mt-8 md:mt-0"
                  />
                </div>
                <input
                  placeholder="YOUR SUBJECT"
                  name="subject"
                  type="text"
                  className="bg-primary-black py-2 px-4 w-full rounded-full placeholder-[#505050] text-sm mt-8"
                />
                <textarea
                  placeholder="YOUR MESSAGE"
                  name="message"
                  className="bg-primary-black py-2 px-4 w-full h-[12rem] rounded-xl placeholder-[#505050] text-sm mt-8"
                />
                <div className="mt-8">
                  <Button
                    text="send message"
                    type="submit"
                    icon={<BsFillSendFill className="text-white text-2xl" />}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </main>
  );
};

export default Contact;
