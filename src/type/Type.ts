export interface Movie {
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
  }
  
 export interface MovieType {
    title: string;
    overview: string;
    backdrop_path: string;
    production_companies: {
      name: string;
      logo_path: string | null;
    }[];
    spoken_languages: {
      english_name: string;
    }[];
    production_countries: {
      name: string;
    }[];
  }
  
  
 
  export interface ApiResponse {
    page: number;
    results: Movie[]; 
    total_results: number;
    total_pages: number;
  }

  export const moviesTypes: Movie[] = [
    
    {
      adult: false,
      backdrop_path: '/path/to/backdrop.jpg',
      genre_ids: [1, 2, 3],
      id: 1,
      original_language: 'en',
      original_title: 'Inception',
      overview: 'A mind-bending thriller...',
      popularity: 9.8,
      poster_path: '/path/to/poster.jpg',
      release_date: '2010-07-16',
      title: 'Inception',
      video: false,
      vote_average: 8.8,
      vote_count: 1500,
    },
  
  ];


  
export interface MoviesState {
  isGeneresLoading: boolean;
  isGenresError: boolean;
  genre: {
    genres: Genre[];
  } | null;
}



export interface Genre {
  id: number;
  name: string;
}



export interface FavoriteState {
  isFavoriteLoading: boolean;
  isFavorite: boolean;
  favorite: {
    page: number
    results:Movie []
    total_pages: number
    total_results: number
  }}


  
export interface CategoriesState {
  isPopulerError: boolean

  isPopulerLoading: boolean

  isTopRatedError: boolean

  isTopRatedLoading: boolean

  isTrendingError: boolean

  isTrendingLoading: boolean

  populer: {
    page: number,
    results: [],
    total_pages: number,
    total_results: number
  }
  topRated: {
    page: number,
    results: [],
    total_pages: number,
    total_results: number
  }
  trending: {
    page: number,
    results: [],
    total_pages: number,
    total_results: number
  }
}



export type ButtonConstantType = {
  id: number;
  name: string;
  path: string;
};


  
