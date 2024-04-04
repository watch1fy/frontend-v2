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

const TvPage = ({
  show,
  similarShows,
  images,
  videos,
  reviews,
}: {
  show: any;
  similarShows: any[];
  images: any;
  videos: any[];
  reviews: any[];
}) => {
  const getRunTimeFromMinutes = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins < 10 ? `0${mins}` : mins}m`;
  };

  const getRandomBackdropPath = (backdrops: any[]) => {
    if (backdrops.length === 1) return backdrops[0].file_path;
    let randomIndex = Math.floor(Math.random() * backdrops.length);
    if (randomIndex === 0) randomIndex++;

    return backdrops[randomIndex].file_path;
  };

  const runtime: string = getRunTimeFromMinutes(show?.runtime as number);
  const backdropPath = getRandomBackdropPath(images?.backdrops);

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
                  alt={``}
                  src={`https://image.tmdb.org/t/p/original${images.logos[0]?.file_path}`}
                  className="w-fit h-auto aspect-auto"
                  height={50}
                  width={150}
                />
              ) : (
                <span className="text-2xl sm:text-3xl md:text-6xl font-bold">
                  {show.name || show.title}
                  {show.tagline ? (
                    <p className="text-zinc-400">{show.tagline}</p>
                  ) : null}
                </span>
              )}
            </div>
            <Spacer y={4} />
            <div className="flex-row gap-6 items-center text-md hidden md:flex">
              <div className="flex flex-row gap-1 items-center">
                <FaStar className="text-primary" size={18} />
                {Number(show.vote_average).toFixed(1)}/10
              </div>
              <div className="flex flex-row gap-1 items-center">
                <FaClock size={14} />
                {runtime}
              </div>
              <div className="flex flex-row gap-1 items-center">
                <FaCalendar size={14} />
                {show.first_air_date || show.release_date}
              </div>
              <BsBadgeHdFill size={22} />
            </div>
            <div className="w-[50%] h-fit hidden lg:block text-lg">
              {show.overview}
            </div>
            <div className="flex flex-row gap-4 items-center">
              {show.genres?.map(
                (genre: { id: number; name: string }, idx: number) => (
                  <Chip
                    variant="flat"
                    color="primary"
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
                  <Button
                    className="p-0 bg-default border-none hover:scale-105 rounded-full h-fit w-fit"
                    isIconOnly
                    variant="faded"
                  >
                    <BsPlusCircleFill
                      className="md:flex hidden"
                      color="white"
                      size={46}
                    />
                    <BsPlusCircleFill
                      className="flex md:hidden"
                      color="white"
                      size={32}
                    />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
          <Image
            priority
            alt={`${show.title} Cover Image`}
            className="object-cover w-full md:w-[75%] h-auto"
            height={200}
            src={
              `https://image.tmdb.org/t/p/original${backdropPath}` ||
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
          <Similarshows shows={similarShows} />
        </Tab>
      </Tabs>
    </motion.div>
  );
};

const Similarshows = ({ shows }: { shows: any[] }) => {
  return (
    <div className="w-full px-12">
      <ScrollShadow hideScrollBar orientation="horizontal" className="w-full">
        <div className="flex flex-row gap-8 w-fit py-4">
          {shows
            ?.filter((show) => show.poster_path)
            .map((show, idx) => (
              <MovieCard
                id={show.id}
                isFirst={idx === 0}
                isLast={idx === shows?.length - 1}
                key={show.id}
                title={show.name || show.title}
                rating={show.vote_average}
                backdrop={show.backdrop_path}
                image={show.poster_path}
                votes={show.vote_count}
                desc={show.overview}
                adult={show.adult}
              />
            ))}
        </div>
      </ScrollShadow>
    </div>
  );
};

export default TvPage;
