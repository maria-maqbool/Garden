'use client'
import { Box, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Scene = () => {
  return (
    <div className='w-3/4 flex-grow'>
      <Canvas>
        <OrbitControls/>
        <Box/>
      </Canvas>
    </div>
  )
}

export default Scene
