import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  defaultTemperature: number;
  defaultTimeSet: number;
  isDefaultTemperature: boolean;
  isDefaultTimeSet: boolean;
}

const defaultTemperature = 250;
const defaultTimeSet = 30;

export const initialState: AppState = {
  defaultTemperature,
  defaultTimeSet,
  isDefaultTemperature: true,
  isDefaultTimeSet: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDefaultTemperature(state, action: PayloadAction<number>) {
      state.defaultTemperature = action.payload;
      state.isDefaultTemperature =
        state.defaultTemperature === defaultTemperature;
    },
    resetDefaultTemperature(state) {
      state.defaultTemperature = defaultTemperature;
      state.isDefaultTemperature = true;
    },
    setDefaultTimeSet(state, action: PayloadAction<number>) {
      state.defaultTimeSet = action.payload;
    },
    resetDefaultTimeSet(state) {
      state.defaultTimeSet = defaultTimeSet;
    },
  },
});

export { appSlice as appReducer };
export default appSlice.reducer;
