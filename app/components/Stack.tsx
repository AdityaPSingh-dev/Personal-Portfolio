"use client";

import React, { FC } from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import localFont from "next/font/local";
const myFont2 = localFont({
  src: "../../public/fonts/just-sans-outline/JUST Sans Outline Regular.otf",
});

interface StackProps {
  className?: string;
  colors?: string[];
  text: string;
  arr: string[];
  icons: IconType[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const Stack: FC<StackProps> = ({
  className = "",
  colors = [],
  text,
  arr,
  icons,
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full flex flex-col gap-8 mb-16"
      aria-label={`${text} stack section`}
    >
      <h2
        className={`text-6xl sm:text-4xl md:text-5xl font-bold w-full lg:w-[220px] sm:text-center ${className} ${myFont2.className}`}
      >
        {text}
      </h2>

      <motion.div
        className={`grid ${
          arr.length <= 2
            ? "grid-cols-2 sm:grid-cols-3"
            : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        } gap-y-8 gap-x-4 w-full`}
        variants={containerVariants}
      >
        {arr.map((item, index) => {
          const Icon = icons[index];

          return (
            <motion.div
              key={item}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              {Icon && (
                <Icon
                  aria-label={item}
                  className="text-black dark:text-white w-14 h-14 md:w-12 md:h-12 lg:w-16 lg:h-16"
                  style={{ fill: colors[index] || "#ffffff" }}
                />
              )}
              <p className="text-xs sm:text-sm font-medium text-black dark:text-white break-words max-w-[80px] sm:p-2">
                {item}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};
