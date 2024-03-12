import { getPopularMovies, getPopularTv } from "@/lib/functions/tmdb";
import SlidesContainer from "./slides-container";

const categoryToFetchMapper = {
  "popular-tv": getPopularTv,
  "popular-movie": getPopularMovies,
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
  categoryType: "popular-tv" | "popular-movie";
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
