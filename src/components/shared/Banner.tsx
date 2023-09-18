import React, { useState, useEffect } from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

import { Movie } from '../../../utills/Typing'; // Remove MovieArray import
import { useGetMoviesQuery } from '@/app/Redux/api/api';
import { baseUrl } from '../../../constants/movieUrl';

const Banner = () => {
    const { data, error, isLoading } = useGetMoviesQuery(undefined);
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        if (data && data.results) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setMovie(data.results[randomIndex]);
        }
    }, [data]);

    const gradientBackground = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.3)), url(${baseUrl}${movie?.backdrop_path || movie?.poster_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <>
            {movie && (
                <div className="relative h-[95vh] w-screen" style={gradientBackground}>
                    <div className="container mx-auto flex flex-col space-y-2 py-4 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
                        <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl text-white">{movie.title}</h1>
                        <p className="max-w-xs text-sm sm:pt-2 text-shadow-md md:max-w-lg md:text-lg lg:max-w-4xl lg:text-lg text-white">{movie.overview}</p>

                        <div className="flex flex-col space-y-3 mt-4 md:flex-row md:space-x-3 md:items-center">
                            <button className="w-full md:w-auto rounded-full bannerButton bg-[#5436A9] text-white">
                                <FaPlay className="h-4 w-4 md:h-7 md:w-7" /> WATCH
                            </button>
                            <button className="w-full md:w-auto rounded-full bannerButton bg-[#5C5C5C] text-white">
                                MY LIST <PlusCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Banner;
