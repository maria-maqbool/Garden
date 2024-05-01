"use client";
import { useStateStore } from "@/stores/store";
import {
  DragControls,
  Environment,
  OrbitControls,
  Sky,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Planter } from "./Planter";

const Scene = () => {
  const garden = useStateStore();
  return (
    <div className="flex-grow w-5/5 -z-0">
      <Canvas camera={{ position: [0, 10, 45], zoom: 2 }}>
        <OrbitControls makeDefault />

        <Plants />
        {/* </DragControls> */}
        <Ground />
        <Sky />
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
};
const Aisle = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[10, 0.1, 10]} />
      <meshStandardMaterial color={"brown"} />
    </mesh>
  );
};
const Ground = () => {
  const garden = useStateStore();
  const grass = useTexture("/grass.jpg");
  return (
    <mesh scale={[garden.width, 1, garden.height]}>
      <boxGeometry args={[1, 0.6, 1]} />
      <meshBasicMaterial map={grass} />
    </mesh>
  );
};
const Plants = () => {
  const garden = useStateStore();
  return (
    <>
      {Array.from({ length: Math.min(garden.garden.length, garden.maxQuantity  + 1)}).map((_val, index) => {
        const scaledIndex = index * 2
        const xOffset = scaledIndex < garden.width ?  garden.width / 2: scaledIndex -  1.5 * garden.width ;
        const zOffset = scaledIndex < garden.height ?  scaledIndex - garden.height/ 2:  garden.height - (garden.height / 2) ;
        return (
          <DragControls
            dragLimits={[
              [-Infinity, Infinity],
              [0, 0],
              [-Infinity, Infinity],
            ]}
          >
            <Planter
              position={[xOffset, 0.6, zOffset]}
              scale={garden.garden[index].size * 0.4}
              color={garden.garden[index].color}
              index={index}
            />
          </DragControls>
        );
      })}
    </>
  );
};

export default Scene;
