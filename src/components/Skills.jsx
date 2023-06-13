import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skills = [
    { progress: "95", name: "HTML" },
    { progress: "95", name: "CSS" },
    { progress: "89", name: "JavaScript" },
    { progress: "89", name: "React" },
    { progress: "75", name: "Next" },
    { progress: "50", name: "Vue" },
    { progress: "60", name: "TypeScript" },
    { progress: "50", name: "Firebase" },
  ];

  const percentage = 66;

  return (
    <main className="w-full h-full md:h-[516px] px-12 lg:px-24 mt-36 lg:mt-0 mb-12">
      <p className="flex justify-center uppercase font-extrabold text-2xl text-white mb-12">
        My Skills
      </p>
      <div className="w-full h-screen md:h-full grid grid-cols-2 gap-8 md:grid-cols-4">
        {skills?.map((skill) => (
          <div className="h-[150px] w-[150px] mx-0 md:mx-20">
            <CircularProgressbar
              value={skill.progress}
              text={`${skill.progress}%`}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `#ffa900`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  // strokeLinecap: "butt",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  // Rotate the path
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "white",
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Rotate the trail
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "white",
                  // Text size
                  fontSize: "16px",
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: "#3e98c7",
                },
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
