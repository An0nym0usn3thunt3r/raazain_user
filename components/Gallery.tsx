"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage]:any = useState();

  useEffect(()=>{
    setMainImage(productMedia[0]);
  }, [])

  return (
    <div className="flex flex-col gap-3 mx-auto w-[600px]">
      <Image
        src={mainImage}
        width={500}
        height={500}
        alt="product"
        className="w-96 h-[395px] rounded-lg shadow-xl object-cover mx-auto lg:mx-0"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide ">
        <Carousel className="w-full overflow-hidden">
          <CarouselContent className="mx-auto">
            {productMedia?.map((image, index) => (
              <CarouselItem className="basis-1/4">
                <Image
                  key={index}
                  src={image}
                  height={200}
                  width={200}
                  alt="product"
                  className={`w-16 h-16 rounded-lg object-cover cursor-pointer ${
                    mainImage === image ? "border-2 border-primary" : ""
                  }`}
                  onClick={() => setMainImage(image)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
