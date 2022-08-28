import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user123: userSlice,
  },
});
