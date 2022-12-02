import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import searchReducer from "../features/searchSlice";

//redux access as to use a global storage of state

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});
