import React, { useEffect, useRef } from 'react'
import { useScroll } from '@react-three/drei'
import { Group } from 'three'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

interface CustomMesh extends THREE.Mesh {
    originalPosition: THREE.Vector3
    directionVector: THREE.Vector3
    targetPosition: THREE.Vector3
    originalRotation: THREE.Euler
    targetRotation: THREE.Euler
  }
export const useExplode = (groupRef: React.RefObject<Group | null>, {
    distance = 3,
    enableRotation = true
}) => {
    const group = useRef<Group | null>(null)
    useEffect(() => {
        const groupWorldPosition = new THREE.Vector3()
        group.current?.getWorldPosition(groupWorldPosition)
    
        group.current?.children.forEach((mesh)=>{
          const customMesh = mesh as CustomMesh;
    
          customMesh.originalPosition = mesh.position.clone()
          const meshWorldPosition = new THREE.Vector3()
          mesh.getWorldPosition(meshWorldPosition)
    
          customMesh.directionVector = meshWorldPosition.clone().sub(groupWorldPosition).normalize()

          customMesh.originalRotation =  mesh.rotation.clone()
          customMesh.targetRotation = new THREE.Euler(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          )
        })
    })

    useEffect(() => {
        const groupWorldPosition = new THREE.Vector3()
        group.current?.getWorldPosition(groupWorldPosition)
    
        group.current?.children.forEach((mesh)=>{
          const customMesh = mesh as CustomMesh;
          customMesh.targetPosition = customMesh.originalPosition.clone().add(customMesh.directionVector.clone().multiplyScalar(distance))
        })
    },[distance])

    const scrollData = useScroll()
    useFrame(()=>{
    group.current?.children.forEach((mesh) => {
        if( scrollData.offset < 0.0001){
        if (mesh.name === "origin"){
            mesh.visible = true
        } else {
            mesh.visible = false
        } 
        } else {
        if (mesh.name === "origin"){
            mesh.visible = false
        } else {
            mesh.visible = true
        } 
        }

        const customMesh = mesh as CustomMesh;
        customMesh.position.x = THREE.MathUtils.lerp(
        customMesh.originalPosition.x,
        customMesh.targetPosition.x,
        scrollData.offset
        )
        customMesh.position.y = THREE.MathUtils.lerp(
        customMesh.originalPosition.y,
        customMesh.targetPosition.y,
        scrollData.offset
        )
        customMesh.position.z = THREE.MathUtils.lerp(
        customMesh.originalPosition.z,
        customMesh.targetPosition.z,
        scrollData.offset
        )
    })
    })
}
