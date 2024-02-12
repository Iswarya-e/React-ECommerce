import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CartItem {
    id: number,
    quantity: number
}

interface State  {
    items: CartItem[],
    isOpen: boolean,
}

const initialState: State ={
    isOpen : false,
    items: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        increaseItemQuantity: (state:State, action: PayloadAction<number>)=>{
            if(!state.items.find(item => item.id === action.payload)){
                return {
                    ...state,
                    items: [...state.items, {id: action.payload, quantity: 1}]
                }
            }else {
                return {
                    ...state,
                    items: state.items.map(item=>{
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity+1
                        }
                    }
                    else return item
                    
                })
                }
            }
        },
        decreaseItemQuantity: (state:State, action:PayloadAction<number>)=> {
            if(state.items.find(item => item.id === action.payload)?.quantity === 1) {
                return {
                    ...state,
                    items: state.items.filter(item=> item.id !== action.payload)
                };
            }else {
                return {
                    ...state,
                    items:state.items.map(item=> {
                        if(item.id === action.payload){
                            return {
                                ...item,
                                quantity: item.quantity - 1
                            }
                        }else{
                            return item
                        }
                    })
                }
                    
            }
        },
        removeFromCart: (state:State, action: PayloadAction<number>) => {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            } 
        },
        toggleIsOpen: (state: State, action: PayloadAction<boolean>) => {
            return {
                ...state,
                isOpen: action.payload
            }
        }


    }
})

export const { increaseItemQuantity, decreaseItemQuantity, removeFromCart, toggleIsOpen } = cartSlice.actions;