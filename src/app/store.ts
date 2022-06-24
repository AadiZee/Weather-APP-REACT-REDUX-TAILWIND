import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherReducer from "../features/Weather/WeatherSlice";

export const store = configureStore({
  reducer: {
    //reducers here
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
