import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSilce";
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
