import React from 'react'
import Experience from './Experience'
import { KeyboardControls } from '@react-three/drei'


export default function App() {
  return (
    <>
    <KeyboardControls     map={ [
        { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
        { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
        { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
        { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
        { name: 'jump', keys: [ 'Space' ] },
    ] }>
      <Experience />
      </KeyboardControls>
      
      </>
    
  )
}