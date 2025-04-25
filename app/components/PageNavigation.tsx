"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

const PageNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Define the order of pages
  const pages = useMemo(
    () => ["/", "/about", "/projects", "/skills", "/articles"],
    []
  );
  const currentIndex = pages.indexOf(pathname);
  const progress = ((currentIndex + 1) / pages.length) * 100; // Calculate progress percentage

  const navigateTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < pages.length) {
        router.push(pages[index]);
      }
    },
    [router, pages]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") navigateTo(currentIndex + 1);
      if (event.key === "ArrowLeft") navigateTo(currentIndex - 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, navigateTo]);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-300 z-20">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Left Button (Previous Page) */}
      {currentIndex > 0 && (
        <button
          onClick={() => navigateTo(currentIndex - 1)}
          className="fixed left-6 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-black
          border border-white/40 shadow-xl rounded-full w-16 h-16 flex items-center justify-center 
          transition-all duration-300 hover:scale-125 hover:bg-white/80 hover:border-white/70 hover:shadow-2xl sm:hidden z-20 "
        >
          <span className="text-3xl font-bold">←</span>
        </button>
      )}

      {/* Right Button (Next Page) */}
      {currentIndex < pages.length - 1 && (
        <button
          onClick={() => navigateTo(currentIndex + 1)}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-black
          border border-white/40 shadow-xl rounded-full w-16 h-16 flex items-center justify-center 
          transition-all duration-300 hover:scale-125 hover:bg-white/80 hover:border-white/70 hover:shadow-2xl sm:hidden z-20"
        >
          <span className="text-3xl font-bold">→</span>
        </button>
      )}
    </>
  );
};

export default PageNavigation;
