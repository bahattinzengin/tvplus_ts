import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getPopuler, getTrending } from "../actions/movieCategoriesActions";
import { CategoriesTypes } from "../../type/Type";
// import { ApiResponse } from "../../type/Type";

// interface Categories {
//     populer: ApiResponse[];
//     topRated:ApiResponse[],
//     trending:ApiResponse[],
//     isPopulerLoading:boolean,
//     isPopulerError:boolean,
//     isTopRatedLoading:boolean,
//     isTopRatedError:boolean
//     isTrendingLoading:boolean,
//     isTrendingError:boolean,
// }
const initialState: CategoriesTypes = {
    populer: {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    topRated: {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    trending: {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    isPopulerLoading: false,
    isPopulerError: false,
    isTopRatedLoading: false,
    isTopRatedError: false,
    isTrendingLoading: false,
    isTrendingError: false,
  };
export const categoriesSlice=createSlice({
name:'categories',
initialState,

reducers:{},
extraReducers:(builder)=>{
    // populer
    builder
    .addCase(getPopuler.pending,(state)=>{
        state.isPopulerLoading=true;
        state.isPopulerError=false
    })
    .addCase(getPopuler.fulfilled,(state,action)=>{
        state.isPopulerLoading=false;
        state.populer=action.payload
       
    })
    .addCase(getPopuler.rejected,(state)=>{
        state.isPopulerLoading=false;
        state.isPopulerError =true
    })

    // TopRated

    builder
    .addCase(getCategories.pending,(state)=>{
        state.isTopRatedLoading=true,
        state.isTopRatedError=false
    })
    .addCase(getCategories.fulfilled,(state,action)=>{
        state.isTopRatedLoading=false,
        state.isTopRatedError=false,
        state.topRated=action.payload
    })
    .addCase(getCategories.rejected,(state)=>{
        state.isTopRatedLoading=false,
        state.isTopRatedError=true
    })

    // Trending

    builder
    .addCase(getTrending.pending,(state)=>{
        state.isTrendingLoading=true,
        state.isTrendingError=false
    })
    .addCase(getTrending.fulfilled,(state,action)=>{
        state.isTrendingLoading=false,
        state.isTrendingError=false,
        state.trending=action.payload
    })
    .addCase(getTrending.rejected,(state)=>{
        state.isTrendingLoading=false,
        state.isTrendingError=true
    })
}

})