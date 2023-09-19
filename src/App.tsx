
import React from 'react';
import './App.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/box';
import Shoe from './components/Shoe-draco';
import { Chicken } from './components/Chicken';
import { Experience } from './components/Experience';
import { ScrollControls } from '@react-three/drei';

const App: React.FC = () => {
  return <>
    <div className='w-screen h-screen'>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30}}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  </>
}




// const App2: React.FC = () => {
//   return (
//     <Canvas shadows camera={{ position: [0, 0, 5], fov: 30}}>
//       {/* <ambientLight intensity={0.1} /> */}
//       {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
//       <color attach="background" args={["#ececec"]} />
//       {/* <mesh> */}
//         {/* <boxGeometry /> */}
//         {/* <meshStandardMaterial /> */}
//       <ScrollControls pages={4}>
//         <Experience />
//       </ScrollControls>
//       {/* </mesh> */}
//   </Canvas>
//   )
// }

export default App;