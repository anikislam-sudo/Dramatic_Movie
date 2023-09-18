import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Thumbnail from '../../components/UI/Thumbnail';
import { useGetMoviesQuery } from '@/app/Redux/api/api';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Movie } from '../../../utills/Typing';

const Row = () => {
  const { data, error, isLoading } = useGetMoviesQuery(undefined);
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-4 mb-4 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-gray-300 transition duration-200 hover:text-white md:text-2xl">
        MOVIES
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute text-black top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-100 transition hover:scale-125 ${
            !isMoved && 'opacity-0'
          }`}
          onClick={() => handleClick('left')}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 md:space-x-2.5 md:p-2 "
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            scrollbarWidth: 'none', // Hide scrollbar on Firefox
            WebkitOverflowScrolling: 'touch', // Add touch scrolling support for iOS
          }}
        >
          {data &&
            data.results.map((movie: Movie) => (
              <Thumbnail key={movie.id} movie={movie} />
            ))}
        </div>

        <ChevronRightIcon
          className={`absolute text-black top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-100 transition hover:scale-125`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default Row;
