export const getPopularTv = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&sort_by=popularity.desc`,
    ).then((data) => data.json());
  } catch {}

  const movies: any[] = movies_res?.results;

  return movies;
};

export const getTopRatedTv = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200&api_key=${process.env.TMDB_API_KEY}`,
    ).then((data) => data.json());
  } catch {}

  const movies: any[] = movies_res?.results;

  return movies;
};
