import React from 'react';
import { Card, CardFooter, Button, CardHeader } from "@nextui-org/react";
import Image from 'next/image';

function MovieSlides() {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-48 mt-16"
    >
      <CardHeader>
        this is the header
      </CardHeader>
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/illustrations/chat.svg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny">Available soon.</p>
        <Button className="text-tiny bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MovieSlides;
