import Bacon from "/models/Bacon_Slice_Bacon_0.glb"
import Bread from "/models/Bread_Slice_Bread_0.glb";
import Cheese from "/models/Cheese_Slice_Cheese_0.glb";
import Chicken from "/models/Chicken_Slice_Chicken_0.glb";
import Lettuce from "/models/Lettuce_Slice_Lettuce_0.glb";
import Mushroom from "/models/Mushroom_Slice_Mushroom_0.glb";
import Patty from "/models/Patty_Slice_Patty_0.glb";
import Salami from "/models/Salami_Slice_Salami_0.glb";
import Sausage from "/models/Sausage_Slice_Sausage_0.glb";
import Tomato from "/models/Tomato_Slice_Tomato_0.glb";
import { useGLTF } from "@react-three/drei";
import { create } from "zustand";

type IngredientKey = "bread" | "lettuce" | "mushroom" | "tomato" | "cheese" | "chicken" | "sausage" | "salami" | "bacon" | "patty";

interface Ingredient {
  src: string;
  price: number;
  icon: string;
}
export const INGREDIENTS:Record<IngredientKey | string, Ingredient> = {
    bread: {
      src: Bread,
      price: 0.5,
      icon: "🍞",
    },
    lettuce: {
      src: Lettuce,
      price: 0.5,
      icon: "🥬",
    },
    mushroom: {
      src: Mushroom,
      price: 1,
      icon: "🍄",
    },
    tomato: {
      src: Tomato,
      price: 0.5,
      icon: "🍅",
    },
    cheese: {
      src: Cheese,
      price: 1,
      icon: "🧀",
    },
    chicken: {
      src: Chicken,
      price: 2,
      icon: "🍗",
    },
    sausage: {
      src: Sausage,
      price: 1.5,
      icon: "🌭",
    },
    salami: {
      src: Salami,
      price: 1.5,
      icon: "🍖",
    },
    bacon: {
      src: Bacon,
      price: 1.5,
      icon: "🥓",
    },
    patty: {
      src: Patty,
      price: 2,
      icon: "🍔",
    },
}
Object.keys(INGREDIENTS).forEach((ingredient)=>{
  const key = ingredient as IngredientKey
  useGLTF.preload(INGREDIENTS[key].src)
})

export interface sandwichState {
  ingredients:Array<{ id: number, name: IngredientKey | string }>
  total: number
  addedToCart: boolean
  addIngredient: (ingredient: IngredientKey) => void
  removeIngredient: (id: number) => void;
  setAddedToCart: (addedToCart: boolean) => void;
  
}
export const useSandwich = create<sandwichState>((set) => ({
  ingredients: [
    {
      id:0,
      name: "bread",
    },
    {
      id:1,
      name: "bread",
    }
  ],
  total: 5,
  addedToCart: false,
  addIngredient: (ingredient: IngredientKey) => 
    set((state) => ({
      total: state.total + INGREDIENTS[ingredient].price,
      ingredients: [
        ...state.ingredients.slice(0, -1),
        {
          name: ingredient,
          id: state.ingredients.length
        },
        {
          id:1,
          name: "bread",
        },
      ]
  })),
  removeIngredient: (id: number) =>
    set((state) => {
      const ingredientToRemove = state.ingredients.find((ing) => ing.id === id);
      if (!ingredientToRemove) return state;

      const ingredientName = ingredientToRemove.name as IngredientKey;

      return {
        total: state.total - INGREDIENTS[ingredientName].price,
        ingredients: state.ingredients.filter((ing) => ing.id !== id),
      }
  }),
  setAddedToCart: (addedToCart) => set({addedToCart})
}))

