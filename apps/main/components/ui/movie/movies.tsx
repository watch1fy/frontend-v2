"use client";

import { Button } from "@nextui-org/button";
import {
  Chip,
  ScrollShadow,
  Spacer,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { BsBadgeHdFill, BsPlusCircleFill } from "react-icons/bs";
import { FaCalendar, FaPlayCircle } from "react-icons/fa";
import Image from "next/image";
import { FaClock, FaStar } from "react-icons/fa6";
import MovieCard from "../movie-slides/movie-card";

const slidesVarients: Variants = {
  hide: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const MoviePage = ({
  movie,
  similarMovies,
  images,
  videos,
  reviews,
}: {
  movie: any;
  similarMovies: any[];
  images: any;
  videos: any[];
  reviews: any[];
}) => {
  const getRunTimeFromMinutes = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins < 10 ? `0${mins}` : mins}m`;
  };

  const runtime: string = getRunTimeFromMinutes(movie?.runtime as number);

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={slidesVarients}
      className="relative h-full top-0 flex flex-col overflow-hidden items-center justify-center w-full gap-4"
    >
      <div className="relative flex flex-col justify-center items-center gap-4 w-full h-full flex-shrink-0 flex-grow-0 flex-auto">
        <div className="relative flex flex-row justify-end w-full h-full">
          <div className="bg-transparent absolute w-full h-full bg-gradient-to-r from-background md:via-background md:via-30%"></div>
          <div className="absolute w-full h-full flex flex-col justify-end py-8 px-12 sm:py-24 gap-1 sm:gap-2 md:gap-4">
            <div className="flex flex-col gap-1">
              {images.logos && images.logos.length > 0 ? (
                <Image
                  alt={`Movie/Tv Logo`}
                  src={`https://image.tmdb.org/t/p/original${images.logos[0]?.file_path}`}
                  className="w-fit h-auto aspect-auto"
                  height={50}
                  width={150}
                />
              ) : (
                <span className="text-2xl sm:text-3xl md:text-6xl font-bold">
                  {movie.name || movie.title}
                  {movie.tagline ? (
                    <p className="text-zinc-400">{movie.tagline}</p>
                  ) : null}
                </span>
              )}
            </div>
            <Spacer y={4} />
            <div className="flex-row gap-6 items-center text-md hidden md:flex">
              <div className="flex flex-row gap-1 items-center">
                <FaStar className="text-primary" size={18} />
                {Number(movie.vote_average).toFixed(1)}/10
              </div>
              <div className="flex flex-row gap-1 items-center">
                <FaClock size={14} />
                {runtime}
              </div>
              <div className="flex flex-row gap-1 items-center">
                <FaCalendar size={14} />
                {movie.first_air_date || movie.release_date}
              </div>
              <BsBadgeHdFill size={22} />
            </div>
            <div className="w-[50%] h-fit hidden lg:block text-lg">
              {movie.overview}
            </div>
            <div className="flex flex-row gap-4 items-center">
              {movie.genres?.map(
                (genre: { id: number; name: string }, idx: number) => (
                  <Chip
                    variant="flat"
                    color="default"
                    className="cursor-default"
                    key={idx}
                  >
                    {genre.name}
                  </Chip>
                ),
              )}
            </div>
            <Spacer y={4} />
            <div className="flex flex-row gap-8 w-[55%]">
              <Button
                variant="ghost"
                color="primary"
                size="lg"
                startContent={<FaPlayCircle />}
                className="text-xl md:flex hidden"
              >
                Play now
              </Button>
              <Button
                variant="ghost"
                color="primary"
                size="lg"
                isIconOnly
                className="p-0 bg-transparent border-none hover:scale-105 rounded-full h-fit w-fit md:hidden flex"
              >
                <FaPlayCircle size={36} />
              </Button>
              <div className="flex flex-row items-center gap-4">
                <Tooltip
                  className="bg-white text-black"
                  content={"Add to watchlist"}
                  delay={0}
                  closeDelay={0}
                >
                  <div>
                    <BsPlusCircleFill
                      className="md:flex hidden hover:scale-105 transition cursor-pointer"
                      color="white"
                      size={46}
                    />
                    <BsPlusCircleFill
                      className="flex md:hidden hover:scale-105 transition cursor-pointer"
                      color="white"
                      size={32}
                    />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
          <Image
            priority
            alt={`${movie.title} Cover Image`}
            className="object-cover w-full md:w-[75%] h-auto"
            height={200}
            src={
              `https://image.tmdb.org/t/p/original${images?.backdrops[0]?.file_path}` ||
              "/illustrations/chat"
            }
            width={2000}
          />
        </div>
      </div>
      <Tabs color="primary" aria-label="Tabs" radius="full">
        <Tab key="details" title="Details" />
        <Tab key="reviwes" title="Reviews" />
        <Tab key="related" title="Related" className="w-full">
          <SimilarMovies movies={similarMovies} />
        </Tab>
      </Tabs>
    </motion.div>
  );
};

const SimilarMovies = ({ movies }: { movies: any[] }) => {
  return (
    <div className="w-full px-12">
      <ScrollShadow hideScrollBar orientation="horizontal" className="w-full">
        <div className="flex flex-row gap-8 w-fit py-4">
          {movies
            ?.filter((movie) => movie.poster_path)
            .map((movie, idx) => (
              <MovieCard
                id={movie.id}
                isFirst={idx === 0}
                isLast={idx === movies?.length - 1}
                key={movie.id}
                title={movie.name || movie.title}
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
    </div>
  );
};

export default MoviePage;
