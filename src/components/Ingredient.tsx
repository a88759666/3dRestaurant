import { INGREDIENTS, useSandwich } from "@/hooks/useSandwich"
import { Float, Gltf, Text3D, useGLTF } from "@react-three/drei"
import { Suspense, useEffect } from "react";
import { FontData } from '@react-three/drei'
import { animated, useSpring } from "@react-spring/three";

import fontPath from "@/assets/fonts/Poppins_Bold.json"

type IngredientKey = "bread" | "lettuce" | "mushroom" | "tomato" | "cheese" | "chicken" | "sausage" | "salami" | "bacon" | "patty";
interface Ingredient {
    src: string;
    price: number;
    icon: string;
}

interface IngredientProps {
  ingredient: {
    name: IngredientKey | string;
    id: number;
  }
  showPrice?: boolean
  position?: [number, number, number]
}
export const Ingredient: React.FC<IngredientProps> = ({
    ingredient,
    showPrice,
    position
}) => {
    const INGREDIENT_SCALE = 3;
    const INGREDIENT_SCALE_Y = 5;
    
    const removeIngredient = useSandwich((state) => state.removeIngredient)
    const addedToCart = useSandwich((state) => state.addedToCart)
    const { positionSpring } = useSpring({ positionSpring:position})
    const { scale } = useSpring({
        from: {
            scale: 0.4,
        },
        to: {
            scale: 1
        }

    })
    return <>
        <animated.group position={positionSpring} scale={scale}>
            {showPrice && (
                <Suspense>
                    <group
                        onClick={(e)=>{
                            e.stopPropagation()
                            removeIngredient(ingredient.id)
                        }}
                        visible={!addedToCart}
                        position-y={-0.07}
                        position-x={-0.07}
                    >
                        <mesh position-x={0.7} position-y={0.042}>
                            <planeGeometry args={[0.9, 0.16]} />
                            <meshStandardMaterial color="white" opacity={0.42} transparent />
                        </mesh>
                        <Text3D
                            font={fontPath  as any}
                            scale={0.1}
                            bevelSegments={3}
                            bevelEnabled
                            bevelThickness={0.001}
                            position-x={0.52}
                        >
                            ${INGREDIENTS[ingredient.name].price.toFixed(2)}
                            <meshBasicMaterial color="rgb(152, 152, 152)" />
                        </Text3D>
                        <Text3D
                            font={fontPath  as any}
                            scale={0.1}
                            bevelSegments={3}
                            bevelEnabled
                            bevelThickness={0.001}
                            position-x={0.96}
                        >
                            X
                            <meshBasicMaterial color="red" />
                        </Text3D>
                    </group>
                </Suspense>
            )}
            
            <Float
                floatingRange={addedToCart ? [0, 0] : [-0.01, 0.01]}
                speed={addedToCart ? 0 : 4}
                rotationIntensity={0.8}
            >
                <Gltf 
                    src={INGREDIENTS[ingredient.name].src}
                    scale={INGREDIENT_SCALE}
                    scale-y={INGREDIENT_SCALE_Y + (ingredient.name === 'bread' ? 5 : 0)}
                />
            </Float>
            
        </animated.group>
    </>
}