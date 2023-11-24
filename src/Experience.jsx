import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { OrbitControls} from '@react-three/drei'
import { Leva,useControls } from 'leva'

function Cube({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="lightgreen" />
    </mesh>
  )
}

function LightBulb() {
  return     <>
  <ambientLight intensity={0.1} />
  <pointLight position={[-2, 0, 1]} intensity={3} />
  <pointLight position={[0, 2, 1]} intensity={3} />
  <pointLight position={[2, 0, 1]} intensity={3} />
</>
}

export default function Experience() {
  const { x, y, z } = useControls({
    x: { value: 0, min: -5, max: 5, step: 0.01 },
    y: { value: 0, min: -5, max: 5, step: 0.01 },
    z: { value: 0, min: -5, max: 5, step: 0.01 },
  })
  return (
    <>
    <Leva collapsed />
    <Canvas style={{ background: 'lightblue' }}>
      <Perf position="top-left" />
      <OrbitControls />
      <Cube position={[x, y, z]}/>
      <LightBulb />
    </Canvas>
    </>
  )
}