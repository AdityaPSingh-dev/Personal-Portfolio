// components/SkillsContent.tsx
"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiSpringboot,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiAndroid,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Stack } from "./Stack";
import { AnimatedText } from "./AnimatedText";

const SkillsContent = () => {
  const skills = [
    {
      text: "Frontend",
      icons: [SiReact, SiNextdotjs, SiTailwindcss, SiFigma],
      names: ["React", "Next.js", "Tailwind CSS", "Figma"],
      colors: ["#61DBFB", "#000000", "#38B2AC", "#F24E1E"],
    },
    {
      text: "Backend",
      icons: [SiSpringboot, SiDjango, SiMongodb, SiPostgresql, SiNodedotjs],
      names: ["Spring Boot", "Django", "MongoDB", "PostgreSQL", "Node.js"],
      colors: ["#6DB33F", "#092E20", "#47A248", "#336791", "#339933"],
    },
    {
      text: "App Dev",
      icons: [SiAndroid],
      names: ["Android"],
      colors: ["#3DDC84"],
    },
    {
      text: "Languages",
      icons: [SiTypescript, SiJavascript, SiPython, SiCplusplus, FaJava],
      names: ["TypeScript", "JavaScript", "Python", "C++", "Java"],
      colors: ["#3178C6", "#F7DF1E", "#306998", "#00599C", "#007396"],
    },
  ];

  return (
    <>
      <AnimatedText
        text="My Stack"
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-16 pt-16 pb-20"
      />
      {skills.map((stack) => (
        <Stack
          key={stack.text}
          text={stack.text}
          arr={stack.names}
          icons={stack.icons}
          colors={stack.colors}
        />
      ))}
    </>
  );
};

export default SkillsContent;
