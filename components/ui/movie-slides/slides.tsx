import React from "react";
import { ScrollShadow } from "@nextui-org/react";
import Card from "./card";
import { getTmdbMovies } from "@/lib/functions/tmdb";

const MovieSlides = async ({ sectionTitle, key = 'popular' }: { sectionTitle: string, key?: string }) => {
  const movies: any[] = await getTmdbMovies(key)
  return (
    <section className="flex flex-col gap-2">
      <span className="text-2xl md:text-3xl font-normal flex flex-row">
        {sectionTitle}
      </span>
      <ScrollShadow hideScrollBar orientation="horizontal" className="w-full">
        <div className="flex flex-row gap-6 w-fit py-4">
          {movies?.slice(1).map((movie) => (
            <Card
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

export default MovieSlides;
