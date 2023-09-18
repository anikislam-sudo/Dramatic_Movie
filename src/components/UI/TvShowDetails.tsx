import Link from "next/link";
import { Movie } from "../../../utils/Typing";
import { FaImdb, FaPlay } from "react-icons/fa";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { baseUrl } from "../../../constants/movieUrl";

const TvShowDetails = ({ data, id }: { data: Movie, id: number }) => {
  const { name, number_of_seasons, original_name, number_of_episodes, vote_average, backdrop_path, poster_path, overview, homepage } = data;

  const gradientBackground = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.3)), url(${baseUrl}${backdrop_path || poster_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="relative h-[95vh] w-screen" style={gradientBackground}>
      <div className="container mx-auto flex flex-col space-y-2 py-4 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <h1 className=" titles text-2xl md:text-4xl lg:text-5xl text-white block">
          {name}
        </h1>
        <p className="max-w-xs text-sm sm:pt-2 text-shadow-md md:max-w-lg md:text-lg lg:max-w-4xl lg:text-lg text-white">{overview}</p>
        <div className="flex items-center space-x-2 text-white">
          <FaImdb size={64} className="text-yellow-500" />
          <p className="text-2xl font-bold md:text-4xl lg:text-5xl">{vote_average}</p>
        </div>
        <p className="max-w-xs text-sm font-bold sm:pt-2 text-shadow-md md:max-w-lg md:text-lg lg:max-w-4xl lg:text-lg text-white">Season: {number_of_seasons}</p>
        <p className="max-w-xs text-sm font-bold sm:pt-2 text-shadow-md md:max-w-lg md:text-lg lg:max-w-4xl lg:text-lg text-white">Total Episodes: {number_of_episodes}</p>

        <div className="flex flex-col space-y-3 mt-4 md:flex-row md:space-x-3 md:items-center">
          <Link href={homepage}>
            <button className="w-full md:w-auto flex items-center justify-center rounded-full bannerButton bg-[#5436A9] text-white">
              WATCH <FaPlay className="h-4 w-4 md:h-7 md:w-7 ml-2" />
            </button>
          </Link>
          <button className="w-full md:w-auto flex items-center justify-center rounded-full bannerButton bg-[#5C5C5C] text-white">
            MY LIST <PlusCircleIcon className="h-5 w-5 md:h-8 md:w-8 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TvShowDetails;
