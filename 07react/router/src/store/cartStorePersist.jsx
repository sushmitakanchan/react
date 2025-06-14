import {create} from "zustand"
import {persist} from "zustand"

//by using persist it is also availabe in your localStorage

export const useCart = create(persist((set)=>({
    cart: [],

    addToCart: (item)=>
        set((state)=>({
            cart: [...state.cart, item] //existing item from the cart and add item
        })),
    
    removeFromCart: (id)=>
        set((state)=>({
            cart: state.cart.filter((item)=>item.id !== id)
        })),
    clearCart: ()=>
        set({cart:[]})
    })))

