import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import { useFrame } from "react-three-fiber";

export default function Drogon(props) {
  const { selected } = props;
  const group = useRef();

  selected(group);
  const { nodes, materials } = useGLTF("/scene.gltf");

  console.log(materials.Default, nodes.Default.geometry);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 4;
    // group.current.rotation.x = Math.sin(t / 4) / 8;
    // group.current.rotation.z = Math.sin(t / 4) / 1;
    group.current.rotation.z += 0.01;
  });

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          material={materials.Default}
          position={[0, 0, 0]}
          geometry={nodes.Default.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        />
      </group>
    </>
  );
}
