// import Image from "next/image";
import { Inter } from "next/font/google";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../store";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  // const dispatch = useDispatch();

  // const handleThemeToggle = () => {
  //   dispatch(toggleTheme());
  // };

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Blog />
    </>
  );
}
