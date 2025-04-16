"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bungee_Outline } from "next/font/google";
const londrinaShadow = Bungee_Outline({
  subsets: ["latin"],
  weight: ["400"],
});
const MotionLink = motion.create(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className={`w-16 h-16 ${londrinaShadow.className}  bg-dark text-light flex items-center justify-center rounded-tl-lg rounded-br-lg text-2xl font-bold`}
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        APS
      </MotionLink>
    </div>
  );
};

export default Logo;
