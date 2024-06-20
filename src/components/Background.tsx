import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Background = () => {
    const material = useRef<THREE.MeshBasicMaterial>(null)
    const data = useScroll()
    const tl =  useRef<gsap.core.Timeline | null>(null)
    const color = useRef({
        color: "#ececec"
    })
    
    useFrame(()=>{
        tl.current?.progress(data.offset)
        if (material.current) {
            material.current.color = new THREE.Color(color.current.color);
        }
    })
    useEffect(()=>{
        tl.current = gsap.timeline()
        tl.current.to(color.current, {
            color: "#c6c8ff",
          });
          tl.current.to(color.current, {
            color: "#f0f1ff",
          });
          tl.current.to(color.current, {
            color: "#eef7ff",
          });
    }, [])
    return <group>
        <Sphere scale={[30, 30, 30]}>
            <meshBasicMaterial 
                ref={material}
                side={THREE.BackSide}
                toneMapped={false}
            />
        </Sphere>
    </group>
}