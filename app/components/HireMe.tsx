import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-50">
      <div className="w-28 h-auto flex items-center justify-center relative md:w-14">
        <CircularText className=" animate-spin-slow dark:fill-light" />
        <Link
          target={"_blank"}
          href="https://www.upwork.com/freelancers/~01f6a6f72218f2162b?mp_source=share"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark w-20 h-20 rounded-full text-white hover:bg-red-500 hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-red-500 dark:hover:text-light md:w-10 md:h-10 md:text-[10px]"
        >
          HIRE ME
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
