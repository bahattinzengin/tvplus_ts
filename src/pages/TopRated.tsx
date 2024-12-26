import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../redux/actions/movieCategoriesActions"
import Card from "../components/Card"
import ListSkeleton from "../components/Skeleton/ListSkeleton"
import { CategoriesState } from "../type/Type"
import { AppDispatch } from "../redux/store"


type TopRatedType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};


const TopRated = () => {
  const dispatch=useDispatch<AppDispatch>()
  const state=useSelector((store:{categories:CategoriesState})=>store.categories)
  useEffect(()=>{
    dispatch(getCategories())
  },[])
 
  const TopRatedMovies = state.topRated?.results ?? [];

  if (state.isTopRatedLoading) {
    return <ListSkeleton />;
  }


  return (
    <div>
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center  gap-4 m-3">

      {TopRatedMovies.length > 0 ? (
        TopRatedMovies.map((item: TopRatedType) => (
          <div key={item.id}>
            <Card item={item} />
          </div>
        ))
      ) : (
        <p>Popüler film bulunamadı.</p>
      )}
    </div>

  </div>
  )
}

export default TopRated