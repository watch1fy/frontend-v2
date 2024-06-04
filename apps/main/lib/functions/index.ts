import {
  getMovieById,
  getTopRatedMovies,
  getSimilarMovies,
  getPopularMovies,
  getMovieImages,
  getMovieReviews,
  getMovieVideos,
} from "./movies";
import { getTopRatedTv, getPopularTv } from "./tv";

export const getAllTrending = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=${process.env.TMDB_API_KEY}`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  const movies: any[] = movies_res?.results;

  return movies;
};

export {
  getMovieById,
  getTopRatedMovies,
  getSimilarMovies,
  getPopularMovies,
  getMovieImages,
  getMovieReviews,
  getMovieVideos,
};

export { getTopRatedTv, getPopularTv };
