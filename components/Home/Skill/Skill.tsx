"use client";
import Tilt from "react-parallax-tilt";

import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skill = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      percentage: 89,
    },
    {
      name: "React.js",
      icon: <SiReact />,
      percentage: 92,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      percentage: 89,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      percentage: 88,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      percentage: 94,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      percentage: 86,
    },
  ];

  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-white text-center text-2xl md:text-4xl xl:text-5xl font-bold ">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-x-6 mt-16">
        {skills.map((skil) => (
          <Tilt key={skil.name} scale={1.2} transitionSpeed={200}>
            <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-alls hover:scale-105 ">
              <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
              <p className="text-2xl font-semibold">{skil.percentage}%</p>
              <p className="text-purple-600 font-bold mt-4">{skil.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Skill;
