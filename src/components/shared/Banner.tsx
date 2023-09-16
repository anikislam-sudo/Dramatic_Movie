"use client";
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

    return (
        <>
            {movie && (
                <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
                    <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                        <Image
                            src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
                            layout="fill"
                            objectFit="cover"
                            alt="Poster Image"
                        />
                    </div>
                    <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl text-white">
                        {movie.title}
                    </h1>
                    <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-4xl lg:text-sm">
                        {movie.overview}
                    </p>

                    <div className="flex space-x-3">
                        <button className=" rounded-full bannerButton rounded-3xl bg-[#5436A9] text-white">
                            <FaPlay className="h-4 w-4 text-white md:h-7 md:w-7" /> WATCH
                        </button>
                        <button className="rounded-full bannerButton rounded-3xl bg-[#5C5C5C] text-white">
                            MY LIST <PlusCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Banner;
