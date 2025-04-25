import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import Calculator from "../../public/assets/Calculator.png";
import recipe from "../../public/assets/recipe.webp";
import unscramble from "../../public/assets/unscramble.webp";
import shopping from "../../public/assets/shopping.webp";
import ochi from "../../public/assets/ochidesign.webp";
import { Project } from "../components/FeaturedArticle";
import threejs from "../../public/assets/threejs.webp";
import localFont from "next/font/local";
const myFont2 = localFont({
  src: "../../public/fonts/just-sans-outline/JUST Sans Outline ExBold.otf",
  display: "swap",
  preload: true,
});

const Projects = () => {
  return (
    <>
      <Head>
        <title>APS | Projects</title>
        <meta
          name="Web Developer"
          content="Projects Section of the Portfolio"
        />
      </Head>

      <main className="w-full flex flex-col sm:items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mt-16 mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl md:mb-8 xs:mb-4 text-center text-7xl "
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-8 sm:gap-x-0 sm:gap-8">
            <div className="col-span-12 mb-6 flex justify-start items-center">
              <AnimatedText
                text="ANDROID DEVELOPMENT"
                className={`py-8 pr-16 sm:p-4 sm:pt-8 lg:!text-5xl sm:!text-4xl xs:!text-2xl lg:pl-0 !text-5xl ${myFont2.className} font-extrabold`}
              />
            </div>

            {/* Column 1 */}
            <div className="col-span-6 space-y-12 sm:col-span-12 md:col-span-12 sm:space-y-8 xs:space-y-8  grid place-items-center ">
              <Project
                title="Recipe App"
                img={recipe}
                link="/"
                github="https://github.com/AdityaPSingh-dev/MyrecipeScreen"
                type="Featured Project"
              />
              <Project
                title="Calculator"
                img={Calculator}
                link="/"
                github="https://github.com/AdityaPSingh-dev/MyCalculatorApp"
                type="Featured Project"
              />
            </div>

            {/* Column 2 */}
            <div className="col-span-6 space-y-12 sm:col-span-12 md:col-span-12 xs:space-y-8 sm:space-y-8  grid place-items-center ">
              <Project
                title="Unscramble App"
                img={unscramble}
                link="/"
                github="https://github.com/AdityaPSingh-dev/Unscramble"
                type="Featured Project"
              />
              <Project
                title="Shopping List App"
                img={shopping}
                link="/"
                github="https://github.com/AdityaPSingh-dev/MyShoppingList"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12 mb-6 flex justify-start items-center">
              <AnimatedText
                text="WEB DEVELOPMENT"
                className={`py-8 pr-16 sm:p-4 sm:pt-8 lg:!text-5xl ${myFont2.className} font-extrabold sm:!text-4xl xs:!text-2xl lg:pl-0 !text-5xl `}
              />
            </div>
            {/* Column 1 */}
            <div className="col-span-6 space-y-12 sm:col-span-12 md:col-span-12 xs:space-y-8 sm:space-y-8 grid place-items-center mb-16">
              <Project
                title="OchiDesign Website"
                img={ochi}
                link="https://aditya-ochidesignclone.netlify.app/"
                github="https://github.com/AdityaPSingh-dev/OchiDesign"
                type="Featured Project"
              />

              {/* <Project
                title="Calculator"
                img={Calculator}
                link="/"
                github="/"
                type="Featured Project"
              /> */}
            </div>

            {/* Column 2 */}
            <div className="col-span-6 space-y-12 sm:col-span-12 md:col-span-12 xs:space-y-8 sm:space-y-8 grid place-items-center mb-16">
              <Project
                title="Three JS"
                img={threejs}
                link="https://threejs-demo-xi-six.vercel.app/"
                github="https://github.com/AdityaPSingh-dev/threejsDemo"
                type="Featured Project"
              />
              {/* <Project
                title="Calculator"
                img={Calculator}
                link="/"
                github="/"
                type="Featured Project"
              /> */}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
