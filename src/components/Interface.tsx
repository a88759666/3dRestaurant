
import { motion } from "framer-motion"
import logo from "@/assets/images/logo.png"
import logo2 from "@/assets/images/logo2.png"
import egg from "@/assets/images/egg.png"
import egg2 from "@/assets/images/egg2.png"
import egg3 from "@/assets/images/egg3.png"
import egg4 from "@/assets/images/egg4.png"
import egg5 from "@/assets/images/egg5.png"
import { useEffect, useState } from "react"
import Sandwich from "./Sandwich"
import { INGREDIENTS, useSandwich } from "@/hooks/useSandwich"
import { Button } from "./Button"
import RotateByScroll from "./RotateByScroll"


type IngredientKey = "bread" | "lettuce" | "mushroom" | "tomato" | "cheese" | "chicken" | "sausage" | "salami" | "bacon" | "patty";


interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <motion.section
      className="h-screen w-screen p-8 max-w-screen-3xl mx-auto flex flex-col items-center justify-center relative"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

interface InterfaceProps {
  section: number
  setSection: (section: number) => void;
}

export const Interface: React.FC<InterfaceProps> = ({
  setSection,
  section
}) => {
  return (
    <div> 
      <div className="flex flex-col w-screen">
        <HomeSection setSection={setSection} section={section}/>
        <AboutSection />
        <RestaurantSection />
        <ContactSection />
      </div>
    </div>
   
  );
};
interface HomeBgProps {
  section: number
}

const HomeBg:React.FC<HomeBgProps> = ({
  section
}) => {
  const [scale, setScale] = useState({
    egg: '70%',
    egg2: '50%',
    egg3: '75%',
    egg4: '50%',
    egg5: '70%'
  })
  
  const updateScale = () => {
    const width = window.innerWidth
    setScale({
      egg: `${(width / 2000) * 65}%`,
      egg2: `${(width / 2000) * 45}%`,
      egg3: `${(width / 2000) *65}%`,
      egg4: `${(width / 2000) * 45}%`,
      egg5: `${(width / 2000) *65}%`
    });
  }

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [])

  return <>
    <div className="">
      <div className="absolute bottom-0 left-0 select-none" style={{ transform: `scale(${scale.egg})` }} >
        <RotateByScroll rotateDirection={-1} section={section} baseVelocity={1}>
          <img src={egg} />
        </RotateByScroll>
      </div>
      <div className="absolute top-[10vh] left-0" style={{ transform: `scale(${scale.egg2})` }}>
        <RotateByScroll rotateDirection={-1} section={section}  baseVelocity={2}>
          <img src={egg2} />
        </RotateByScroll>
      </div>
      <div className="absolute top-0 right-0" style={{ transform: `scale(${scale.egg3})` }}>
        <RotateByScroll section={section}  baseVelocity={2.5}>
          <img src={egg3} />
        </RotateByScroll>
      </div>
      <div className="absolute top-[25vh] left-[20vh]" style={{ transform: `scale(${scale.egg4})` }}>
        <RotateByScroll section={section}  baseVelocity={2}>
          <img src={egg4} />
        </RotateByScroll>
      </div>
      <div className="absolute bottom-[15vh] right-[20vh]" style={{ transform: `scale(${scale.egg5})`}}>
        <RotateByScroll rotateDirection={-1} section={section}  baseVelocity={2.5}>
          <img src={egg5} />
        </RotateByScroll>
      </div>
    </div>
  </>
}

interface HomeSectionProps {
  section: number
  setSection: (section: number) => void;
}

