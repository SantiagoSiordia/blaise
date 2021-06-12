import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  defaultTemperature: number;
  defaultTimeSet: number;
  isDefaultTemperature: boolean;
  isDefaultTimeSet: boolean;
  timeSet: number;
  temperature: number;
}

const defaultTemperature = 250;
const defaultTimeSet = 30;

export const initialState: AppState = {
  defaultTemperature,
  defaultTimeSet,
  timeSet: defaultTimeSet,
  temperature: defaultTemperature,
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
      state.isDefaultTimeSet = state.defaultTimeSet === defaultTimeSet;
    },
    resetDefaultTimeSet(state) {
      state.defaultTimeSet = defaultTimeSet;
      state.isDefaultTemperature = true;
    },
    decrementTimeSet(state) {
      state.timeSet -= 1 / 1000;
    },
    resetTimeSet(state) {
      state.timeSet = state.defaultTimeSet;
    },
    resetTemperature(state) {
      state.temperature = state.defaultTemperature;
    },
    setTemperature(state, action: PayloadAction<number>) {
      state.temperature = action.payload;
      state.isDefaultTemperature =
        state.defaultTemperature === defaultTemperature;
    },
  },
});

export { appSlice as appReducer };
export default appSlice.reducer;
