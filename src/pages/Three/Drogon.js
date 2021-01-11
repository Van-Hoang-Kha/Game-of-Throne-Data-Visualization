import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import { useFrame } from "react-three-fiber";

export default function Moon(props) {
  const { selected } = props;
  const group = useRef();

  selected(group);
  const { nodes, materials } = useGLTF("/drogon.gltf");

  console.log(materials, nodes);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 4;
    group.current.rotation.y = Math.sin(t / 4) / 8;
  });

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        {/* <mesh
          material={materials.material}
          position={[0, 0, 0]}
          geometry={nodes.Cube.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        />
        <mesh
          material={materials.Keyboard}
          position={[0, 0, 0]}
          geometry={nodes.Cube_Keyboard_0.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        />
        <mesh
          material={materials.material}
          position={[0, 0, 0]}
          geometry={nodes.Cube_PC_0.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        />
        <mesh
          material={materials.Screen}
          position={[0, 0, 0]}
          geometry={nodes.Cube_Screen_0.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        />
        <mesh
          material={materials.LightMat}
          position={[0, 0, 0]}
          geometry={nodes.Cube_LightMat_0.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        /> */}
      </group>
    </>
  );
}
