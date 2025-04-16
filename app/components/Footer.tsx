"use client";
import Layout from "./Layout";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { Roboto, Roboto_Slab } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["600"],
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

export const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown Trigger with Arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" justify-center px-2 py-1 border-2 border-black dark:border-black uppercase bg-white text-neutral-700 
             transition-all duration-300 text-lg font-bold shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
             dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] 
             hover:bg-gray-400 hover:text-white dark:hover:bg-gray-400 dark:hover:text-black 
             active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0)] 
             dark:active:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255)] flex items-center gap-2 md:text-base sm:text-sm md:p-2 md:px-4 sm:p-1 sm:px-2"
      >
        Connect with Me
        {/* Arrow Icon (Rotates when open) */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 bg-white dark:bg-black border border-black dark:border-white shadow-lg rounded-lg p-3"
          >
            <nav className="flex flex-col items-start space-y-2">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <TwitterIcon /> <span>Twitter</span>
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 hover:text-gray-800"
              >
                <GithubIcon /> <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 hover:text-blue-700"
              >
                <LinkedInIcon /> <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 hover:text-red-600"
              >
                <PinterestIcon /> <span>Pinterest</span>
              </motion.a>
              <motion.a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 hover:text-pink-500"
              >
                <DribbbleIcon /> <span>Dribbble</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div
        className={`flex-col gap-0 lg:w-full lg:justify-center lg:text-center w-full text-8xl px-32 font-semibold ${robotoSlab.className} my-12 border-t-2 border-solid border-dark py-24 bg-[#F2F3F2] dark:bg-dark dark:text-light dark:border-light xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl`}
      >
        <h1 className="leading-none">Turning ideas into reality</h1>

        <div className="flex items-end gap-0 lg:w-full lg:justify-center lg:text-center">
          <h1 className="text-6xl text-red-600 xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl ">
            alex.jordan@email.com
          </h1>
        </div>
      </div>
      <footer className="w-full border-t-2 border-solid border-dark font-medium text-md dark:border-light z-10 ">
        <Layout
          className={`py-12 flex items-center ${roboto.className}  justify-between w-full lg:flex-col lg:py-6 sm:text-base `}
        >
          <span className="flex-1 text-center text-gray-400">
            <i>{new Date().getFullYear()} &copy; All Rights Reserved </i>
          </span>
          <div className="flex-1 text-left lg:py-6 font-light ">
            <Link href="/">
              I&apos;m passionate about developing efficient and scalable
              solutions that truly make an impact. With a keen eye for design
              and a strong technical foundation, I ensure every project is
              well-crafted, tested, and built to last.
            </Link>
          </div>

          {/* 🔹 FIX: Wrap DropdownMenu in a div instead of Link */}
          <div className="flex flex-col px-32 items-end sm:flex-row md:flex-row ">
            <div className="flex items-center justify-center ">
              <p className="font-extralight italic sm:hidden md:hidden">X :</p>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 my-2 mx-2 "
              >
                <TwitterIcon />
              </motion.a>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-extralight italic sm:hidden md:hidden ">
                GitHub :
              </p>
              <motion.a
                href="https://github.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 my-2 mx-2"
              >
                <GithubIcon />
              </motion.a>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-extralight italic sm:hidden md:hidden">
                LinkedIn :
              </p>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 my-2 mx-2"
              >
                <LinkedInIcon />
              </motion.a>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-extralight italic sm:hidden md:hidden">
                Pinterest :
              </p>
              <motion.a
                href="https://pinterest.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 my-2 mx-2"
              >
                <PinterestIcon />
              </motion.a>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-extralight italic sm:hidden md:hidden">
                Dribbble :
              </p>
              <motion.a
                href="https://dribbble.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 my-2 mx-2"
              >
                <DribbbleIcon />
              </motion.a>
            </div>
          </div>
        </Layout>
        <div className="bottom-0 left-0 w-full h-auto overflow-hidden z-10">
          <div className="h-full translate-y-1/4 flex justify-center items-center px-6 sm:px-10 md:px-20 lg:px-28">
            <h1 className="glass-text font-extrabold opacity-80 text-9xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl whitespace-nowrap text-center">
              Developer.&nbsp;Designer.
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
// Let’s Build Something Great Together
// 📧 brian@domain.com
