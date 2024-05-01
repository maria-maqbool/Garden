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
        <Aisle
          position={[garden.width, 0, 0]}
          scale={[1, 1, garden.height / 10]}
        />
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
      <boxGeometry args={[1, 0.3, 1]} />
      <meshBasicMaterial map={grass} />
    </mesh>
  );
};
const Plants = () => {
  const garden = useStateStore();
  return (
    <>
      {Array.from({ length: garden.garden.length }).map((_val, index) => {
        return (
          <DragControls
            dragLimits={[
              [-Infinity, Infinity],
              [0, 0],
              [-Infinity, Infinity],
            ]}
          >
            <Planter
              position={[garden.width, 0.6, 2 * index]}
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
