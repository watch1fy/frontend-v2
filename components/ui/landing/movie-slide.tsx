import React from "react";
import { Button, ScrollShadow, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import clsx from "clsx";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdFontDownload } from "react-icons/md";

const MovieSlides = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
      {
        cache: "force-cache",
      },
    ).then((data) => data.json());
  } catch {}

  const movies: any[] = movies_res?.results;

  return (
    <section className="flex flex-col gap-2">
      <span className="text-2xl md:text-3xl font-normal flex flex-row">
        Upcoming on watch
        <p className="text-primary font-semibold">i</p>
        <p className="text-primary font-semibold rotate-180">i</p>
        fy
      </span>
      <ScrollShadow hideScrollBar orientation="horizontal" className="w-full">
        <div className="flex flex-row gap-6 w-fit py-4">
          {movies?.map((movie) => (
            <MovieCard
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

export const MovieCard = ({
  title,
  image,
  backdrop,
  desc,
  adult,
}: {
  title: string;
  image: string;
  backdrop: string;
  rating: number;
  votes: number;
  desc: string;
  adult: boolean;
}) => {
  return (
    <div className="group rounded-lg transition-colors transition-width border-none flex-grow-0 flex-shrink-0 shadow-none">
      <div className="w-[148px] md:w-[212px] group-hover:w-[556px] h-56 md:h-80 transition-width">
        <Image
          priority
          alt={`${title} Cover Image`}
          className="object-cover rounded-lg w-auto h-full group-hover:hidden"
          height={200}
          src={
            `https://image.tmdb.org/t/p/original${image}` ||
            "/illustrations/chat"
          }
          width={2000}
        />
        <div
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${backdrop}`,
          }}
          className={clsx(
            "bg-center bg-no-repeat bg-cover",
            "rounded-lg group-hover:flex hidden w-full h-full",
          )}
        >
          <div className="p-4 backdrop-brightness-50 w-full h-full flex flex-col justify-between gap-3 text-white">
            <ScrollShadow
              className="w-1/2"
              orientation="vertical"
              hideScrollBar
            >
              <span className="h-full w-full">{desc}</span>
            </ScrollShadow>
            <div className="w-full h-fit flex flex-col justify-start gap-2">
              <span className="flex flex-row justify-start items-center gap-2">
                <p className="text-4xl">{title}</p>
                {adult ? (
                  <Tooltip
                    className="bg-white text-black"
                    content="Rated 18+"
                    delay={0}
                    closeDelay={0}
                  >
                    <MdFontDownload size={14} />
                  </Tooltip>
                ) : null}
              </span>
              <div className="w-full flex flex-row justify-between">
                <Button
                  className="p-0 bg-transparent border-none hover:scale-110 rounded-full h-fit w-fit"
                  isIconOnly
                  variant="faded"
                >
                  <FaPlayCircle color="white" size={48} />
                </Button>
                <Tooltip
                  className="bg-white text-black"
                  content={"Add to watchlist"}
                  delay={0}
                  closeDelay={0}
                >
                  <Button
                    className="p-0 bg-transparent border-none hover:scale-110 rounded-full h-fit w-fit"
                    isIconOnly
                    variant="faded"
                  >
                    <BsPlusCircleFill color="white" size={46} />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSlides;
