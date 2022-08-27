import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { isUser: "true" },
});

export default userSlice.reducer;
