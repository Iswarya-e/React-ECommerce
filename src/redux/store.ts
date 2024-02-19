import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { productSlice } from "./productSlice";
import { persistReducer,persistStore } from "redux-persist";
import  storage  from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage
}

export const store = configureStore({
    reducer: {
        cart: persistReducer(persistConfig, cartSlice.reducer),
        product: productSlice.reducer
    }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;