import { createSlice } from "@reduxjs/toolkit";
import { getQuery } from "../actions/queryActions";
import { 

     Movie } from "../../type/Type";

interface Query {
    query: {
          page: number,
          results: Movie[],
          total_pages: number
          total_results: number
        }
    isQueryLoading: boolean,
    isQueryError: boolean  ,
    isClick:boolean
}


const initialState:Query={
    query: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
      },
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

