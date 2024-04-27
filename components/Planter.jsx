import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import useGardenStore from '@/stores/store'

export function Planter(props) {
  const { nodes, materials } = useGLTF('/planter.glb')
  const color = useGardenStore(state => state.color)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bergenia_Rotblum_Set065.geometry} material={materials['Sunflower_sf1hcdvf2.003']} scale={14.407} />
      <mesh geometry={nodes.Bergenia_Rotblum_Set067.geometry} material={materials['Sunflower_sf1hcdvf2.003']} scale={14.407} />
      <mesh geometry={nodes.Bergenia_Rotblum_Set069.geometry} material={materials['Sunflower_sf1hcdvf2.003']} scale={14.407} />
      <mesh geometry={nodes.Bergenia_Rotblum_Set070.geometry} material={materials['Sunflower_sf1hcdvf2.003']} scale={14.407} />
      <mesh geometry={nodes.Circle032.geometry} material={materials['Dry Soil.004']} scale={14.407} />
      <mesh geometry={nodes.Circle033.geometry}  scale={14.407} >
        <meshStandardMaterial side={THREE.DoubleSide} color={color} attach={'material'}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/planter.glb')
