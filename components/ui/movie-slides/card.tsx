"use client";

import React from 'react'
import MovieCard from './movie-card';
import PopularMovieCard from './popular-movie-card';
import { MovieCardProps } from '@/lib/types';

function Card({
  rank,
  title,
  votes,
  backdrop,
  image,
  rating,
  desc,
  adult,
  isPopular
}: MovieCardProps) {

  if (isPopular)
    return (
      <PopularMovieCard
        rank={rank}
        title={title}
        rating={rating}
        backdrop={backdrop}
        image={image}
        votes={votes}
        desc={desc}
        adult={adult}
      />
    )
  return (
    <MovieCard
      title={title}
      rating={rating}
      backdrop={backdrop}
      image={image}
      votes={votes}
      desc={desc}
      adult={adult}
    />
  )
}

export default Card