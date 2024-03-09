"use client";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Image from "next/image";
import features from "@/config/features";
import React from "react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

function Features() {
  return (
    <section className="flex flex-col justify-start gap-2">
      <p className="text-2xl md:text-3xl font-normal">Features</p>
      <Accordion selectionMode="multiple" className="p-0">
        {features?.map((feature, idx) => (
          <AccordionItem
            className=" text-gray-500 dark:text-gray-400"
            key={idx}
            title={feature.heading}
          >
            <div className="flex flex-col-reverse md:flex-row gap-4 pb-4 justify-between">
              <div className="md:w-[50%] w-full flex flex-col justify-between gap-4">
                <p className="w-full">{feature.content}</p>
                <Link href={"#"} className="md:w-fit">
                  <Button
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="lg"
                    className="md:w-[200px] w-full text-lg flex gap-4"
                  >
                    Know More
                    <MdArrowForward
                      size={22}
                      className="rotate-[315deg] scale-150 text-primary"
                    />
                  </Button>
                </Link>
              </div>
              <Image
                className="md:w-[30%] w-full h-auto"
                alt="feature-image"
                src={feature.src}
                height={150}
                width={150}
              />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default Features;
