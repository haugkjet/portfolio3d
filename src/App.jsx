import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

function App() {
  return (
    
<Canvas>
<Experience />
       
</Canvas>
    
  )
}

//createRoot(document.getElementById('root')).render(<App />)
export default App
