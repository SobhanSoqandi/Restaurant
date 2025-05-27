import { reducer as Register } from "./components/featurs/Auth/AuthSlice";
// import { reducer as Cart } from "./featuer/cart/CartSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    AuthSlice: Register,
    // Cart: Cart,
  },
});
export default store;