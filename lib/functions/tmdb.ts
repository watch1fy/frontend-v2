export const getPopularMovies = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&sort_by=popularity.desc`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch { }

  const movies: any[] = movies_res?.results;

  return movies;
}

export const getPopularTv = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&sort_by=popularity.desc`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch { }

  const movies: any[] = movies_res?.results;

  return movies;
}

export const getAllTrending = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=${process.env.TMDB_API_KEY}`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch { }

  const movies: any[] = movies_res?.results;

  return movies;
}
