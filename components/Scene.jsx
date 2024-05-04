"use client";
import { useStateStore } from "@/stores/store";
import { Cloud, Clouds, DragControls, Environment, OrbitControls, RoundedBox, Sky, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Planter } from "./Planter";
import { Fern } from "./models/Fern";
import { Weed } from "./models/Weed";
import { Shrub } from "./models/Shrub";

const Scene = () => {
  const garden = useStateStore();
  return (
    <div className="flex-grow w-5/5 -z-0">
      <Canvas camera={{ position: [0, 10, 45], zoom: 2 }}>
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 3}/>

        <Plants />
        {/* </DragControls> */}
        <Ground />
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
  const { width, height } = useStateStore();
  const terrain = useStateStore(state => state.terrain);
  const grass = useTexture({
    map: `/textures/${terrain}/diff.jpg`,
    displacementMap: `/textures/${terrain}/disp.jpg`,
    roughnessMap: `/textures/${terrain}/rough.jpg`,
    aoMap: `/textures/${terrain}/ao.jpg`,
    normalMap: `/textures/${terrain}/nor.jpg`,
  });
  return (
    <>
      <mesh /* scale={[width, 1, height]} */ rotation={[-Math.PI /2, 0, 0]}>
        <planeGeometry args={[width, height, 100, 100]} />
        <meshStandardMaterial {...grass} />
      </mesh>
      {/* <group position={[-width / 2, 1, -height / 2]} scale={1}> */}
      {/*   {Array.from({ length: 5 }).map((_val, index) => { */}
      {/*     return ( */}
      {/*       <> */}
      {/*         <Fern */}
      {/*           position={[Math.random() * width, 0, Math.random() * height]} */}
      {/*           rotation={[0,  Math.random() * Math.PI * 2,0]} */}
      {/*         /> */}
      {/*         <Shrub */}
      {/*           position={[Math.random() * width, 0, Math.random() * height]} */}
      {/*           rotation={[0,  Math.random() * Math.PI * 2,0]} */}
      {/*         /> */}
      {/**/}
      {/*         <Weed */}
      {/*           position={[Math.random() * width, 0, Math.random() * height]} */}
      {/*           rotation={[0,  Math.random() * Math.PI * 2,0]} */}
      {/*         /> */}
      {/*       </> */}
      {/*     ); */}
      {/*   })} */}
      {/* </group> */}
    </>
  );
};
const Plants = () => {
  const garden = useStateStore();
  return (
    <>
      {Array.from({
        length: Math.min(garden.garden.length, garden.maxQuantity + 1),
      }).map((_val, index) => {
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
            <Planter position={[xOffset, 0.6, zOffset]} scale={garden.garden[index].size * 0.4} color={garden.garden[index].color} index={index} />
          </DragControls>
        );
      })}
    </>
  );
};

export default Scene;
