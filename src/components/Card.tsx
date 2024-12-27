import { Link } from "react-router-dom";
import { baseImageURL } from "../redux/actions/moviesActions";
import { useEffect, useState } from "react";
import Heart from "react-animated-heart";
import { useDispatch, useSelector } from "react-redux";
import { newFavoriteType, postFavorite } from "../redux/actions/favoriteActions";
import { deleteFavorite } from "../redux/slice/favoriteSlice";
import ImgSkeleton from "./Skeleton/ImgSkeleton";
import { FavoriteState } from "../type/Type";
import { AppDispatch } from "../redux/store";



type ItemType = newFavoriteType;



type ItemPropsType = {
  item: ItemType;
};


const Card = ({ item }: ItemPropsType) => {
  const state = useSelector((store: { favorite: FavoriteState }) => store.favorite)
  const [isClick, setClick] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>()



  useEffect(() => {
    const isFavorite = state.favorite?.results?.some((fav) => fav.id === item.id);
    setClick(isFavorite);

  }, [])



  const handleClick = () => {
    setClick(!isClick);
    if (!isClick) {
      dispatch(postFavorite(item))
    }
    else {
      dispatch(deleteFavorite(item.id))
    }
  };

  const posterPath: string | undefined = item?.backdrop_path ? baseImageURL.concat(item.backdrop_path) : undefined;






  return (
    <div className="flex flex-col relative w-[250px] h-[300px] border border-gray-700 rounded-md ">
      <Link to={`/detail/${item.id}`}>

        <div className="p-0 rounded-md">

          {posterPath ? <img
            className="w-[250px] h-[200px] object-cover rounded-t-md "
            src={posterPath} alt="" /> : <ImgSkeleton />}

        </div>
        <p className="p-2">
          {item.title}
        </p>
        <p className="p-2">
          Popularity:
          <span className="text-yellow-500">{item.popularity}
          </span>
        </p>
      </Link>

      <div className="App favorite">
        <Heart
          isClick={isClick} onClick={handleClick} />
      </div>
    </div>
  )
}

export default Card