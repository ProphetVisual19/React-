import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./cartitems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const itemId = action.payload.id;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount++;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.amount--;
    },

    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
