import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  ScrollShadow,
  CardBody,
} from "@nextui-org/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const MovieSlides = async () => {
  let movies_res: any;
  try {
    movies_res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
    ).then((data) => data.json());
  } catch {}

  const movies: any[] = movies_res?.results;

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl md:text-3xl font-normal pl-6 flex flex-row">
        Upcoming on watch
        <p className="text-primary font-semibold">i</p>
        <p className="text-primary font-semibold rotate-180">i</p>
        fy
      </span>
      <ScrollShadow hideScrollBar orientation="horizontal" className="w-full">
        <div className="flex flex-row gap-4 w-fit p-4">
          {movies?.map((movie, idx) => (
            <MovieCard
              key={idx}
              title={movie.title}
              rating={movie.vote_average}
              image={movie.poster_path}
              votes={movie.vote_count}
              desc={movie.overview}
            />
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
};

export const MovieCard = ({
  title,
  image,
  rating,
  votes,
}: {
  title: string;
  image: string;
  rating: number;
  votes: number;
  desc: string;
}) => {
  return (
    <Card radius="lg" className="border-none w-56 h-fit">
      <CardHeader>
        <p className="text-xl truncate w-full">{title}</p>
      </CardHeader>
      <CardBody>
        <Image
          priority
          alt={`${title} Cover Image`}
          className="object-cover rounded-lg w-full h-auto"
          height={200}
          src={
            `https://image.tmdb.org/t/p/original${image}` ||
            "/illustrations/chat"
          }
          width={200}
        />
      </CardBody>
      <CardFooter className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-start gap-2 justify-center">
          <FaStar className="my-[2px]" color="#ffbf00" />
          <div className="flex flex-col justify-start">
            <div className="flex flex-row justify-end items-end gap-1">
              {Number(rating).toFixed(1)}/
              <p className="text-sm text-gray-500">10</p>
            </div>
            <p className="text-sm text-gray-500">{votes}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MovieSlides;
