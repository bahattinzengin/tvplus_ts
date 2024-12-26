import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import { getGenre, getMovies } from "../redux/actions/moviesActions";
import { getFavorite } from "../redux/actions/favoriteActions";
import { getCategories } from "../redux/actions/movieCategoriesActions";
import ListSkeleton from "../components/Skeleton/ListSkeleton";
import { Genre, MoviesState } from "../type/Type";
import { AppDispatch } from "../redux/store";




const MainPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((store: {movies:MoviesState}) => store.movies)

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getGenre())
    dispatch(getFavorite())
    dispatch(getCategories())
  }, [])




  return (
    <div className="">

      {<Hero />}    
        {state.isGeneresLoading ? (<ListSkeleton />) :
          state.isGenresError ? (<p> Üzgünüz hata oluştu</p>) : (
            state?.genre?.genres?.map((genre: Genre) => (
              <MovieList key={genre.id} genre={genre} />
            ))
          )
        }
      
    </div>
  )
}

export default MainPage