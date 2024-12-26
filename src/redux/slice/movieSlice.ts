import { createSlice } from "@reduxjs/toolkit";
import { getGenre, getMovies } from "../actions/moviesActions";
import { ApiResponse } from "../../type/Type";


interface MovieState {
    movies:ApiResponse[],
    genre: ApiResponse[],
    isMoviesLoading: boolean,
    isGeneresLoading: boolean,
    isMoviesError: boolean,
    isGenresError: boolean,
}

const initialState: MovieState = {
    movies: [],
    genre: [],
    isMoviesLoading: false,
    isGeneresLoading: false,
    isMoviesError: false,
    isGenresError: false,
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        //  getMovie
        builder
            .addCase(getMovies.pending, (state) => {
                state.isMoviesLoading = true;
                state.isMoviesError = false;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isMoviesLoading = false;
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state) => {
                state.isMoviesLoading = false;
                state.isMoviesError = true;
            })

        // getGenre
        builder
            .addCase(getGenre.pending, (state) => {
                state.isGeneresLoading = true;
                state.isGenresError = false;
            })
            .addCase(getGenre.fulfilled, (state, action) => {
                state.isGeneresLoading = false;
                state.genre = action.payload;
            })
            .addCase(getGenre.rejected, (state) => {
                state.isGeneresLoading = false;
                state.isGenresError = true;
            })
    },
})
