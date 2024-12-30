import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../constant/constant";
import '@splidejs/react-splide/css';

import  {Splide}  from '@splidejs/react-splide';
import  {SplideSlide}  from '@splidejs/react-splide';

// import Splide from '@splidejs/react-splide';
// import SplideSlide from '@splidejs/react-splide';



import { Link } from "react-router-dom";
import { baseImageURL } from "../redux/actions/moviesActions";
import { Genre, Movie } from "../type/Type";





interface MovieListProps {
    genre: Genre;
}
const MovieList = ({ genre }: MovieListProps) => {

    const [movies, setMovies] = useState<Movie[]|null>(null)
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=10&sort_by=popularity.desc&with_genres=${genre.id}`, options)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err));

    }, [])






    





    return (
        <div className="py-3 px-5">
            <h1 className="text-4xl font-bold py-4">
                {genre.name}
            </h1>
            <Splide
                options={{
                    gap: '10px',
                    pagination: false,
                    autoWidth: true,

                }} >
                {movies?.map((movie:Movie) => (

                    <SplideSlide
                     key={movie.id} >
                        <Link to={`/detail/${movie.id}`} >
                            <div className="w-[250px] h-[370px] border border-gray-500 rounded-md overflow-hidden">
                                <img
                                    className="w-full h-auto rounded-md object-cover transition-all duration-1000 transform hover:scale-110 hover:rotate-[4deg] "
                                    src={baseImageURL.concat(movie.poster_path)} />
                            </div>

                        </Link>

                    </SplideSlide>

                ))}


            </Splide>
        </div>
    )
}

export default MovieList