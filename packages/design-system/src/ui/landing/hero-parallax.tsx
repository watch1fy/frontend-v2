"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { useIsTablet } from "@watchify/lib";

export const HeroParallax = ({ contentList }: { contentList: any[] }) => {
  const firstRow = contentList.slice(0, 5);
  const secondRow = contentList.slice(5, 10);
  const thirdRow = contentList.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-100, 0]),
    springConfig,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0.75]),
    springConfig,
  );
  return (
    <motion.div
      ref={ref}
      className="h-fit min-h-[calc(100vh-96px)] w-screen py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="absolute h-full w-full bottom-0 left-0 bg-transparent z-10 bg-gradient-to-t from-background via-transparent via-20%"></div>
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          scale,
        }}
        className="absolute top-auto left-0 opacity-25"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-24">
          {firstRow.map((content) => (
            <ContentCard
              content={content}
              translate={translateX}
              key={content.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-24 space-x-20">
          {secondRow.map((content) => (
            <ContentCard
              content={content}
              translate={translateXReverse}
              key={content.id}
            />
          ))}
        </motion.div>
        <motion.div
          style={{}}
          className="flex flex-row-reverse space-x-reverse space-x-20"
        >
          {thirdRow.map((content) => (
            <ContentCard
              content={content}
              translate={translateX}
              key={content.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Header = () => {
  const isTab = useIsTablet();

  return (
    <motion.div className="max-w-7xl relative mx-auto py-20 md:py-40 px-6 w-full left-0 top-0 z-20">
      <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
        Watch&nbsp;
        <span className="text-primary-500">Together</span>
        <br />
        Wherever you are.
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Watch together, even when miles apart. Real-time sync, video chat, and
        more. Share the magic of movies and series, bridging the gap of distance
        with Watchify&apos;s immersive features.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Link href={"#about-anchor"} className="md:w-fit">
          <Button
            variant="faded"
            color="default"
            radius="lg"
            size={isTab ? "md" : "lg"}
            className="w-full md:w-[200px] md:text-lg group flex gap-4"
          >
            Know More
            <MdArrowForward
              size={25}
              className="group-hover:rotate-[315deg] group-hover:scale-150 transition-transform group-hover:text-primary"
            />
          </Button>
        </Link>
        <Link href={"/demo"} className="md:w-fit">
          <Button
            variant="shadow"
            color="primary"
            radius="lg"
            size={isTab ? "md" : "lg"}
            className="w-full md:w-[200px] md:text-lg"
          >
            Try Demo
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export const ContentCard = ({
  content,
  translate,
}: {
  content: any;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={content.id}
      className="group/content md:w-[559px] md:h-80 relative flex-shrink-0 rounded-xl"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${content.backdrop_path}`}
        alt=""
        width={200}
        height={200}
        className="w-full h-auto rounded-xl"
      />
    </motion.div>
  );
};
