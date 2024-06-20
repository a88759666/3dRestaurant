// Sandwich Character by Polygonal Mind
// "Fried egg sandwich" (https://skfb.ly/oxs6J) by leepaulart is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
import { useAnimations, useFaceControls, useFBX, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { GLTF } from 'three-stdlib'
import { Group, SkinnedMesh  } from 'three'

export type DreiGLTF = GLTF & {
    nodes: Record<string, SkinnedMesh>;
    materials: Record<string, THREE.MeshStandardMaterial>;
  }
interface AvatarProps {
  
}

export function Avatar(props:AvatarProps) {
    const group = useRef<Group | null>(null)
    const { nodes, materials } = useGLTF('/3dRestaurant/models/fried_egg_sandwich.glb')  as DreiGLTF

    

    return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.lambert2SG}
            />
          </group>
        </group>
    )
}

useGLTF.preload('/3dRestaurant/models/fried_egg_sandwich.glb')
