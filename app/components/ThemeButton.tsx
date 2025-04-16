"use client";

import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeButton = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <button
      onClick={() =>
        (setMode as (mode: string) => void)(mode === "light" ? "dark" : "light")
      }
      className="ml-6 flex items-center justify-center bg-dark text-light rounded-full h-7 w-7 p-1 md:w-10 md:h-10 md:bg-transparent md:ml-0  "
    >
      {mode === "dark" ? (
        <SunIcon className={"fill-dark"} />
      ) : (
        <MoonIcon className={"fill-dark"} />
      )}
    </button>
  );
};

export default ThemeButton;
