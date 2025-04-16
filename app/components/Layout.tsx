import React, { ReactNode } from "react";

// Define the types for the props
interface LayoutProps {
  children: ReactNode; // Children can be any valid React node
  className?: string; // className is optional
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-[#F2F3F2] px-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      <div className="pattern-diagonal-lines pattern-gray-900 pattern-bg-white pattern-size-1 pattern-opacity-5"></div>
      {children}
    </div>
  );
};

export default Layout;
