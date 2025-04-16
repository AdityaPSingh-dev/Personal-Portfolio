import Head from "next/head";
import { AnimatedText, AnimatedNumbers } from "../components/AnimatedText";
import Layout from "../components/Layout";
import profilePic from "../../public/profilePic.webp";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>APS | About</title>
        <meta name="Web Developer" content="About Section of the Portfolio" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl pt-16 sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4  md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Aditya Pratap Singh — a mechanical engineer by
                degree, designer-developer by destiny. Hailing from the hills of
                Dehradun and shaped by the corridors of IIT Dhanbad, I took a
                sharp turn from machines to mockups, and I&apos;ve never looked
                back.
              </p>
              <p className="my-4 font-medium">
                What began as doodles in the margins of lecture notes evolved
                into a full-blown obsession with clean design, elegant code, and
                building digital experiences that just feel right. Now, as a
                freelancer, I fuse structure with creativity, logic with
                aesthetics — and throw in just the right amount of controlled
                chaos.
              </p>
              <p className="font-medium">
                Whether it&apos;s crafting smooth interactions or solving pixel
                puzzles, I&apos;m here to make things that work beautifully and
                look even better. Let&apos;s build something a little unexpected
                — and a lot unforgettable.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 md:order-1 md:col-span-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.4rem] bg-dark dark:bg-light xl:col-span-4" />
              <Image
                src={profilePic}
                alt="APS"
                className="w-full h-auto rounded-2xl "
                priority={true}
                sizes="(max-width: 768px)100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center  md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
