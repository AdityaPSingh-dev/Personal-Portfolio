"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GithubIcon } from "./Icons";

const FramerImage = motion(Image);
interface FeaturedArticleProps {
  img: string | StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}
interface ProjectProps {
  title: string;
  type: string;
  img: StaticImageData;
  link: string;
  github: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  type,
  img,
  link,
  github,
}) => {
  return (
    <>
      <article className="w-full items-center justify-center rounded-2xl border border-solid border-dark lg:flex-col lg:p-8 xs:rounded 2xl xs:rounded-br-3xl xs:p-4 bg-light p-6 relative flex flex-row shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden dark:border-light sm:w-[80%] md:w-[70%]">
        {/* Link and Image Section */}
        <Link
          className="w-full flex flex-col items-start justify-between p-1"
          href={link}
          target="_blank"
        >
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={img}
              alt={title}
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
              priority={true}
              sizes="(max-width: 768px)100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>

        {/* Project Details */}
        <div className="w-full flex flex-col items-start justify-between pl-6 sm:pl-0">
          <span className="text-primary font-medium text-xl text-[#CEA2FD] dark:text-[#CEA2FD]">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-dark">
              {title}
            </h2>
          </Link>

          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon className="dark:bg-dark dark:rounded-full" />
            </Link>

            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:hover:bg-white dark:hover:text-black active:translate-x-[2px] active:translate-y-[2px]  transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-2 hover:border-black  active:shadow-none"
            >
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  img,
  title,
  time,
  summary,
  link,
}) => {
  return (
    <li className="col-span-1 p-4 bg-light border border-solid border-dark rounded-2xl relative w-full items-center justify-center shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden">
      <Link
        className="inline-block w-full items-start justify-between p-1"
        href={link}
        target="_blank"
      >
        <div className="relative w-full h-[45vh] overflow-hidden rounded-lg">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            priority={true}
            sizes="(max-width: 768px)100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline dark:text-dark xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-dark">{summary}</p>
      <span className="text-sm text-[#CEA2FD] font-semibold">{time}</span>
    </li>
  );
};
