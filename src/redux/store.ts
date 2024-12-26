import { configureStore } from "@reduxjs/toolkit";

import {movieSlice} from './slice/movieSlice'
import { categoriesSlice } from "./slice/categoriesSlice";
import { querySlice } from "./slice/querySlice";
import { favoriteSlice } from "./slice/favoriteSlice";



export const store= configureStore({
    reducer: {
         movies: movieSlice.reducer,
         categories:categoriesSlice.reducer,
         query:querySlice.reducer,
         favorite:favoriteSlice.reducer
         }

})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;