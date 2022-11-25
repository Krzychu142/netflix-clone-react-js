import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

//redux access as to use a global storage of state

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
