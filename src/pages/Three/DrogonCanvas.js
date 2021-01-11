import React, { Suspense, memo } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import Drogon from "./Drogon";

const App = () => {
  const selected = (ref) => {
    return ref;
  };

  return (
    <Canvas
      camera={{
        position: [30, 700, 200],
        fov: 100,
      }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
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
      {/* <KeyLight brightness={5.6} color="#ffbdf4" /> */}
      <Suspense fallback={null}>
        <Drogon selected={selected} />
      </Suspense>
    </Canvas>
  );
};

export default memo(App);
