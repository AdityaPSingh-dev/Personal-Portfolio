"use client";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-light">
      <h1 className="text-9xl font-extrabold text-dark tracking-widest">404</h1>
      <div className="px-2 text-sm rounded rotate-12 absolute bg-gradient-to-r from-[#B5B5B5] via-[#DEDEDE] to-[#F2F3F2] shadow-md opacity-100">
        Page Not Found
      </div>

      <Link
        href="/"
        className="mt-5 relative inline-block text-sm font-medium text-dark group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-dark group-hover:translate-y-0 group-hover:translate-x-0" />
        <span className="relative block px-8 py-3 bg-light border border-current">
          Go Home
        </span>
      </Link>
    </main>
  );
};

export default NotFound;
