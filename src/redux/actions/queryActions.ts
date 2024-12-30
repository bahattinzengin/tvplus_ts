import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant/constant";
import { ApiResponse } from "../../type/Type";


export const getQuery=createAsyncThunk<ApiResponse,string>(
    "query",
    async(query)=>{
        const res =await axios.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,options);
        return res.data
    }
)