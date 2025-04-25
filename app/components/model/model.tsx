"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Man"; // Assuming Model is a custom 3D model component.

const ModelWithShadows = () => {
  return (
    <div className="w-[150vh] h-[120vh] md:w-full flex justify-center items-center md:inline-block lg:hidden mt-4 md:mt-0 md:h-[60vh] md:mr-20 overflow-hidden touch-auto">
      <Canvas
        className=""
        style={{ touchAction: "pan-y" }}
        camera={{ position: [0, 3, 10], fov: 35, near: 0.1, far: 20 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Environment preset="sunset" />
        <OrbitControls
          makeDefault
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
        <Model scale={5} position={[0, -7, 0]} />
      </Canvas>
    </div>
  );
};

export default ModelWithShadows;
