import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    
        <Canvas>
<mesh>
    <sphereGeometry args={ [ 1.5, 32, 32 ] } />
    <meshBasicMaterial color="mediumpurple" wireframe />
</mesh>        </Canvas>
    
  )
}

//createRoot(document.getElementById('root')).render(<App />)
export default App
