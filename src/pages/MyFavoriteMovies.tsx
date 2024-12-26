import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Card from "../components/Card";
import { getFavorite } from "../redux/actions/favoriteActions";
import ListSkeleton from "../components/Skeleton/ListSkeleton";
import { FavoriteState, Movie } from "../type/Type";
import { AppDispatch } from "../redux/store";





const MyfavoriteMovies = () => {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((store: { favorite: FavoriteState }) => store.favorite)

 



  useEffect(() => {
    dispatch(getFavorite())
  }, [])

  const favoriteMovies = state.favorite.results ?? []; 

  if (state.isFavoriteLoading) {
    return <ListSkeleton />;
  }

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center  gap-4 m-3">

        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((item: Movie) => (
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

export default MyfavoriteMovies