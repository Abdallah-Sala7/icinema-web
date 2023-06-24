import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { appSlice } from "./reducers/appSlice";
import { authApi } from "./server/authApi";
import { addMovieApi } from "./server/addMovieApi";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    authApi: authApi.reducer,
    addMovieApi: addMovieApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, addMovieApi.middleware),
});
