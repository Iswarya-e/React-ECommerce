import { ReactNode, createContext, useContext } from 'react'
export type ShoppingCartProviderProps = {
    children: ReactNode
}

export type ShoppingCartContext = {
    openCart: () => void,
    closeCart: () => void,
    getItemQuantity: (id: number) => number,
    increaseItemQuantity: (id: number) => void,
    decreaseItemQuantity: (id: number) => void,
    removeFromCart: (id:number) => void,
    cartQuantity: number,
    cartItems: CartItem[],
}

export type CartItem = {
    id: number,
    quantity: number
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);


export function useShoppingCartContext() {
    return useContext(ShoppingCartContext);
}



