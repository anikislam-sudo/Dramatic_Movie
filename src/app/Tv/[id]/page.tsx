"use client";

import {  useGetTvDetailsQuery } from "@/app/Redux/api/api";

import MovieDetails from "@/components/UI/MovieDetails";
import { Movie } from "../../../../utills/Typing";
import TvShowDetails from "@/components/UI/TvShowDetails";

const TvDetailsPage = ({ params }: { params: Movie }) => {
  const { data, error, isLoading } = useGetTvDetailsQuery(params.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
