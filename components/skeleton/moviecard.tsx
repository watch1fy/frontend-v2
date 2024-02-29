import {
  Card,
  ScrollShadow,
  Skeleton,
  CardBody,
} from "@nextui-org/react";

export const MovieCardSkeletonSlide = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl md:text-3xl font-normal pl-6 flex flex-row">
        Upcoming on watch <p className="text-primary font-semibold">i</p> fy
      </span>
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        className="w- pl-4 pb-4"
      >
        <div className="flex flex-row gap-4 w-fit">
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
  );
};

export const MovieCardSkeleton = () => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none w-64 h-fit">
      <CardBody className="flex flex-col gap-4">
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
  );
};