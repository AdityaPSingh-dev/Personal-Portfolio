import Layout from "./components/Layout";
import { AnimatedText } from "./components/AnimatedText";
import { Roboto } from "next/font/google";
import Link from "next/link";
import HireMe from "./components/HireMe";
import Model from "./components/model/model"; // Direct import
import Head from "next/head";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

const myFont2 = localFont({
  src: "../public/fonts/just-sans-outline/JUST Sans Outline ExBold.otf",
  display: "swap",
  preload: true,
});
// Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Home() {
  return (
    <>
      {/* Set Cache-Control headers and optimize assets */}
      <Head>
        <meta httpEquiv="Cache-Control" content="max-age=31536000, immutable" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light overflow-hidden md:h-auto">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col md:flex-col-reverse">
            <div className="w-2/5 flex flex-col items-center self-center sm:w-full sm:p-2">
              <div className="flex flex-col self-start mt-2">
                <div className="flex-col items-end gap-0 lg:w-full lg:justify-center lg:text-center">
                  <AnimatedText
                    text="Aditya"
                    className={`!text-left font ${myFont2.className} xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl font-extrabold `}
                  />

                  <AnimatedText
                    text="Singh"
                    className={`!text-left font ${openSans.className} xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl font-extralight mb-2`}
                  />
                  <p
                    className={`${roboto.className} pt-6 md:text-sm sm:text-xs`}
                  >
                    Engineer turned creative technologist, blending precision
                    with playful design to build experiences that stick.
                  </p>
                </div>
              </div>

              <hr />
              <div className="flex items-center self-start p-10 mt-2 pl-8 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  download
                  className="flex items-center justify-center px-8 py-2 border-2 border-black uppercase bg-white text-neutral-700
                    transition-all duration-300 text-lg font-bold shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
                    dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] 
                    hover:bg-gray-500 hover:text-white dark:hover:bg-gray-500 dark:hover:text-white
                    active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0)] 
                    dark:active:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255)] md:text-base sm:text-sm md:p-2 md:px-4 sm:p-1 sm:px-2"
                >
                  Resume
                </Link>

                <Link
                  href="mailto:W3oP0@example.com"
                  target={"_blank"}
                  className="flex items-center justify-center px-8 py-2 border-2 border-black dark:border-black uppercase bg-white text-neutral-700 
                    transition-all duration-300 text-lg font-bold shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
                    dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] 
                    hover:bg-gray-500 hover:text-white dark:hover:bg-gray-500 dark:hover:text-white 
                    active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0)] 
                    dark:active:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255)] ml-4 md:text-base sm:text-sm md:p-2 md:px-4 sm:p-1 sm:px-2"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-full h-auto lg:hidden transform-none md:inline-block md:w-full md:ml-0 sm:ml-0 ml-16">
              <Model />{" "}
              {/* Direct import and rendering of the Model component */}
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
