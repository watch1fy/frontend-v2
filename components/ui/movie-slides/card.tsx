"use client";
import { useIsTablet } from '@/lib/hooks';
import React from 'react'
import MovieCardTab from './movie-card-tab';
import MovieCard from './movie-card';
import { MovieCardProps } from '@/lib/types';

function Card({
  title,
  votes,
  backdrop,
  image,
  rating,
  desc,
  adult
}: MovieCardProps) {
  const isTab = useIsTablet()

  if (isTab)
    return (
      <MovieCardTab
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