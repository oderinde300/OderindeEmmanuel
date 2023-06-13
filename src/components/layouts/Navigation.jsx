import React from "react";
import { ImHome3 } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoBriefcaseSharp } from "react-icons/io5";
import { RiMailOpenFill } from "react-icons/ri";
import { AiFillWechat } from "react-icons/ai";
import { Link } from "react-scroll/modules";

const Navigation = () => {
  return (
    <aside className="mr-4 md:mr-8 relative z-50">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        activeClass="active"
        className="bg-primary-black hover:bg-primary-gold active:bg-primary-gold w-12 h-12 rounded-full flex justify-center items-center my-4 cursor-pointer"
      >
        <ImHome3 className="text-2xl text-white" />
      </Link>
      <Link
        to="about-me"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        activeClass="active"
        className="bg-primary-black hover:bg-primary-gold active:bg-primary-gold w-12 h-12 rounded-full flex justify-center items-center my-4 cursor-pointer "
      >
        <FaUser className="text-2xl text-white" />
      </Link>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        activeClass="active"
        className="bg-primary-black hover:bg-primary-gold active:bg-primary-gold w-12 h-12 rounded-full flex justify-center items-center my-4 cursor-pointer "
      >
        <IoBriefcaseSharp className="text-2xl text-white" />
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        activeClass="active"
        className="bg-primary-black hover:bg-primary-gold active:bg-primary-gold w-12 h-12 rounded-full flex justify-center items-center my-4 cursor-pointer "
      >
        <RiMailOpenFill className="text-2xl text-white" />
      </Link>
      <Link
        to="blog"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        activeClass="active"
        className="bg-primary-black hover:bg-primary-gold active:bg-primary-gold w-12 h-12 rounded-full flex justify-center items-center my-4 cursor-pointer "
      >
        <AiFillWechat className="text-2xl text-white" />
      </Link>
    </aside>
  );
};

export default Navigation;
