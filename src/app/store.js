
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    user: rootReducer,
  },

});

export default store;