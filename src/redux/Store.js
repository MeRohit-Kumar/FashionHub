import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/CartSlice.js";


export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
