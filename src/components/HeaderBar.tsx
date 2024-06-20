import { SetStateAction, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Cart from "./Cart"

type Props = {
  setSection: (section: number) => void
  setOpen?:React.Dispatch<React.SetStateAction<boolean>>
  open?:boolean
  cartOpened: boolean;
  setCartOpened: (opened: boolean) => void;

}

const HeaderBar:React.FC<Props> = ({
  setSection,
  setOpen,
  open,
  cartOpened,
  setCartOpened
}) => {
  const [ scrolling, setScrolling ] = useState(false)
  const [ scrollTop, setScrollTop ] = useState(0)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  
  function handCliclkScroll(section:number) {
    if(setOpen){
      setOpen(!open)
      setSection(section)
    }
  }
  
  useEffect(() => {
    function onScroll(){
      let currentPosition = window.pageYOffset
      setScrollTop(currentPosition)
      if( scrollTop > 60){
        setScrolling(true)

      } else {
        setScrolling(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[scrollTop])

  return <>
    <header className={`
      ${
        scrolling === true ? 'bg-[#ffecb7] bg-opacity-80 animatecss animatecss-fadeInDown' : "animatecss animatecss-fadeInUp" 
      } flex flex-row w-screen justify-between items-center p-[30px]`}>
      <div>
      <motion.button
        onClick={()=>{setOpen && setOpen(!open)}}
        className="hidden text-[16px] font-medium cursor-pointer select-none md:block"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
      >
        MENU
      </motion.button>
      <motion.button
        onClick={()=>{setOpen && setOpen(!open)}}
        className="block text-[16px] font-medium cursor-pointer select-none md:hidden"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
      >
        <div className="flex flex-col gap-[6px]">
          <div className="w-[30px] h-[2px] bg-black"></div>
          <div className="w-[30px] h-[2px] bg-black"></div>
          <div className="w-[30px] h-[2px] bg-black"></div>
        </div>
      </motion.button>
      <motion.nav
        animate={open ? "open" : "closed"}
        variants={variants}
        transition={{duration: 0.5}}
        className={`open ? 'contents' : 'hidden'`}
        
      >
        <motion.div
          className="absolute top-[20px] bg-white z-50"
        >
          <ul className="px-[30px] py-[15px]">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mb-[15px] cursor-pointer"
              id="about"
              onClick={() => { handCliclkScroll(1) }}
            >ABOUT</motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mb-[15px] cursor-pointer"
              id="buy"
              onClick={()=>{ handCliclkScroll(2)}}
            >BUY</motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              id="connect"
              onClick={()=>{ handCliclkScroll(3)}}
            >CONNECT</motion.li>
          </ul>
        </motion.div>
      </motion.nav>
      </div>
      <div className="m-auto z-20">
        <h1 className="text-[16px] leading-[10px] font-bold">SANDWICH LOVER</h1>
      </div>
      <Cart cartOpened={cartOpened} setCartOpened={setCartOpened}/>
    </header>
  </>
};
    
export default HeaderBar;