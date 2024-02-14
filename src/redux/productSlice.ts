import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
    id:number,
    name: string,
    price: number,
    description: string,
    image: string
}

export type State =  {
    products: Product[]
}
const initialState: State = {
    products: []
}
export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        addNewProduct: (state: State,action: PayloadAction<Product>)=>
        {
            return {
                ...state,
                products: [...state.products,action.payload]
            }
        },
        addAllProducts: (state: State, action: PayloadAction<Product[]>) => {
           state.products = [...state.products, ...action.payload]
        }
     }

})


export const { addNewProduct, addAllProducts } = productSlice.actions;
   


