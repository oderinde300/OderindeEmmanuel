import React from "react";
import Image from "./Image";
import Navigation from "./layouts/Navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";

const Portfolio = () => {
  const projects = [
    {
      title: "Quillon",
      description:
        "A health platform that connects users to HMO's and also offer health Insurances.",
      image:
        "https://res.cloudinary.com/emmatobiloba/image/upload/v1685977385/Portfolio/Quillon_emb6sm.png",

      link: "https://quillon.vercel.app",
      stack: ["React,", " Tailwindcss"],
      framework: "React",
      github: "",
    },
    {
      title: "Durham",
      description:
        "A web-based application designed to streamline contract processing and document management for Durham schools.",
      image:
        "https://res.cloudinary.com/emmatobiloba/image/upload/v1685977365/Portfolio/Durham_y0ym7g.png",
      link: "https://durham-sigma.vercel.app",
      stack: ["React,", " Tailwindcss"],
      framework: "React",
      github: "",
    },
    {
      title: "Sphenelene",
      description:
        "A responsive web-based landing page for Sphenelene plants food.",
      image:
        "https://res.cloudinary.com/emmatobiloba/image/upload/v1685978042/Portfolio/Sphenelene_klbif0.png",
      link: "https://oderinde300.github.io/Spheneplants-Landing-Page/",
      stack: ["React,", " Tailwindcss"],
      framework: "React",
      github: "",
    },
    {
      title: "Movie Search App",
      description: "A web-based movie search App built with omdbapi movie API.",
      image:
        "https://res.cloudinary.com/emmatobiloba/image/upload/v1685977386/Portfolio/MovieSearch_r5g26o.png",
      link: "https://slick-media-group-movie-app.vercel.app/",
      stack: ["React"],
      framework: "React",
      github: "",
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className="h-full md:h-full w-full m" id="portfolio">
      <div className="w-full flex justify-center">
        <div className="text-7xl uppercase font-[900] text-primary-black w-[20rem] tracking-widest">
          <span className="hidden sm:block"> WORKS</span>
          <p className="text-4xl uppercase font-extrabold text-white flex justify-center items-center sm:relative z-50 bottom-14 left-[-0.5rem] tracking-normal">
            My <span className=" text-primary-gold ml-2">Portfolio</span>
          </p>
        </div>
      </div>
      {/* <div className="mb-12 flex justify-center items-center">
        <p className="uppercase text-sm font-semibold mr-4 hover:text-primary-gold cursor-pointer">
          All
        </p>
        <p className="uppercase text-sm font-semibold mr-4 hover:text-primary-gold cursor-pointer">
          ReactJs
        </p>
        <p className="uppercase text-sm font-semibold mr-4 hover:text-primary-gold cursor-pointer">
          Next.js
        </p>
        <p className="uppercase text-sm font-semibold mr-4 hover:text-primary-gold cursor-pointer">
          JavaScript
        </p>
      </div> */}
      <Box sx={{ width: "100%", marginBottom: "2rem" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="white"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#ffa900",
            },
          }}
        >
          <Tab label="react js" />
          <Tab label="next js" />
          <Tab label="vanilla js" />
        </Tabs>
      </Box>
      <div className="flex justify-between items-center">
        <div className="pl-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%]">
          {projects?.map((project, index) => (
            <Link href={`${project.link}`} passHref={true} key={index}>
              <div className="w-[90%] xs:w-[300px] h-[340px] hover:shadow-lg hover:shadow-primary-gold cursor-pointer">
                <Image
                  image={project.image}
                  width={300}
                  height={300}
                  styles="mr-4"
                />
                <div className="h-1 w-full bg-primary-gold"></div>
                <div className="p-4 font-semibold bg-primary-black h-[170px]">
                  <p>{project.title}</p>
                  <p className="mt-4 text-primary-gray text-sm overflow-hidden text-ellipsis h-16">
                    {project.description}
                  </p>
                </div>
                <p
                  className="uppercase text-sm text-primary-gold cursor-pointer font-semibold relative top-[-2rem] left-[1rem]"
                  style={{ position: "relative" }}
                >
                  {...project.stack}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Navigation />
      </div>
    </main>
  );
};

export default Portfolio;
