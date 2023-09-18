import Image from 'next/image';
import React from 'react';
import { baseUrl } from '../../../constants/movieUrl';
import { Movie } from '../../../utills/Typing';
import { StarIcon } from '@heroicons/react/solid'; // Import the StarIcon from heroicons

const TvThumbnail = ({ tv,id }: { tv: Movie,id:number }) => {
  return (
    <div className="mt-5 mb-5 relative h-80 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-96 md:min-w-[260px] md:hover:scale-105">
      <div className="bg-white h-full w-full rounded-lg shadow-md overflow-hidden">
        <Image
          src={`${baseUrl}${tv.backdrop_path || tv.poster_path}`}
          className="object-cover h-2/3" // Adjust the size here
          alt=""
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="p-4 h-1/3 flex flex-col justify-between">
          <p className="text-black font-semibold">{tv.name}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" /> {/* StarIcon for IMDb */}
              <p className="ml-1 text-gray-600">{tv.vote_average}</p> 
              
            </div>
        
          </div>
          <p className="ml-1 text-gray-600">{tv.first_air_date}</p> 
        </div>
      </div>
    </div>
  );
};

export default TvThumbnail;
