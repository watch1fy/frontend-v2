import {
  getPopularMovies,
  getPopularTv,
  getTopRatedMovies,
  getTopRatedTv,
} from "@/lib/functions/";
import SlidesContainer from "./slides-container";

const categoryToFetchMapper = {
  "popular-tv": getPopularTv,
  "popular-movie": getPopularMovies,
  "top-movies": getTopRatedMovies,
  "top-tv": getTopRatedTv,
};

const MovieSlides = async ({
  sectionTitle,
  isPopular,
  categoryType,
}: {
  sectionTitle: string;
  key?: string;
  isPopular?: boolean;
  desc?: string;
  categoryType: "popular-tv" | "popular-movie" | "top-movies" | "top-tv";
}) => {
  const dataFetchFunction = categoryToFetchMapper[categoryType];
  const movies: any[] = await dataFetchFunction();
  return (
    <SlidesContainer
      sectionTitle={sectionTitle}
      isPopular={isPopular}
      movies={movies}
      categoryType={categoryType}
    />
  );
};

export default MovieSlides;
