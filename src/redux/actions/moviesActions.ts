import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant/constant";
import { ApiResponse } from "../../type/Type";
axios.defaults.baseURL ='https://api.themoviedb.org/3'
export const baseImageURL = 'https://image.tmdb.org/t/p/original'


export const getMovies=createAsyncThunk<ApiResponse, void>(
    'movies',
    async()=>{
        const res =await axios.get('/movie/popular?language=en-US&page=3',options);
        return res.data
    }
)


export const getGenre=createAsyncThunk<ApiResponse, void>(
    'genre',
    async()=>{
        const res =await axios.get( '/genre/movie/list?language=en',options);
        return res.data
    }
)