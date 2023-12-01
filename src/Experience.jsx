import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { OrbitControls} from '@react-three/drei'
import { Leva,useControls } from 'leva'
import Shapes from './Shapes'
import Lights from './Lights'
import Level from './Level'
import Player from './Player'
import { Physics, RigidBody } from '@react-three/rapier'
import Interface from './Interface.jsx'

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
    <Canvas shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2.5, 4, 6 ]
        } } style={{ background: 'lightblue' }}>
      <Perf position="top-left" />
      {/*<OrbitControls />*/}
      <Physics debug={false}>
      <Lights />
      {/*<Cube position={[x, y, z]}/>
      <LightBulb />
  <Shapes/>*/}
  <Level/>
  <Player />
  </Physics>



    </Canvas>
    <Interface />
    </>
  )
}