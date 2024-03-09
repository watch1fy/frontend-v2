import React from 'react'
import Image from "next/image";
import { MovieCardProps } from "@/lib/types";

const MovieCardNotInSession = ({
  title,
  image,
}: MovieCardProps) => {
  return (
    <div className="group rounded-lg flex-grow-0 flex-shrink-0">
      <div className="w-[148px] h-56 transition-height group-hover:scale-115">
        <Image
          priority
          alt={`${title} Cover Image`}
          className="object-cover rounded-lg w-auto h-full"
          height={200}
          src={
            `https://image.tmdb.org/t/p/original${image}` ||
            "/illustrations/chat"
          }
          width={2000}
        />
      </div>
    </div>
  );
};

export default MovieCardNotInSession