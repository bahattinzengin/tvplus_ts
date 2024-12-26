import { useSelector } from "react-redux"

import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { baseImageURL } from "../redux/actions/moviesActions";
import HeroSkeleton from "./Skeleton/HeroSkeleton";
import { MoviesState } from "../type/Type";


const Hero = () => {

    const state: any = useSelector((store: {movies:MoviesState}) => store.movies)

    

    const randomIndex = Math.round(Math.random() * 19)

    const randomMovie = state.movies?.length === 0 ? null : state.movies.results[randomIndex]

    const posterPath: string | undefined = randomMovie?.backdrop_path ? baseImageURL.concat(randomMovie.backdrop_path) : undefined;




    return (

        <div className="flex  p-9 h-5/6 ">
           
            {
                !randomMovie ? (
                    <div><HeroSkeleton/></div>
                ) : (

                    <div className="flex flex-col-reverse lg:flex-row h-full">

                        <div className="flex flex-col w-full lg:w-1/2  justify-start gap-20">
                            <h1 className="text-3xl text-yellow-500 font-extrabold">
                                {randomMovie.title}
                            </h1>

                            <p className="px-4">
                                {randomMovie.overview.slice(0,250)}   .......  
                            </p>

                            <div className="flex gap-3  ">
                                <Link to="/"
                                 className="flex justify-center items-center bg-yellow-400 text-black font-bold py-3 w-52 lg:w-48 rounded-md transform transition-all  duration-500 hover:scale-110 truncate" >
                                   <span className="text-[10px] px-3 lg:px-2 lg:text-sm">
                                    <FaPlay/>
                                    </span> Watch
                                </Link>

                                <Link className="flex justify-center items-center bg-gray-800 text-white lg:font-bold py-3 w-60 lg:w-48  rounded-md transform transition-all  duration-500 hover:scale-110 text-sm lg:text-base truncate" 
                                to={`/detail/${randomMovie.id}`}>
                                   <span className="text-xl lg:text-3xl px-3 lg:px-2">
                                    <RiErrorWarningLine/>
                                    </span> Details
                                </Link>
                            </div>

                        </div>

                        <div className="w-full mb-8 lg:w-1/2">
                            <figure className="">
                                <img className="w-full rounded-lg " src={posterPath} alt="" />
                            </figure>
                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default Hero