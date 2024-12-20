"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";

const Banner = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="mx-auto max-w-7xl">
      <div className="my-10 mx-2 ">
        <Carousel className="w-full " plugins={[plugin.current]}>
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={index}>
                <div
                  className="h-[600px] rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${banner.image})`,
                  }}
                >
                  <div className="p-16 w-[40%]">
                    <h1 className="text-[60px] font-bold leading-tight antialiased tracking-normal text-white">
                      {banner.title}
                    </h1>
                    <p className="text-white mt-5 text-left text-base leading-6 font-normal">
                      {banner.description}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <Button
                        className="bg-[#FF3811] text-white py-6 text-lg border font-normal tracking-wider hover:bg-transparent hover:border border-[#FF3811] transition 
                duration-300 
                ease-in-out"
                      >
                        Discover More
                      </Button>
                      <Button
                        className="bg-transparent text-white py-6 text-lg border font-normal tracking-wider hover:bg-[#FF3811] border-white hover:border-[#FF3811] hover:text-white transition 
                duration-300 
                ease-in-out"
                variant="outline"
                      >
                        Latest Project
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-12 right-20">
            <CarouselPrevious className="w-10 h-10 hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white" />
            <CarouselNext className="w-10 h-10 hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, But the majority have suffered alteration in some form",
    image: "/assets/images/banner/1.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, But the majority have suffered alteration in some form",
    image: "/assets/images/banner/2.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    image: "/assets/images/banner/3.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    image: "/assets/images/banner/4.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    image: "/assets/images/banner/5.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    image: "/assets/images/banner/6.jpg",
  },
];
