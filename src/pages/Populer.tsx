import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPopuler } from "../redux/actions/movieCategoriesActions";
import Card from "../components/Card";
import ListSkeleton from "../components/Skeleton/ListSkeleton";
import { CategoriesState } from "../type/Type";
import { AppDispatch } from "../redux/store";



interface PopulerMovie {
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
  vote_count: number
}




const Populer = () => {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((store: {categories:CategoriesState}) => store.categories)
  console.log("populer",state);

  


  useEffect(() => {
    dispatch(getPopuler())
  }, [])

  const populerMovies = state.populer?.results ?? [];

  if (state.isPopulerLoading) {
    return <ListSkeleton />;
  }

  console.log(state );
  

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center  gap-4 m-3">

        {populerMovies.length > 0 ? (
          populerMovies.map((item: PopulerMovie) => (
            <div key={item.id}>
             <Card item={{ ...item, release_date: Number(item.release_date) }} />
            </div>
          ))
        ) : (
          <p>Popüler film bulunamadı.</p>
        )}
      </div>

    </div>
  )
}

export default Populer