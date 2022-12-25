import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: "sdf",
  },
  reducers: {
    add: () => {
      console.log("data");
    },
  },
});
export const LoginActions = loginSlice.actions;
export default loginSlice.reducer;
