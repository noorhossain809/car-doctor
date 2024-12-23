import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

type CardProps = React.ComponentProps<typeof Card>;

const Testimonials = ({ className, ...props }: CardProps) => {
  return (
    <div className="mx-auto max-w-7xl my-24">
      <div>
        <h1 className="text-center text-xl text-[#FF3811] font-bold">
          Testimonials
        </h1>
        <h2 className="text-center text-5xl text-slate-950 font-bold leading-tight tracking-wide mt-5">
          Our Testimonials Area
        </h2>
        <p className="text-center text-base leading-7 text-gray-500 tracking-wide pt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <Carousel className=" mt-12">
        <CarouselContent className="">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2">
              <div className="p-1 mx-12">
                <Card
                  className={cn("w-[554px] h-[349]", className)}
                  {...props}
                >
                  <CardContent className="py-4 relative">
                    {/* Add a background quote */}
                    <div className="absolute top-0 right-4 text-[#FF3811] text-[120px] font-bold opacity-10">
                      &rdquo;
                    </div>
                    <div>
                      <div className="flex items-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.image}
                          className="rounded-lg"
                          width={60}
                          height={60}
                        />
                        <div className="ml-4">
                          <h3 className="text-2xl text-slate-800 font-bold">
                            {testimonial.title}
                          </h3>
                          <h5 className="text-gray-500">
                            {testimonial.occupation}
                          </h5>
                        </div>
                      </div>
                      <div className="mt-4 space-y-4">
                        <h5 className="text-base text-gray-400 font-normal leading-8">
                          {testimonial.description}
                        </h5>
                        {/* Rating */}
                        <div className="flex justify-start mt-4 space-x-1 text-amber-500">
                          {[...Array(5)].map((_, starIndex) => (
                            <FaStar key={starIndex} className="text-2xl" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative mx-2 items-center bottom-48">
          <CarouselPrevious className="w-14 h-14 bg-[#F3F3F3] hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white" />
          <CarouselNext className="w-14 h-14 bg-[#F3F3F3] hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;

const testimonials = [
  {
    image: "/assets/images/testimonial/1.png",
    title: "Awlad Hossain",
    occupation: "Businessman",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    image: "/assets/images/testimonial/2.png",
    title: "Car Engine Plug",
    occupation: "Businessman",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    image: "/assets/images/testimonial/1.png",
    title: "Car Engine Plug",
    occupation: "Businessman",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    image: "/assets/images/testimonial/2.png",
    title: "Car Engine Plug",
    occupation: "Businessman",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
];
