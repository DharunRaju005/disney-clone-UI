
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../features/users/userSlice";
import movieReducer from '../features/movie/movieSlice'

const store = configureStore({
  reducer: {
    user: rootReducer,
    movie:movieReducer,
  },


});

export default store;