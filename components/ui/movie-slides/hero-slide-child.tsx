"use client";

import { Button } from "@nextui-org/button";
import { Tooltip, Pagination } from "@nextui-org/react";
import { motion, useMotionValue, Variants } from "framer-motion";
import {
  BsBadgeHdFill,
  BsInfoCircleFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import { FaCalendar, FaPlayCircle } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

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

const HeroSlideChild = ({ dataArray }: { dataArray: any[] }) => {
  const [slide, setSlide] = useState<number>(1);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setSlide((slide) => {
        if (slide != dataArray?.length) slide++;
        else slide = 1;
        return slide;
      });
    }, 5000);

    return () => clearInterval(intervalRef);
  }, [dataArray]);

  const handleDragEnd = () => {
    const x = dragX.get();

    if (x <= 50)
      setSlide((slide) => {
        if (slide != dataArray?.length) slide++;
        return slide;
      });
    else if (x >= 50)
      setSlide((slide) => {
        if (slide != 1) slide--;
        return slide;
      });
  };

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={slidesVarients}
      className="relative flex flex-col overflow-hidden items-center justify-center w-full rounded-lg"
    >
      <motion.div
        className="w-fit flex flex-row scrollbar-hide"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={handleDragEnd}
        style={{ x: dragX }}
        animate={{
          translateX: `-${100 * (slide - 1)}%`,
          transition: { duration: 0.5, type: "spring" },
        }}
      >
        {dataArray.map((data, idx) => (
          <SlideElement key={idx} position={idx} data={data} />
        ))}
      </motion.div>
      <div className="shadow-lg rounded-xl absolute bottom-3 p-1 backdrop-blur-lg bg-zinc-500 bg-opacity-15 hidden sm:block">
        <Pagination
          total={dataArray.length}
          page={slide}
          onChange={setSlide}
          size="sm"
          color="primary"
          variant="light"
          showControls
        />
      </div>
    </motion.div>
  );
};

const SlideElement = ({ data, position }: { data: any; position: number }) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4 w-full h-fit flex-shrink-0 flex-grow-0 flex-auto rounded-lg">
      <div className="relative flex flex-row justify-end w-full h-fit rounded-lg">
        <div className="bg-transparent absolute w-full h-full bg-gradient-to-r from-background md:via-background md:via-40% rounded-lg"></div>
        <div className="absolute w-full h-full flex flex-col justify-end py-8 sm:py-24 gap-1 sm:gap-2 md:gap-4 rounded-lg">
          <span className="text-primary">{`#${position + 1} Trending`}</span>
          <span className="text-2xl sm:text-3xl md:text-5xl font-bold">
            {data.name || data.title}
          </span>
          <div className="flex-row gap-6 items-center text-sm hidden md:flex">
            <div className="flex flex-row gap-1 items-center">
              <PiTelevisionSimpleFill size={18} />
              {data.media_type?.toUpperCase()}
            </div>
            <div className="flex flex-row gap-1 items-center">
              <FaCalendar size={14} />
              {data.first_air_date || data.release_date}
            </div>
            <BsBadgeHdFill size={22} />
          </div>
          <div className="flex flex-row justify-between w-[55%]">
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
              <Link
                href={
                  data.media_type === "movie"
                    ? `/movies/${data.id}`
                    : `/tv/${data.id}`
                }
              >
                <Button
                  size="lg"
                  variant="flat"
                  endContent={
                    <MdArrowForward
                      size={25}
                      className="group-hover:rotate-[315deg] group-hover:scale-150 transition-transform group-hover:text-primary"
                    />
                  }
                  className="text-xl hidden md:flex backdrop-blur-xl bg-zinc-500 bg-opacity-25"
                >
                  More Info
                </Button>
              </Link>
              <Button
                className="p-0 bg-transparent border-none hover:scale-105 rounded-full h-fit w-fit flex md:hidden"
                isIconOnly
                variant="faded"
              >
                <BsInfoCircleFill color="white" size={32} />
              </Button>
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
          alt={`${data.title} Cover Image`}
          className="object-cover w-full md:w-[65%] h-auto rounded-lg"
          height={200}
          src={
            `https://image.tmdb.org/t/p/original${data.backdrop_path}` ||
            "/illustrations/chat"
          }
          width={2000}
        />
      </div>
    </div>
  );
};

export default HeroSlideChild;
