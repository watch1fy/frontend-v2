import React from "react";
import { ScrollShadow } from "@nextui-org/react";
import { getAllTrending } from "@/lib/functions/tmdb";
import MovieCardNotInSession from "./movie-card-no-sess";

const MovieSlidesNotInSession = async ({
  sectionTitle
}: {
  sectionTitle: string,
  key?: string,
  isPopular?: boolean
  desc?: string
}) => {
  const movies: any[] = await getAllTrending()
  return (
    <section className={"flex gap-2 justify-between flex-col"}>
      <span className={"text-2xl font-normal flex flex-col w-48 justify-between"}>
        {sectionTitle}
      </span>
      <ScrollShadow hideScrollBar orientation="horizontal" className="w-full">
        <div className="flex flex-row gap-6 w-fit py-4">
          {movies?.slice(1).map((movie) => (
            <MovieCardNotInSession
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              backdrop={movie.backdrop_path}
              image={movie.poster_path}
              votes={movie.vote_count}
              desc={movie.overview}
              adult={movie.adult}
            />
          ))}
        </div>
      </ScrollShadow>
    </section>
  );
};

export default MovieSlidesNotInSession;