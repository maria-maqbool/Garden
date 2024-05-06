"use client";
import { useStateStore } from "@/stores/store";
import { useGLTF, DragControls, Environment, OrbitControls, RoundedBox, Sky, Stats, useTexture } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import React from "react";
import { Planter } from "./Planter";
import Ground from "./Ground";
import { BoxGeometry, Mesh, MeshNormalMaterial, MeshStandardMaterial } from "three";

const Scene = () => {
  return (
    <div className="flex-grow w-4/5 -z-0">
      <Canvas camera={{ position: [0, 10, 45], zoom: 2 }}>
        <Stats />
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 3} />

        <Plants />
        <Ground />
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
};

const Plants = () => {
  const garden = useStateStore();
  return (
    <>
      {garden.garden.map((planter, index) => {
        const scaledIndex = index * 2;
        const xOffset = scaledIndex < garden.width ? garden.width / 2 : scaledIndex - 1.5 * garden.width;
        const zOffset = scaledIndex < garden.height ? scaledIndex - garden.height / 2 : garden.height - garden.height / 2;
        return (
          <DragControls
            dragLimits={[
              [-Infinity, Infinity],
              [0, 0],
              [-Infinity, Infinity],
            ]}
          >
            <Planter position={[xOffset, 0.6, zOffset]} scale={planter.size * 0.4} color={planter.color} index={index} trolley={planter.trolley} />
          </DragControls>
        );
      })}
    </>
  );
};

// const Plants = () => {
//   const {scene} = useThree();
//   const { nodes, materials } = useGLTF("/planter.glb");
//   const mesh = useLoader(GLTF)
//   console.log(nodes)
//   return null;
// }
export default Scene;
