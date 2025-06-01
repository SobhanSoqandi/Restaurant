import { reducer as Register } from "./components/featurs/Auth/AuthSlice";
import { reducer as Cart } from "../src/components/featurs/cart/CartSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    AuthSlice: Register,
    Cart: Cart,
  },
});
export default store;