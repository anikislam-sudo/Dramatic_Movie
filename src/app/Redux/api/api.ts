// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API}` }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () =>{
        return{
            url:`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
            method:"get"
        }
      } 
    }),
    getTVSeries: builder.query({
      query: () => {
        return {
          url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
          method: "get"
        }
      }
    }),
  }),
});


export const { useGetMoviesQuery,useGetTVSeriesQuery } = apiSlice;
