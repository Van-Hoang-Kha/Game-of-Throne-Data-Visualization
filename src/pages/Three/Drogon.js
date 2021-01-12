import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import { useFrame } from "react-three-fiber";

export default function Drogon(props) {
  const { selected } = props;
  const group = useRef();

  selected(group);
  const { nodes, materials } = useGLTF("/scene.gltf");

  useFrame((state) => {
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
