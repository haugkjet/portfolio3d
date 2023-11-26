// Shapes.jsx
import React from 'react'

export default function Shapes() {
    return(
        
        <group name="shapes">
        <mesh position={[-1,-1,-1]}>
            <sphereGeometry args={[0.5, 32, 32]}/>
            <meshStandardMaterial color='blue'/>  // Use basic material for simplicity
        </mesh>

        <mesh position={[1,1,1]}>
            <boxGeometry args={[1, 1, 1]}/>  
            <meshStandardMaterial color='red'/> 
        </mesh>
    </group>      

    )
}