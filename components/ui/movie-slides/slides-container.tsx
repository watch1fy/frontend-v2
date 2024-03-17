"use client";

import { Button, ScrollShadow } from "@nextui-org/react";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import PopularMovieCard from "./popular-movie-card";
import MovieCard from "./movie-card";
import { useIsTablet } from "@/lib/hooks";

const slidesVarients: Variants = {
  hide: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SlidesContainer = ({
  sectionTitle,
  isPopular,
  categoryType,
  movies,
}: {
  sectionTitle: string;
  key?: string;
  isPopular?: boolean;
  desc?: string;
  categoryType: "popular-tv" | "popular-movie" | "top-movies" | "top-tv";
  movies: any[];
}) => {

  const isTab = useIsTablet()
  return (
    <motion.section
      initial="hide"
      whileInView="show"
      variants={slidesVarients}
      className={clsx(
        "flex gap-2 justify-between",
        isPopular && !isTab ? "flex-row" : "flex-col",
      )}
    >
      <div
        className={clsx(
          "font-normal flex flex-col w-48 justify-between",
          isPopular && !isTab ? "pb-4 pt-1" : "w-fit",
        )}
      >
        <span className="p-0 text-2xl flex flex-col gap-2">
          {sectionTitle}
          {isPopular && !isTab ? (
            <div className="text-zinc-400 text-sm">
              {`Watch ${categoryType === "popular-movie" ? "movies" : "TV shows"} that are most popular this week.`}
            </div>
          ) : null}
        </span>
        {isPopular && !isTab ? (
          <div className="flex flex-col gap-2 justify-start">
            <Button
              endContent={<FaArrowRight />}
              color="primary"
              variant="flat"
              className="text-lg"
            >
              See More
            </Button>
          </div>
        ) : null}
      </div>
      <ScrollShadow hideScrollBar orientation="horizontal" className="w-full">
        <div className="flex flex-row gap-8 w-fit py-4">
          {movies?.map((movie, idx) => {
            if (isPopular && !isTab)
              return (
                <PopularMovieCard
                  rank={idx}
                  key={movie.id}
                  id={movie.id}
                  title={movie.name || movie.title}
                  rating={movie.vote_average}
                  backdrop={movie.backdrop_path}
                  image={movie.poster_path}
                  votes={movie.vote_count}
                  desc={movie.overview}
                  adult={movie.adult}
                />
              );
            return (
              <MovieCard
                isFirst={idx === 0}
                isLast={idx === movies?.length - 1}
                key={movie.id}
                id={movie.id}
                title={movie.name || movie.title}
                rating={movie.vote_average}
                backdrop={movie.backdrop_path}
                image={movie.poster_path}
                votes={movie.vote_count}
                desc={movie.overview}
                adult={movie.adult}
              />
            );
          })}
        </div>
      </ScrollShadow>
    </motion.section>
  );
};

export default SlidesContainer;
