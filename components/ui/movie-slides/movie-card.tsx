import React from "react";
import Image from "next/image";
import { MovieCardProps } from "@/lib/types";
import { BsPlusCircleFill } from "react-icons/bs";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { FaPlayCircle } from "react-icons/fa";
import { MdFontDownload } from "react-icons/md";

export const MovieCard = ({ adult, title, image, isFirst, isLast }: MovieCardProps) => {
  return (
    <div className="group rounded-lg flex-grow-0 flex-shrink-0">
      <div
        className={`w-[148px] h-56 transition-height group-hover:scale-110 ${isFirst && "group-hover:translate-x-2"} ${isLast && "group-hover:-translate-x-2"} transition-transform`}
      >
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
            backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
          }}
          className="w-full h-full hidden group-hover:block bg-cover bg-center rounded-lg"
        >
          <div className="w-full h-full backdrop-brightness-50 hidden group-hover:flex flex-col gap-2 p-2 justify-end">
            <span className="flex flex-row justify-start items-center gap-2">
              <p className="text-xl text-white">{title}</p>
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
                className="p-0 block bg-transparent border-none hover:scale-110 rounded-full h-fit w-fit"
                isIconOnly
                variant="faded"
              >
                <FaPlayCircle color="white" size={32} />
              </Button>
              <Tooltip
                size="sm"
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
                  <BsPlusCircleFill color="white" size={30} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
