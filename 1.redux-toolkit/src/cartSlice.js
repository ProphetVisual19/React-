import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
