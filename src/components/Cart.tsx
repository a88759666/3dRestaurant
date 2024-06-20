import { INGREDIENTS, useSandwich } from "@/hooks/useSandwich";
import { Button } from "./Button";

interface cartProps {
    cartOpened: boolean;
    setCartOpened: (opened: boolean) => void;
  }
  
const Cart:React.FC<cartProps> = ({
    cartOpened, 
    setCartOpened
  }) => {
    const ingredients = useSandwich((state) => state.ingredients)
    const total = useSandwich((state) => state.total)
    
    return (
      <>
        { !cartOpened ?
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4 cursor-pointer"
                onClick={() => setCartOpened(!cartOpened)}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5.68638 4.14285L5.35476 2.78357C5.09658 1.73512 4.17153 0.999938 3.11054 1H2V2.57142H3.11054C3.47355 2.56065 3.79474 2.80935 3.88175 3.16856L6.62725 14.5457L6.9126 15.7164C7.17282 16.7734 8.11035 17.5109 9.17995 17.4999H19.7378V15.9285H9.17995C8.81694 15.9393 8.49574 15.6906 8.40874 15.3314L8.3162 14.9385L19.7378 12.1964C20.5822 11.9964 21.246 11.3322 21.4576 10.4757L23 4.14285H5.68638ZM19.9923 10.0985C19.9209 10.3855 19.6973 10.6072 19.4139 10.6721L7.96144 13.4142L6.07198 5.71427H21.0643L19.9923 10.0985ZM5.85604 20.6428C5.85604 19.341 6.89189 18.2857 8.16967 18.2857C9.44745 18.2857 10.4833 19.341 10.4833 20.6428C10.4833 21.9446 9.44745 22.9999 8.16967 22.9999C6.89189 22.9999 5.85604 21.9446 5.85604 20.6428ZM7.39846 20.6428C7.39846 21.0767 7.74374 21.4285 8.16967 21.4285C8.59559 21.4285 8.94087 21.0767 8.94087 20.6428C8.94087 20.2089 8.59559 19.8571 8.16967 19.8571C7.74374 19.8571 7.39846 20.2089 7.39846 20.6428ZM15.2867 19.7408C15.6448 18.86 16.4884 18.2857 17.4242 18.2857C18.7019 18.2857 19.7378 19.341 19.7378 20.6428C19.7378 21.5962 19.1741 22.4557 18.3096 22.8205C17.445 23.1853 16.4499 22.9837 15.7882 22.3095C15.1265 21.6354 14.9285 20.6216 15.2867 19.7408ZM16.653 20.6428C16.653 21.0767 16.9982 21.4285 17.4242 21.4285C17.8501 21.4285 18.1954 21.0767 18.1954 20.6428C18.1954 20.2089 17.8501 19.8571 17.4242 19.8571C16.9982 19.8571 16.653 20.2089 16.653 20.6428Z"
                />
            </svg> :
            <svg 
                className="h-6 w-6 mr-4 cursor-pointer z-20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setCartOpened(!cartOpened)}
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path 
                        d="M6 6L18 18" 
                        stroke="#000000" 
                        strokeLinecap="round">
                    </path> 
                    <path 
                        d="M18 6L6.00001 18" 
                        stroke="#000000" 
                        strokeLinecap="round">
                    </path> 
                </g>
            </svg>
        }
        {
            cartOpened ? 
                <div
                    className="w-[30vh] h-screen z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden p-[4vh]"
                >   
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-[24px] font-bold mt-[4vh]">Cart</h1>
                        {
                            ingredients.map((ingredient)=>(
                                <div className="flex flex-row justify-between w-full">
                                    <div>{ingredient.name}</div>
                                    <div className="overflow-hidden">..............................................................</div>
                                    <div>{INGREDIENTS[ingredient.name].price}</div>
                                </div>
                            ))
                        }
                        <hr className="w-full border-2 border-black border-dashed"/>
                        <h1 className="ml-auto">total ${total}</h1>
                        <div className="ml-auto">
                            <Button 
                                title="Payment"
                                color="text-white"
                                bgColor="bg-blue-600"
                                bold
                                px="px-[2vh] py-[1vh]"
                            />
                        </div>
                        
                    </div>
                </div> 
            : null
        }
       
      </>
    )
  }
  
 export default Cart