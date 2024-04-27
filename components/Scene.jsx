'use client'
import useGardenStore from '@/stores/store'
import { Box, Environment, OrbitControls, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Scene = () => {
  const garden = useGardenStore();
  return (
    <div className='w-3/5 flex-grow'>
      <Canvas>
        <PresentationControls>

          <mesh scale={[garden.width / 10,  1, garden.height / 10]}>
            <boxGeometry args={[1, 0.1, 1]}/>
            <meshStandardMaterial color={'green'} />
          </mesh>

        </PresentationControls>
        <Environment preset='forest' />
      </Canvas>
    </div>
  )
}

export default Scene
