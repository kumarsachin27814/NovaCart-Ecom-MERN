// Redux Store banati hai. Agar cartSlice cart ka logic hai, to store poori application ka database hai.

import { configureStore } from "@reduxjs/toolkit"; //Store banane ke liye.

import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    //Kis state ko kaunsa reducer handle karega
    cart: cartReducer,
  },
});

export default store;



