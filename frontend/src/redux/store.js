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




/* cart = state ka key
cartReducer = us key ka reducer

Isliye jab tum data nikalte ho to likhte ho:

const cartItems = useSelector((state) => state.cart.cartItems);

Dhyan do:

Pehla cart → store ka key
Dusra cartItems → reducer ke andar ki property */