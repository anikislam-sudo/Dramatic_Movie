"use client";

import { useGetMovieDetailsQuery } from "@/app/Redux/api/api";
import { Movie } from "../../../../utills/Typing";
import MovieDetails from "@/components/UI/MovieDetails";

const MovieDetailsPage = ({ params }: { params: Movie }) => {
  const { data, error, isLoading } = useGetMovieDetailsQuery(params.id.toString());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    }
    else {
        // you can access all properties of `SerializedError` here
        return <div>{error.message}</div>
    }
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
