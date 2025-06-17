import { configureStore } from '@reduxjs/toolkit';
import {coursesSlice} from "./slices/coursesSlice";

export const store=configureStore({
    reducer:{
        "courses":coursesSlice.reducer
    },
})

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch=typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;