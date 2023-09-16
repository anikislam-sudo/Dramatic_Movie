'use client';


import React from 'react';
import { useGetMoviesQuery } from './Redux/api/api';
import { Movie } from '../../utills/Typing';
import Banner from '@/components/shared/Banner';
import Image from 'next/image';
//import Banner from '@/components/shared/Banner';



const Homepage = () => {
  // const { data, error, isLoading } = useGetMoviesQuery(undefined);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div>
      {/* <h1>Movie List</h1>
      {data && data.results.map((movie:any) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
      ))} */}
    </div>
  );


};

export default Homepage;