"use client";
import useGardenStore from "@/stores/store";
import {
  Box,
  Center,
  Environment,
  OrbitControls,
  PresentationControls,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Planter } from "./Planter";
import * as THREE from "three";

const Scene = () => {
  return (
    <div className="flex-grow w-3/5">
      <Canvas camera={{ position: [0, 10, 25] }}>
        <OrbitControls />
        <Plants />
        <Ground />

        <Environment preset="forest" />
      </Canvas>
    </div>
  );
};
const Ground = () => {
  const garden = useGardenStore();
  const grass = useTexture("/grass.jpg");
  return (
    <mesh scale={[garden.width, 1, garden.height]}>
      <boxGeometry args={[1, 0.3, 1]} />
      <meshBasicMaterial map={grass} />
    </mesh>
  );
};
const Plants = () => {
  const garden = useGardenStore();
  return (
    <>
      {Array.from({ length: garden.quantity }).map((_val, index) => {
        return <Planter position={[2 * index - ( garden.width / 2) + 1, 0.6, 0]} scale={0.4} />;
      })}
    </>
  );
};

export default Scene;
