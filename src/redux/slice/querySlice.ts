import { createSlice } from "@reduxjs/toolkit";
import { getQuery } from "../actions/queryActions";
import { ApiResponse } from "../../type/Type";

interface Query {
    query: ApiResponse[],
    isQueryLoading: boolean,
    isQueryError: boolean  ,
    isClick:boolean
}


const initialState:Query={
    query:[],
    isQueryLoading: false,
    isQueryError: false ,
    isClick:false
}

export const querySlice=createSlice({
    name:"query",
    initialState,
    reducers:{ },
    extraReducers:(builder)=>{
        builder
        .addCase(getQuery.pending,(state)=>{
            state.isQueryLoading=true;
            state.isQueryError=false
        })
        .addCase(getQuery.fulfilled,(state,action)=>{
            state.isQueryLoading=false;
            state.isQueryError=false;
            state.query=action.payload;
        })
        .addCase(getQuery.rejected,(state)=>{
            state.isQueryLoading=false;
            state.isQueryError=true;
        })
    }
})

export const { toggleFavorite } = querySlice.actions;