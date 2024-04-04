import { LoadingPage } from "@/components/ui";
import MoviePage from "@/components/ui/movie/movies";
import {
  getMovieById,
  getMovieImages,
  getMovieReviews,
  getMovieVideos,
  getSimilarMovies,
} from "@/lib/functions/";
import { Suspense } from "react";

const getAllMovieDetails = async (id: number) => {
  const movie = await getMovieById(id as number);
  const similarMovies = await getSimilarMovies(id as number);
  const images = await getMovieImages(id as number);
  const videos = await getMovieVideos(id as number);
  const reviews = await getMovieReviews(id as number);

  return { movie, similarMovies, images, videos, reviews };
};

const Page = async ({ params }: { params: { id: number } }) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Watch params={params} />
    </Suspense>
  );
};

const Watch = async ({ params }: { params: { id: number } }) => {
  const { movie, similarMovies, images, videos, reviews } =
    await getAllMovieDetails(params.id as number);

  return (
    <MoviePage
      movie={movie}
      similarMovies={similarMovies}
      images={images}
      videos={videos}
      reviews={reviews}
    />
  );
};

export default Page;
