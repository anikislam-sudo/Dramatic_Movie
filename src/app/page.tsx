"use client";

import React from "react";
import { useGetMoviesQuery } from "./Redux/api/api";
import { Movie } from "../../utills/Typing";
import Banner from "@/components/shared/Banner";
import Image from "next/image";
import Row from "./movie/page";
import Tv from "./Tv/page";

//import Banner from '@/components/shared/Banner';

const Homepage = () => {
  const { data, error, isLoading } = useGetMoviesQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className=" ">
      <Banner></Banner>
      <Row></Row>
      <Tv></Tv>
      <div className="mt-1 mb-3 flex justify-center">
        <button className=" md:w-auto rounded-full bannerButton bg-[#5436A9] text-white">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Homepage;
