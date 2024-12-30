import { createSlice } from "@reduxjs/toolkit";
import {  getFavorite, postFavorite } from "../actions/favoriteActions";
import { FavoriteStateTypes } from "../../type/Type";

const initialState: FavoriteStateTypes = {
    isFavoriteLoading: false,
    isFavoriteError: false,
    favorite: {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0
    }
}


export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {},   
    
    extraReducers: (builder) => {
        builder
            // get
            .addCase(getFavorite.pending, (state) => {
                state.isFavoriteLoading = true,
                    state.isFavoriteError = false
            })
            .addCase(getFavorite.fulfilled, (state, action) => {
                state.isFavoriteError = false,
                    state.isFavoriteLoading = false,
                    state.favorite = action.payload
            })
            .addCase(getFavorite.rejected, (state) => {
                state.isFavoriteError = true,
                    state.isFavoriteLoading = false
            })
         

            // post
            .addCase(postFavorite.fulfilled, (state, action) => {
                const isFavoriteExists = state.favorite.results.some(fav => fav.id === action.payload.id);
                if (isFavoriteExists) {
                    state.favorite.results = [...state.favorite.results, action.payload];
                }
            })
    }

})
