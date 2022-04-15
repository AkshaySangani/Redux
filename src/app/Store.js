import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import theamReducer from "../features/theam/theamSlice";

export const Store = configureStore({
    reducer: {
        counter:counterReducer,
        theam:theamReducer
    },
});
