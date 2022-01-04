import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { authReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [logger]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
