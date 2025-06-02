import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        pizzaId: 0,
        name: "",
        quantity: 0,
        unitPrice: 0,
        totalPrice: 0,
    },
];

const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        AddItem: (state, {type , payload}) => {
            // return [...state, payload];

            const item = payload;
            const ExistItem = state.find(i => i.pizzaId === item.pizzaId);

            if(ExistItem){
              ExistItem.quantity += item.quantity;
              ExistItem.totalPrice += item.totalPrice;
            }
            else {
              state.push(item);
            }
            
        },
    },
});
export const { AddItem } = CartSlice.actions;

export const reducer = CartSlice.reducer;





export const getCart = (state) => state.Cart;

export const getNumber = (state) => {
  const cart = state.Cart;
  return cart.reduce((sum, now) => {
    return sum + now.quantity;
  }, 0);
};

export const getPrice = (state) => {
  const cart = state.Cart;
  if (cart.length > 0)
    return cart.reduce((sum, now) => {
      return sum + now.totalPrice;
    }, 0);
  else return 0;
};