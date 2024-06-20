import { useSandwich } from "@/hooks/useSandwich"
import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";
import { Ingredient } from "./Ingredient";


const Sandwich:React.FC = () => {
    const ingredients = useSandwich((state) => state.ingredients)
    const addedToCart = useSandwich((state) => state.addedToCart)
    const INGREDIENT_SPACING = 0.2
    const INGREDIENT_SPACING_FINAL = 0.09
    const ingredientSpacing = addedToCart
    ? INGREDIENT_SPACING_FINAL
    : INGREDIENT_SPACING;
    const sandwich = useRef<Group | null>(null)
    useFrame(() => {
        if (sandwich.current) {
            if (addedToCart) {
                sandwich.current.rotation.y += 0.01
            } else {
                sandwich.current.rotation.y = 0
            }
        }
    })
    
    return <>
          <Canvas shadows camera={{ position: [-2, 2.5, 5], fov: 30 }}>
            <ambientLight intensity={1} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

            <Suspense fallback={null}>
                <group position-y={(-ingredients.length * ingredientSpacing) /2}>
                    <group ref={sandwich}>
                        { 
                            ingredients.map((ingredient, index) => (
                                <Ingredient 
                                    key={ingredient.id + ingredient.name}
                                    showPrice={index > 0 && index < ingredients.length - 1 ? true : false}
                                    ingredient={ingredient}
                                    position={[0, index * ingredientSpacing, 0]}
                                />
                            ))
                        }
                    </group>
                   
                </group>
            </Suspense>
            <Environment preset="city" />

            <ContactShadows position-y={(-ingredients.length * ingredientSpacing) /2} opacity={0.9} />
            {/* <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" /> */}
        </Canvas>
    </>
}

export default Sandwich