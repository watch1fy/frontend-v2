import React from "react";
import { Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import clsx from "clsx";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdFontDownload } from "react-icons/md";
import { MovieCardProps } from "@/lib/types";

export const PopularMovieCard = ({
  rank = 1,
  title,
  image,
  backdrop,
  adult,
}: MovieCardProps) => {
  return (
    <div className="group rounded-lg transition-colors transition-width border-none flex-grow-0 flex-shrink-0 shadow-none flex flex-row items-end gap-4 pl-4">
      <span className="text-2xl font-semibold group-hover:scale-150 transition-transform">
        {rank < 10 ? `0${rank + 1}` : rank + 1}
      </span>
      <div className="w-[212px] group-hover:w-[559px] h-80 transition-width">
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
          <div className="p-4 backdrop-brightness-50 w-full h-full flex flex-col justify-end gap-[-12] text-white">
            <div className="w-full h-fit flex flex-col justify-start gap-2">
              <span className="flex flex-row justify-start items-center gap-2">
                <p className="text-4xl w-full text-ellipsis overflow-hidden whitespace-nowrap">
                  {title}
                </p>
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

export default PopularMovieCard;