const HomeSection:React.FC<HomeSectionProps> = ({ setSection, section }) => {
  return <>
    <Section>
      <HomeBg section={section}/>

      <div className="w-[30%] flex flex-col items-center justify-center select-none">
        <h1 className="text-[40px] font-bold">いらっしゃいませ</h1>
        <div className="flex flex-row items-center justify-center w-[70%]">
          <h1 className="text-[180px] font-extrabold leading-[240px]">50</h1>
          <div>
            <img src={logo} className="min-w-[140px]"/>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[80px] font-extrabold leading-[70px]">T</h1>
            <h1 className="text-[80px] font-extrabold leading-[70px]">H</h1>
          </div>
        </div>
        <h1 className="text-[60px] font-extrabold leading-[48px]">SANDWICHES<br></br>LOVER<span className="text-[24px]">SINCE 1998</span></h1>
      </div>

      <div 
        className="absolute bottom-[10vh] left-[50%] -translate-x-[50%] w-[6vh] h-[6vh] select-none"
        onClick={() => { setSection(1) }}
      >
        <motion.button
          className="outline-dashed outline-current outline-[5px] w-full h-full rounded-full scale-100 relative cursor-pointer"
          initial={{
            opacity: 1,
            outlineColor: "#ffff75",
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          animate={{
            opacity: 1,
            outlineColor: "#b9bcff",
            rotate: "180deg"
          }}
          
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 3,
            delay: 1,
          }}   
        >
        </motion.button>
        <motion.p 
          className="absolute top-[50%] left-[50%] text-[36px] -translate-x-[50%] -translate-y-[60%] text-slate-700"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 80,
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 3,
            delay: 1,
          }}
        >
          ↓
        </motion.p>
      </div>
     
    </Section>
  </>
};

const AboutSection = () => {
  return (
    <Section>
      <div className="flex flex-row w-[80%] h-full gap-8 items-center justify-center">
        <img src={logo2} className="min-w-[200px] basis-1/3"/>
        <p className="text-[24px] basis-2/3">三明治餐廳以新鮮、健康的食材制作各式三明治，<br></br>滿足各種口味需求。無論是經典火腿芝士還是創意素食搭配，<br></br>都能找到喜愛的選擇。餐廳環境舒適，提供免費Wi-Fi，<br></br>是適合朋友聚會或工作午餐的理想場所。<br></br>此外，貼心的服務和合理的價格，讓每位顧客都能享受到愉快的用餐體驗。</p>
      </div>
    </Section>
  );
}

