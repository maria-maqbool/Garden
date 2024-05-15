"use client";
import { useStateStore } from "@/stores/store";
import { DragControls, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Ground from "./Ground";
import { Planter } from "./Planter";

const Scene = () => (
  <div className="flex-grow w-[70%] sm:w-[80%] md:w-[80%] lg:w-4/5 m-auto sm:m-auto md:m-auto lg:mr-[20%] -z-0">
    <Canvas camera={{ position: [100, 10, 0], zoom: 5 }}>
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
        if(index > garden.maxQuantity) return null; 
        const planterIndex = index * 3;
        if (planterIndex >= garden.height * row) {
          row += 1;
        }
        console.log(garden.maxQuantity);
        const xOffset = - row * 4 + garden.width / 2 ;
        let yOffset = planterIndex - row * garden.height;
        yOffset += garden.height / 2;

        return (
          <>{index < garden.maxQuantity && <DragControls axisLock={"y"}>
            <Planter position={[xOffset, 0.6, yOffset]} scale={planter.size * 0.4} color={planter.color} index={index} trolley={planter.trolley} />
          </DragControls>}</>
        );
      })}
    </>
  );
};

export default Scene;
