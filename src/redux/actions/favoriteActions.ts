import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant/constant";
import { ApiResponse } from "../../type/Type";

export interface newFavoriteType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: number,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}



export const getFavorite = createAsyncThunk<ApiResponse, void>(
    "get/favorite",
    async () => {
      

        const res = await axios('https://api.themoviedb.org/3/account/21701101/favorite/movies?language=en-US&page=1&sort_by=created_at.asc',options)
        return res.data
    }
)





export const postFavorite=createAsyncThunk(
   "post/favorite",
   async(favorite: newFavoriteType)=>{
    const favoriteData = {
        media_type: "movie",  
        media_id: favorite.id,  
        favorite: true,  
       
      };
    


    const res =await axios.post('https://api.themoviedb.org/3/account/21701101/favorite', favoriteData,options)
    return res.data

   } 
)


// export const deleteFavorite = createAsyncThunk<ApiResponse, number>(
//     "delete/favorite",
//     async(favorite: newFavoriteType)=>{
//         const favoriteData = {
//             media_type: "movie",  
//             media_id: favorite.id,  
//             favorite: true,  
           
//           };
//         }
        
// )

