"use client";

import { useGetMovieDetailsQuery } from "@/app/Redux/api/api";
import { Movie } from "../../../../utills/Typing";
import MovieDetails from "@/components/UI/MovieDetails";

const MovieDetailsPage = ({ params }: { params: Movie }) => {
  const { data, error, isLoading } = useGetMovieDetailsQuery(params.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <MovieDetails key={data.id} id={data.id} data={data}></MovieDetails>
      )}
    </div>
  );
};

export default MovieDetailsPage;
