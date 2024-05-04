import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useStateStore } from "@/stores/store";
import { Base } from "./Base";

export function Planter({ index, color, ...props }) {
  const { setActive } = useStateStore();
  return (
    <group position={[0, 1.3, 0]} {...props} onClick={() => setActive(index)}>
      {Array.from({ length: 5 }).map((_val, index) => {
        return (
          <SinglePlanter
            color={color}
            position={[0, index * 1.99 + 1, 0]}
            rotation={[0, index % 2 === 0 ? Math.PI / 4 : 0, 0]}
          />
          //
        //   <mesh scale={2}>
        //     <boxGeometry />
        //     <meshStandardMaterial color={color} />
        //   </mesh>
        );
      })}
      <Base position={[-0.3, 0, 0.2]} />
    </group>
  );
}

export function SinglePlanter({ color, ...props }) {
  const { nodes, materials } = useGLTF("/planter.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bergenia_Rotblum_Set065.geometry} material={materials["Sunflower_sf1hcdvf2.003"]} scale={14.407} />
      <mesh geometry={nodes.Bergenia_Rotblum_Set067.geometry} material={materials["Sunflower_sf1hcdvf2.003"]} scale={14.407} />
      <mesh geometry={nodes.Bergenia_Rotblum_Set069.geometry} material={materials["Sunflower_sf1hcdvf2.003"]} scale={14.407} />
      <mesh geometry={nodes.Bergenia_Rotblum_Set070.geometry} material={materials["Sunflower_sf1hcdvf2.003"]} scale={14.407} />
      <mesh geometry={nodes.Circle032.geometry} material={materials["Material.002"]} scale={14.407} />
      {/* <mesh geometry={nodes.Circle033.geometry} material={materials['Material.001']} scale={14.407} /> */}
      <mesh geometry={nodes.Circle033.geometry} scale={14.407}>
        <meshStandardMaterial side={THREE.DoubleSide} color={color} roughness={0.7} metalness={0.1} attach={"material"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/planter.glb");
