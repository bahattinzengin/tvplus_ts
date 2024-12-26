import { createSlice } from "@reduxjs/toolkit";
import {  getFavorite, postFavorite } from "../actions/favoriteActions";
import { ApiResponse } from "../../type/Type";

interface Favorite {
    favorite: ApiResponse[],
    isFavoriteLoading: boolean,
    isFavoriteError: boolean
}

const initialState: Favorite = {
    favorite: [],
    isFavoriteLoading: true,
    isFavoriteError: false
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
                const isFavoriteExists = state.favorite.some(fav => fav.id === action.payload.id);
                if (isFavoriteExists) {
                    state.favorite = [...state.favorite, action.payload];
                }
            })
    }

})
export const {deleteFavorite } = favoriteSlice.actions;