import { getAllTrending } from '@/lib/functions/tmdb'
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaCalendar, FaPlayCircle } from "react-icons/fa";
import Image from 'next/image'
import { BsBadgeHdFill, BsPlusCircleFill } from "react-icons/bs";
import { Button, Pagination, ScrollShadow, Tooltip } from '@nextui-org/react';
import { MdArrowForward } from 'react-icons/md';

const HeroSlide = async ({ sectionTitle, key = 'popular' }: { sectionTitle: string, key?: string }) => {
  const movies = await getAllTrending()

  return (
    <section className='relative flex flex-col justify-center items-center gap-4'>
      <div className='relative flex flex-row justify-end w-full h-fit'>
        <div className='bg-transparent absolute w-full h-full bg-gradient-to-r from-background via-background via-15%'></div>
        <div className='absolute top-0 right-0 w-[75%] h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent via-70% to-background to-80%'></div>
        <div className='absolute w-full h-full flex flex-col justify-end py-12 gap-4'>
          <span className='text-primary'>
            #3 Trending
          </span>
          <span className='text-5xl'>
            {movies[3].original_name}
          </span>
          <div className='flex flex-row gap-6 items-center text-sm'>
            <div className='flex flex-row gap-1 items-center'>
              <PiTelevisionSimpleFill size={18} />
              {movies[3].media_type?.toUpperCase()}
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <FaCalendar size={14} />
              {movies[3].first_air_date}
            </div>
            <BsBadgeHdFill size={22} />
          </div>
          <ScrollShadow className='w-[50%] h-32' hideScrollBar>
            {movies[3].overview}
          </ScrollShadow>
          <div className='flex flex-row justify-between w-full md:w-[50%]'>
            <Button
              variant="ghost"
              color='primary'
              size='lg'
              startContent={<FaPlayCircle />}
              className='text-xl'>
              Play now
            </Button>
            <div className='flex flex-row items-center gap-4'>
              <Button
                size='lg'
                variant='flat'
                endContent={
                  <MdArrowForward
                    size={25}
                    className="group-hover:rotate-[315deg] group-hover:scale-150 transition-transform group-hover:text-primary"
                  />
                }
                className='text-xl'>
                More Info
              </Button>
              <Tooltip
                className="bg-white text-black"
                content={"Add to watchlist"}
                delay={0}
                closeDelay={0}
              >
                <Button
                  className="p-0 bg-transparent border-none hover:scale-105 rounded-full h-fit w-fit"
                  isIconOnly
                  variant="faded"
                >
                  <BsPlusCircleFill color="white" size={46} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
        <Image
          priority
          alt={`${movies[0].title} Cover Image`}
          className="object-cover w-[75%] h-auto"
          height={200}
          src={
            `https://image.tmdb.org/t/p/original${movies[3].backdrop_path}` ||
            "/illustrations/chat"
          }
          width={2000}
        />
      </div>
      <Pagination
        // className='absolute bottom-3'
        total={movies?.length}
        size='md'
        color="primary"
        variant="flat"
        showControls />
    </section>
  )
}

export default HeroSlide