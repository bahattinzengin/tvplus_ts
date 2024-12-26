import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant/constant";
import { ApiResponse } from "../../type/Type";


export const getPopuler = createAsyncThunk<ApiResponse, void>(
    'populer',
    async () => {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        return res.data
    }
)


export const getCategories = createAsyncThunk<ApiResponse, void>(
    'TopRated',
    async () => {
        const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        return res.data
    }
)

export const getTrending = createAsyncThunk<ApiResponse, void>(
    'trending',
    async () => {
        const res = await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
        return res.data
    }
)