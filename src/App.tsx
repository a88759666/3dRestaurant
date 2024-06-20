
import React, { Suspense, useEffect, useState } from 'react';
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience';
import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Interface } from './components/Interface';
import { ScrollManager } from './components/ScrollManager';
import HeaderBar from './components/HeaderBar';


const App: React.FC = () => {
  const [ section, setSection] = useState(0)
  const [ open, setOpen] = useState(false);
  const [ cartOpened, setCartOpened] = useState(false);
 
  return <>
    <div className='w-screen h-screen relative'>
      <div className="fixed top-0 z-50">
        <HeaderBar
          setSection={setSection}
          setOpen={setOpen}
          open={open}
          cartOpened={cartOpened}
          setCartOpened={setCartOpened}
        />
      </div>
      <Canvas shadows camera={{ position: [-2, 2.5, 5], fov: 30}}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4}>
        <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Experience  section={section} onSectionChange={setSection}/>
          </Scroll>
          <Scroll html>
            <Interface setSection={setSection} section={section}/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  </>
}


export default App;