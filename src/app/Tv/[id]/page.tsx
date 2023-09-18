"use client";

import {  useGetTvDetailsQuery } from "@/app/Redux/api/api";

import MovieDetails from "@/components/UI/MovieDetails";
import { Movie } from "../../../../utills/Typing";
import TvShowDetails from "@/components/UI/TvShowDetails";

const TvDetailsPage = ({ params }: { params: Movie }) => {
  const { data, error, isLoading } = useGetTvDetailsQuery(params.id.toString());

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
        <TvShowDetails key={data.id} id={data.id} data={data}></TvShowDetails>
      )}
    </div>
  );
};

export default TvDetailsPage;
