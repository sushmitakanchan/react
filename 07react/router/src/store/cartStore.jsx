import {create} from "zustand"

export const useCart = create((set)=>({
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
    }))

