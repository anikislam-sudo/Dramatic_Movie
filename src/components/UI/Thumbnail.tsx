import React from 'react';
import Image from 'next/image';
import { baseUrl } from '../../../constants/movieUrl';
import { Movie } from '../../../utills/Typing';
import { StarIcon } from '@heroicons/react/solid'; // Importing the Heroicons StarIcon
import Link from 'next/link';
import { FaImdb } from 'react-icons/fa';

const Thumbnail = ({ movie,id }: { movie: Movie,id:number }) => {
  console.log(movie);

  return (
    <div className="mt-5 mb-5 relative h-80 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-96 md:min-w-[260px] md:hover:scale-105">
      <div className="bg-white h-full w-full rounded-lg shadow-md overflow-hidden">
      
       <Image
          src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
          className="object-cover h-2/3"
          alt=""
          width={100}
          height={100}
          layout="responsive"
        />
      
        <div className="p-4 h-1/3 flex flex-col justify-between">
          <p className="text-black font-semibold">{movie.title}</p>
          <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
                            <FaImdb size={32} className="text-yellow-500" />
                            <p className=" font-bold  text-black">{movie.vote_average}</p>
                        </div>
        
          </div>
          <p className="text-black font-semibold"> {movie.overview.slice(0, 80)}...</p>
         
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
