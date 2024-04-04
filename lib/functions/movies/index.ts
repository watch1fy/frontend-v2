export const getPopularMovies = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&sort_by=popularity.desc`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  const movies: any[] = movies_res?.results;

  return movies;
};

export const getTopRatedMovies = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&sort_by=vote_avg.desc`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  const movies: any[] = movies_res?.results;

  return movies;
};

export const getMovieById = async (id: number) => {
  let movieDetails: any;
  try {
    movieDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  return movieDetails;
};

export const getSimilarMovies = async (id: number) => {
  let movies: any;
  try {
    movies = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  return movies?.results;
};

export const getMovieImages = async (id: number) => {
  let images: any;
  try {
    images = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?language=en&api_key=${process.env.TMDB_API_KEY}`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  if (
    !images.backdrops.length ||
    !images.logos.length ||
    !images.posters.length
  )
    try {
      images = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_API_KEY}`,
        {
          cache: "force-cache",
        },
      ).then((data) => data.json());
    } catch {}

  return images;
};

export const getMovieVideos = async (id: number) => {
  let videos: any;
  try {
    videos = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  return videos?.results;
};

export const getMovieReviews = async (id: number) => {
  let reviews: any;
  try {
    reviews = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_API_KEY}`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  return reviews?.results;
};
