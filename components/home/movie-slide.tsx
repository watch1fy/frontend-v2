import React from 'react';
import { Card, CardFooter, CardHeader, ScrollShadow, Skeleton, CardBody } from "@nextui-org/react";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const MovieSlides = async () => {
  const movies_res : any = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_APP_TMDB_API_KEY}`
  ).then((data) => data.json())

  const movies : any[] = movies_res.results;

  return (
    <div className='flex flex-col gap-4'>
      <span className='text-xl md:text-3xl font-normal pl-6 flex flex-row'>
        Upcoming on watch <p className='text-primary font-semibold'>i</p> fy
      </span>
      <ScrollShadow
        hideScrollBar
        orientation='horizontal'
        className='w-full'>
        <div className='flex flex-row gap-4 w-fit p-4'>
          {
            movies?.map((movie, idx) => 
              <MovieCard
                key={idx}
                title={movie.title}
                rating={movie.vote_average}
                image={movie.poster_path}
                votes={movie.vote_count}
                desc={movie.overview} />
            )
          }
        </div>
      </ScrollShadow>
    </div>
  )
}

export const MovieCard = ({ 
  title, image, rating, votes, desc
} : {
  title: string,
  image: string,
  rating: number,
  votes: number,
  desc: string
}) => {
  return (
    <Card
      radius="lg"
      className="border-none w-56 h-fit"
    >
      <CardHeader>
        <p className='text-xl truncate w-full'>{title}</p>
      </CardHeader>
      <CardBody>
        <Image
          alt={`${title} Cover Image`}
          className="object-cover rounded-lg w-fit h-auto"
          height={200}
          src={`https://image.tmdb.org/t/p/original${image}` || '/illustrations/chat'}
          width={200}
        />
      </CardBody>
      <CardFooter className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-start gap-2 justify-center'>
          <FaStar className='my-[2px]' color='#ffbf00'/>
          <div className='flex flex-col justify-start'>
            <div className='flex flex-row justify-end items-end gap-1'>
              {Number(rating).toFixed(1)}/
              <p className='text-sm text-gray-500'>
                10
              </p>
            </div>
            <p className='text-sm text-gray-500'>{votes}</p>
          </div>
        </div>
        <BsFillInfoCircleFill
          className='hidden group-hover:flex text-gray-500 cursor-pointer'/>
      </CardFooter>
    </Card>
  )
}

export const MovieCardSkeletonSlide = () => {
  return (
    <div className='flex flex-col gap-4'>
      <span className='text-xl md:text-3xl font-normal pl-6 flex flex-row'>
        Upcoming on watch <p className='text-primary font-semibold'>i</p> fy
      </span>
      <ScrollShadow
        hideScrollBar
        orientation='horizontal'
        className='w- pl-4 pb-4'>
        <div className='flex flex-row gap-4 w-fit'>
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
        </div>
      </ScrollShadow>
    </div>
  )
}

export const MovieCardSkeleton = () => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-64 h-fit"
    >
      <CardBody className='flex flex-col gap-4'>
        <Skeleton className="rounded-full">
          <div className="h-8 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-64 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-12 rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardBody>
    </Card>
  )
}

export default MovieSlides;
