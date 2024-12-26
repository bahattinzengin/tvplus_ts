import { useEffect } from "react"
import { getQuery } from "../redux/actions/queryActions";
import { useDispatch, useSelector } from "react-redux"
import Card from "../components/Card";
import ListSkeleton from "../components/Skeleton/ListSkeleton";
import { AppDispatch } from "../redux/store";


type queryMoviesType = {
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

interface QueryState {
  isClick: boolean
  isQueryError: boolean
  isQueryLoading: boolean
  query: {
    page: number,
    results: queryMoviesType[],
    total_pages: number,
    total_results: number
  }}


const QueryPage = () => {
    const dispatch=useDispatch<AppDispatch>();
    const state=useSelector((store:{query:QueryState})=>store.query)

useEffect(()=>{
dispatch(getQuery())
},[])
const queryMovies=state.query.results ??[];
if(state.isQueryLoading){
  return <ListSkeleton/>
}





  return (
    <div>
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center  gap-4 m-3">

      {queryMovies.length > 0 ? (
        queryMovies.map((item: queryMoviesType) => (
          <div key={item.id}>
            <Card item={item} />
          </div>
        ))
      ) : (
        <p>Popular movie not found.</p>
      )}
    </div>

  </div>
  )
}

export default QueryPage