const RestaurantSection: React.FC = () => {
  function capitalizeFirstLetter(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const total = useSandwich((state) => state.total) 
  const addIngredient = useSandwich((state) => state.addIngredient) 
  const [addedToCart, setaAddedToCart] = useSandwich((state) => [
    state.addedToCart,
    state.setAddedToCart
  ])
  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.querySelector('.scrollbar');
    if (container) {
      const scrollAmount = 150
      container.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  }

  return (
    <Section>
      <div className='w-screen h-screen flex flex-col'>
        <div className="basis-3/4">
            <Sandwich />
        </div>
        <div className="basis-1/3 flex flex-col items-center gap-1">
          {
            addedToCart ? <>
              <h1 className="font-bold text-[24px]">Total - ${total.toFixed(2)}</h1>
              <h1 className="font-bold text-[18px] text-slate-400">Order sent successfully, it will be ready in 5 minutes! Wawa
              Sensei will directly deliver it to your home 🛵</h1>
              <Button 
                title="Cancel order"
                color="text-white"
                bgColor="bg-blue-600"
                bold
                onPress={() => setaAddedToCart(false)}
              />
            </> : <>
              <h1 className="font-bold text-[24px]">SANDWICHES LOVER</h1>
              <h1 className="font-bold text-[18px] text-slate-800">Fresh and delicious sandwiches made with love</h1>
              <hr className="w-screen bg-slate-900  mb-[2vh]"/>
              <h1 className="font-normal text-[16px]">Basic Price ($5.00)</h1>
              <h1 className="font-normal text-[16px] text-slate-400 mb-[2vh]">Compose your sandwich by adding ingredients</h1>
              <div className="w-full flex flex-row justify-center items-center gap-8 mb-[2vh]">
                <svg version="1.1" id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg" 
                  width="50px" 
                  height="50px" viewBox="-2.56 -2.56 37.12 37.12" 
                  enableBackground="new 0 0 32 32"  
                  fill="#000000" 
                  stroke="#6a6a6a"
                  onClick={() => handleScroll('left')}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                  <g id="SVGRepo_iconCarrier"> <g> <path fill="#808184" d="M16,32c8.822,0,16-7.178,16-16S24.822,0,16,0S0,7.178,0,16S7.178,32,16,32z M16,1c8.271,0,15,6.729,15,15 s-6.729,15-15,15S1,24.271,1,16S7.729,1,16,1z"/> <path fill="#808184" d="M18.069,21.2c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146 c0.195-0.195,0.195-0.512,0-0.707L14.284,16l4.492-4.493c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0l-4.846,4.846 c-0.195,0.195-0.195,0.512,0,0.707L18.069,21.2z"/> </g> </g>
                </svg>
                <div className="w-[50%] overflow-x-scroll no-scrollbar scrollbar">
                  <div className="animate-slideSlow hover:paused flex flex-row gap-8">
                  {
                    Object.keys(INGREDIENTS).map((ingredient) => (
                      <div
                        key={ingredient}
                        className=" whitespace-pre-line"
                      >
                        <Button 
                          title= { 
                            `${INGREDIENTS[ingredient].icon}\n${capitalizeFirstLetter(ingredient)}\n(+${INGREDIENTS[ingredient].price.toFixed(2)})`
                          }
                          onPress={() => addIngredient(ingredient as IngredientKey)}
                        />
                      
                      </div>
                    ))
                  }
                  </div>
                  
                </div>
                <svg version="1.1" id="Layer_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="50px" 
                  height="50px"
                  viewBox="-2.56 -2.56 37.12 37.12" 
                  enableBackground="new 0 0 32 32"  
                  fill="#000000" stroke="#6a6a6a"
                  onClick={() => handleScroll('right')}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                  <g id="SVGRepo_iconCarrier"><g><path fill="#808184" d="M16,32c8.822,0,16-7.178,16-16S24.822,0,16,0S0,7.178,0,16S7.178,32,16,32z M16,1c8.271,0,15,6.729,15,15 s-6.729,15-15,15S1,24.271,1,16S7.729,1,16,1z"/> <path fill="#808184" d="M13.224,21.2c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146l4.846-4.846 c0.195-0.195,0.195-0.512,0-0.707L13.931,10.8c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L17.716,16l-4.492,4.493 C13.028,20.688,13.028,21.004,13.224,21.2z"/></g></g>
                </svg>
              </div>
              
              <Button 
                title={`Add to cart ($${total.toFixed(2)})`}
                color="text-white"
                bgColor="bg-blue-600"
                bold
                px="px-[15vh]"
                onPress={() => setaAddedToCart(true)}
              />
            </>
          }
        </div>
      </div>
     
      
    </Section>
  );
}

const ContactSection: React.FC = () => {
  return (
    <Section>
       
      <h2 className="text-5xl font-bold font-noto mb-[3vh]">Shop Info</h2>
      <div className="flex flex-row gap-[3vh]">
        <div className="flex flex-col">
          <p className="text-[24px] font-light leading-[32px] font-noto">Tel:565-0821</p>
          <p className="text-[24px] font-light leading-[32px] font-noto">大阪府吹田市山田東2-20-1</p>
          <p className="text-[24px] font-light leading-[32px] font-noto">OPEN 11:00-15:00 17:00-22:00(LO 21:00)</p>
          <p className="text-[24px] font-light leading-[32px] font-noto">※ 当面はランチのみ営業</p>
          <p className="text-[24px] font-light leading-[32px] font-noto">CLOSE　Every Wednesday・Sunday</p>
          <div className="w-full h-full mt-[2vh]">
            <iframe
              className="border-none w-[100%] h-[100%]"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13105.102408903438!2d135.51810875273992!3d34.799007486427705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e3542719b58d%3A0x13ed6e732500be8b!2zMi1jaMWNbWUtMjAtMSBZYW1hZGFoaWdhc2hpLCBTdWl0YSwgT3Nha2EgNTY1LTA4MjHml6XmnKw!5e0!3m2!1szh-TW!2stw!4v1718699105685!5m2!1szh-TW!2stw">
            </iframe>
          </div>
        </div>
        <div className="p-8 rounded-md bg-white w-[386px] max-w-full">
          <h1 className="font-bold font-noto">RESERVATION</h1>
          <form>
            <label htmlFor="name" className="font-noto font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label htmlFor="phone" className="font-noto font-medium text-gray-900 block mb-1 mt-8">
              Phone
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label htmlFor="message" className="font-noto font-medium text-gray-900 block mb-1 mt-8">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <div className="flex justify-end">
            <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-[2vh]">
              Booking
            </button>
            </div>
            
          </form>
        </div>
        
      </div>
      
      <div className="w-screen bg-[#2c2c2c] absolute bottom-0">
        <h1 className="text-[20px] text-center text-white font-extralight p-[1vh] font-noto">© Geor Studio.CO ,LTD. 2024</h1>
      </div>
    </Section>
  );
}