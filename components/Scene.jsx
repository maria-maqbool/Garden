"use client";
import { useStateStore } from "@/stores/store";
import { DragControls, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState} from "react";
import Ground from "./Ground";
import { Planter } from "./Planter";

const Scene = () => {

  const [zoom, setZoom] = useState(getZoomLevel());


    const handleResize = () => {
      setZoom(getZoomLevel());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      
    }
 
  function getZoomLevel() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 3; 
      if (width < 1024) return 5; 
      return 7;
    }
    return 7; 
  }


return(
  <div className="flex-grow w-[100%] sm:w-[100%] md:w-[100%] lg:w-4/5 m-auto sm:m-auto md:m-auto lg:mr-[20%] -z-0 h-full">
    <Canvas camera={{ position: [100, 10, 0], zoom: zoom }} key={zoom}>
      {/* <Stats /> */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 3} />

      <Plants />
      <Ground />

      <Environment preset="forest" />
    </Canvas>
  </div>
)};

const Plants = () => {
  const garden = useStateStore();
  let row = 1;
  return (
    <>
      {garden.garden.map((planter, index) => {
        // if(index > garden.maxQuantity) return null; 
        const planterIndex = index * 3;
        if (planterIndex >= garden.height * row) {
          row += 1;
        }
        const xOffset = - row * 4 + garden.width / 2;
        let yOffset = planterIndex - row * garden.height;
        yOffset += -1 + garden.height / 2;

        return (
          <>{index < garden.maxQuantity && <DragControls axisLock={"y"}>
            {index}
            <Planter position={[xOffset, 0.6, yOffset]} scale={planter.size * 0.4} color={planter.color} index={index} trolley={planter.trolley} />
          </DragControls>}</>
        );
      })}
    </>
  );
};

export default Scene;
