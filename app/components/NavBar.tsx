"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";
import { useScroll, useMotionValueEvent } from "framer-motion";

// import { MouseEvent as ReactMouseEvent } from "react";
// CustomLink component for navigation
const CustomLink = ({
  href,
  title,
  className = "",
  onClick,
}: {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} group relative`}
      onClick={onClick}
    >
      {title}
      {/* Underline effect */}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-all duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const [, setWindowWidth] = useState<number>(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest === 0);
    setIsVisible(latest < lastScrollY || latest < 100);
    setLastScrollY(latest);
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        animate={{
          width: isAtTop ? "100%" : "65%",
          y: isVisible ? (isAtTop ? 0 : 20) : -100,
          x: isAtTop ? 0 : "-50%",
          left: isAtTop ? 0 : "50%",
          top: isAtTop ? 0 : 20,
          scale: isAtTop ? 1 : 0.95,
          borderRadius: isAtTop ? "0rem" : "1.5rem",
          backgroundColor: isAtTop
            ? "rgba(255, 255, 255, 1)"
            : isVisible
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.1)",
          backdropFilter: isAtTop ? "none" : isVisible ? "none" : "blur(12px)",
          boxShadow: isAtTop
            ? "none"
            : isVisible
            ? "0 0 12px rgba(0, 0, 0, 0.06)"
            : "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 35,
        }}
        className="z-50 fixed px-8 py-4 text-dark dark:text-light overflow-hidden"
      >
        <nav className="flex items-center justify-between font-medium">
          {/* Logo */}
          <div className="flex-1 flex justify-start pb-2 mr-24 sm:mx-4">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="w-full flex justify-between items-center lg:hidden">
            <div className="flex flex-row">
              <CustomLink
                href="/"
                title="Home"
                className="mr-3 dark:text-dark"
              />
              <CustomLink
                href="/about"
                title="About"
                className="mx-3 dark:text-dark"
              />
              <CustomLink
                href="/projects"
                title="Projects"
                className="mx-3 dark:text-dark"
              />
              <CustomLink
                href="/skills"
                title="Expertise"
                className="mx-3 dark:text-dark"
              />
              <CustomLink
                href="/articles"
                title="Articles"
                className="mx-3 dark:text-dark"
              />
            </div>
            {/* Social Icons */}
            <div className="flex items-center ml-24">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://pinterest.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
              >
                <PinterestIcon />
              </motion.a>
              <motion.a
                href="https://dribbble.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 ml-3"
              >
                <DribbbleIcon />
              </motion.a>
              <ThemeButton />
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            title="Menu"
            type="button"
            ref={hamburgerRef}
            className="flex-col justify-center sm:mx-4 items-center w-auto p-3 hidden lg:flex fixed right-6 top-10 z-50"
            onClick={handleClick}
          >
            <span
              className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                isOpen ? "rotate-45 translate-y-2.5" : "-translate-y-0.5"
              }`}
            />
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
                isOpen ? "-rotate-45" : "translate-y-0.5"
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Hamburger Menu Content */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          ref={menuRef}
          className="flex-col justify-between items-center fixed top-[58.5%] sm:top-[55.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-screen-lg bg-dark/90 dark:bg-light/75 z-50 rounded-lg backdrop-blur-md py-32 px-8 text-light"
        >
          <div className="flex flex-col items-center justify-center">
            <CustomLink
              href="/"
              title="Home"
              className="mb-4 dark:text-dark"
              onClick={handleLinkClick}
            />
            <CustomLink
              href="/about"
              title="About"
              className="mb-4 dark:text-dark"
              onClick={handleLinkClick}
            />
            <CustomLink
              href="/projects"
              title="Projects"
              className="mx-3 mb-4 dark:text-dark"
              onClick={handleLinkClick}
            />
            <CustomLink
              href="/skills"
              title="Expertise"
              className="mx-3 mb-4 dark:text-dark"
              onClick={handleLinkClick}
            />
            <CustomLink
              href="/articles"
              title="Articles"
              className="mb-4 dark:text-dark"
              onClick={handleLinkClick}
            />
          </div>

          <div className="flex items-center justify-center mt-8">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://pinterest.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://dribbble.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <DribbbleIcon />
            </motion.a>
            <ThemeButton />
          </div>
        </motion.div>
      )}

      <div className="pt-20" />
    </>
  );
};

export default NavBar;
