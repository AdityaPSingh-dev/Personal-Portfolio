import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import { AnimatedText } from "../components/AnimatedText";
import threejs from "../../public/assets/threejs.png";
import { FeaturedArticle } from "../components/FeaturedArticle";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Aditya| Articles Page</title>
      </Head>
      ;
      <main className="w-full  flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World"
            className="mt-16 mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl md:mb-8 xs:mb-4 text-center"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            <FeaturedArticle
              title="How to render a 3D model three-fiber and three-drei ?"
              time="4 min read"
              summary="The article guides you through rendering a 3D .glb model in a Next.js + TypeScript app using React Three Fiber and Drei. It covers setting up the scene, loading models with useGLTF, and adding camera controls with OrbitControls."
              link="https://medium.com/@adityapsingh559/how-to-render-a-3d-model-with-next-js-typescript-react-three-fiber-and-react-three-drei-b4efb962647b"
              img={threejs}
            />
            {/* <FeaturedArticle
              title="Words Can Change The World"
              time="1 min read"
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptate."
              link="_blank"
              img={Calculator}
            /> */}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center mt-32 mb-16 ">
            All Articles
          </h2>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
