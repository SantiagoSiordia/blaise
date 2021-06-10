import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { createSelectorHook } from "react-redux";
import rootReducer, { RootState } from "./RootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export const useAppSelector = createSelectorHook<RootState>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
