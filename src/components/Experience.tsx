import { Environment, Float, OrbitControls } from "@react-three/drei";
import Banana from "./Banana";
import Heart from "./Heart";
import Shoe from "./Shoe-draco";
import { useControls } from 'leva'

export const Experience = () => {
  const { item } = useControls({
    item: {
      value: "heart",
      options: ["heart", "banana"]
    }
  })
  return (
    <>
      <OrbitControls enableZoom={false}/>
      <Float floatIntensity={2} speed={3}>
        { item === "heart" && <Heart scale={0.5}/> }
        { item === "banana" && <Banana scale={0.3}/> }
        
      </Float>
      <Environment preset="sunset" background blur={0.4} />
    </>
  );
};
