import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../constant/constant";
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';

// import  {Splide}  from "@splidejs/react-splide";
// import  {SplideSlide}  from "@splidejs/react-splide";

// import Splide from '@splidejs/react-splide';
// import SplideSlide from '@splidejs/react-splide';


import { baseImageURL } from "../redux/actions/moviesActions";
import DetailSkeleton from "../components/Skeleton/DetailSkeleton";
import ActorSkeleton from "../components/Skeleton/ActorSkeleton";
import { MovieType } from "../type/Type";


// interface Movie {
//   title: string;
//   overview: string;
//   backdrop_path: string;
// }

interface Actor {
  cast_id: number;
  name: string;
  profile_path: string | null;
}


const DetailPage = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType|null>(null);
  const [cast, setCast] = useState<Actor []|null>(null)

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));


    axios
      .get(`/movie/${id}/credits`, options)
      .then((res) => setCast(res.data.cast))

  }, []);







  return (
    <div>
      {!movie ? (
        <DetailSkeleton />
      ) : (
        <div>

          <div
            className="h-[450px] bg-cover bg-center "
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 5)),url(${baseImageURL.concat(movie.backdrop_path)})`,

            }}
          >
            <div className="flex flex-col justify-center bg-opacity-50 w-2/3 h-full p-5 text-white gap-8">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <p className="mt-2">{movie.overview}</p>
            </div>
          </div>



          <div className="flex  mt-4 p-4 justify-between" >

            <div className="flex flex-col">
              <h3>Production Companies</h3>
              <div className="flex flex-wrap gap-4">
                {movie.production_companies.map((comp,i) => (
                  <div
                  key={i}
                   className="bg-white rounded p-2 flex items-center">
                    {comp.logo_path ? (
                      <img
                        className="object-fit-contain"
                        title={comp.name}
                        width={100}
                        height={50}

                        src={baseImageURL.concat((comp.logo_path))} />
                    ) : (
                      <p
                        className="text-black text-center"
                        style={{
                          width: '100px',
                          marginTop: '10px'
                        }}
                      >
                        {comp.name}
                      </p>

                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3>Languages</h3>
              <div className="flex flex-wrap gap-4" >

                {movie.spoken_languages.map((lang,i) => (
                  <div
                  key={i}
                   className="bg-white rounded p-1 text-black">
                    <span> {lang.english_name}</span>

                  </div>
                ))}
              </div>
            </div>


            <div className="flex flex-col gap-4">
              <h3 className=""> Producers</h3>
              {movie.production_countries.map((country,i) => (
                <div 
                key={i}
                className="bg-white rounded p-1 text-black">

                  <span>{country.name}</span>

                </div>
              ))}
            </div>
          </div>




          {/* Actors */}

          <div className="my-10 h-[350px] ">
            <h2 className="text-3xl font-bold">Actor</h2>
            <Splide
              options={{
                gap: '10px',
                pagination: false,
                autoWidth: true,

              }}
            >
              {cast?.map((actor: any) => (
                <SplideSlide key={actor.cast_id}>
                  <div
                    className="actor-card h-[270px] w-[150px]  border border-gray-800 rounded-md cursor-pointer">
                    {actor.profile_path ? (
                      <img
                        className="w-[150px] h-[200px]"
                        src={baseImageURL.concat(actor.profile_path)}
                        alt={actor.name}
                      />
                    ) : (
                      <ActorSkeleton />
                    )}


                    <p className="mt-5 text-center">
                      <span> {actor.name} </span>
                    </p>

                  </div>
                </SplideSlide>

              ))}


            </Splide>
          </div>





        </div>
      )}
    </div>
  );
};

export default DetailPage;
