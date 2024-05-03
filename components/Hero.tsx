"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "@nextui-org/react"
export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true })
}

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
    
  )
  const images = [
    "/carousel/Ramadan_banner_copy.png",
    "/carousel/LAROCHE_banner_copy.png",
    "/carousel/O_TWO_O_banner_copy.png",
    "/carousel/COSRX_banner_copy.png",
    "/carousel/FEAMLE_copy_2e626a08-ef24-4bfe-9bfe-eb9c0b65909e.png",
    "/carousel/SKIN_CARE_BANNER_copy.png",
    "/carousel/FAV_logo_348237d8-3a73-4d8a-864a-c6deea500044.png",
    "/carousel/HOME_DECURATION_copy_9b13ecf0-7109-4b7b-bbfd-754053b5de12.png",
  ];
  return (
    <Carousel
    plugins={[plugin.current]}
    className="w-full mx-auto"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
    
  >
    <CarouselContent>
      {images.map((image, index) => (
        <CarouselItem key={index}  className="">
          <div className="p-0">
            <Card>
              <CardContent className="flex aspect-auto items-center justify-center p-0">
                <Image src={image}  alt="Tax Innovation"/>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  );
}