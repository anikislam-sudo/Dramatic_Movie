export interface Genre {
  id: number;
  name: string;
}

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
    results:[];
    name:string;
    first_air_date:string;
    homepage:string
    number_of_episodes:number
    number_of_seasons:number
}
export type MovieArray = Movie[];
export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
