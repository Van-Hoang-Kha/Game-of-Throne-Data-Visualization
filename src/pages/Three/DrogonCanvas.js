import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import Drogon from "./Drogon";

export default function App() {
  const selected = (ref) => {
    return ref;
  };

  return (
    <Canvas
      camera={{
        position: [-5, 3, 6],
        fov: 63,
      }}
    >
      <OrbitControls
        enablePan={Boolean("Pan", true)}
        enableZoom={false}
        enableRotate={Boolean("Rotate", true)}
      />
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      {/* <KeyLight brightness={5.6} color="#ffbdf4" /> */}
      <Suspense fallback={null}>
        <Drogon selected={selected} />
      </Suspense>
    </Canvas>
  );
}
