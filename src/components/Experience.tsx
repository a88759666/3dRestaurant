import { MeshWobbleMaterial } from "@react-three/drei"
import { useControls } from "leva"
import { useState } from "react";
import { Avatar } from "./Avatar"
import { Background } from "./Background";
import Sandwich from "./Sandwich";


interface ExperienceProps {
  section: number;
  onSectionChange: (section: number) => void;
}


export const Experience:React.FC<ExperienceProps> = ({ 
  section,
  onSectionChange
}) => {

  return (
    <>
      <ambientLight intensity={1} />
      <Background />
      {/* <mesh scale={[3, 3, 3]} position={[-3, -1, -11]}>
        <boxGeometry />
        <MeshWobbleMaterial
          opacity={0.8}
          transparent
          factor={1}
          speed={5}
          color={"blue"}
        />
      </mesh> */}
      <Avatar /> 

    </>
  )
}
