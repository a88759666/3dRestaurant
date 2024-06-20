
import { motion, useMotionValue, useTransform, useSpring, useVelocity, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "@react-three/drei";


interface RotateProps {
    children: React.ReactNode;
    baseVelocity?: number;
    rotateDirection?: number
    section: number
}

const RotateByScroll:React.FC<RotateProps> = ({
    children,
    baseVelocity = 1,
    rotateDirection =1,
    section
}) => {
    const [ rotate, setRotate ] = useState(360)
    const [ opacity, setOpacity ] = useState(1)
    const ref = useRef<HTMLDivElement>(null)
    const data = useScroll();
   
    const updateRotation = () => {
        if (section === 0) {
            setRotate(180 * rotateDirection * baseVelocity)
            setOpacity(1)
        } else if (ref.current && section > 0) {
            setRotate(data.offset * 1000000 * rotateDirection * baseVelocity)
            setOpacity(1 - data.offset * 200000)
        }
    }
    
    useEffect(() => {
        updateRotation()
     }, [section]);
   
    return <>
        <div>
            <motion.div 
                key={section}
                ref={ref}
                animate={{ rotate: rotate, opacity: opacity }}
                transition={{ 
                  ease: "linear",
                  duration: section === 0 ? 4 : 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
            >
                {children}
            </motion.div>
        </div>
    </>
}

export default RotateByScroll