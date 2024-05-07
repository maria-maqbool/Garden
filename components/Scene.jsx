"use client";
import { useStateStore } from "@/stores/store";
import { DragControls, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Ground from "./Ground";
import { Planter } from "./Planter";

const Scene = () => (
  <div className="flex-grow w-4/5 -z-0">
    <Canvas camera={{ position: [20, 10, 45], zoom: 2.6 }}>
      {/* <Stats /> */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 3} />

      <Plants />
      <Ground />
      <Environment preset="forest" />
    </Canvas>
  </div>
);

const Plants = () => {
  const garden = useStateStore();
  let row = 1;
  return (
    <>
      {garden.garden.map((planter, index) => {
        const planterIndex = index * 2;
        if (planterIndex - 2 >= garden.height * row) {
          row = row + 1;
        }
        const xOffset =  -garden.width - row * 4 + garden.width / 4 ;
        let yOffset = planterIndex - row * garden.height;
        yOffset += garden.height / 2

        return (
          <DragControls
            dragLimits={[
              [-Infinity, Infinity],
              [0, 0],
              [-Infinity, Infinity],
            ]}
          >
            <Planter position={[xOffset, 0.6, yOffset]} scale={planter.size * 0.4} color={planter.color} index={index} trolley={planter.trolley} />
          </DragControls>
        );
      })}
    </>
  );
};

export default Scene;
