import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice';
import languageSlice from "./slice/languageSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        language: languageSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export default store;
