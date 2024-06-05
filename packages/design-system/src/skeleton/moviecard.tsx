import { Card, ScrollShadow, Skeleton, CardBody } from "@nextui-org/react";

export const MovieCardSkeletonSlide = () => {
  return (
    <section className="flex flex-col gap-4">
      <span className="text-2xl md:text-3xl font-normal pl-6 flex flex-row">
        Upcoming on watch <p className="text-primary font-semibold">i</p> fy
      </span>
      <ScrollShadow hideScrollBar orientation="horizontal" className="w-full">
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
    </section>
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
