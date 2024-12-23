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
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

type CardProps = React.ComponentProps<typeof Card>;

const Testimonials = ({ className, ...props }: CardProps) => {
  return (
    <div className="mx-auto max-w-7xl my-24">
      <div>
        <h1 className="text-center text-xl text-[#FF3811] font-bold">Testimonials</h1>
        <h2 className="text-center text-5xl text-slate-950 font-bold leading-tight tracking-wide mt-5">
          Our Testimonials Area
        </h2>
        <p className="text-center text-base leading-7 text-gray-500 tracking-wide pt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <Carousel className="mt-12">
        <CarouselContent className="">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 mx-10">
                <Card className={cn("w-[364px] h-[487]", className)} {...props}>
                  <CardContent className="py-4">
                    <div className="rounded-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.image}
                        className=" rounded-lg mx-auto"
                        width={314}
                        height={293}
                      />
                    </div>
                    <div className="mt-4 space-y-4 ">
                      <h3 className="text-2xl text-slate-800 font-bold text-center">
                        {testimonial.title}
                      </h3>
                      <h5 className="text-xl text-gray-400 font-semibold text-center">
                        {testimonial.description}
                      </h5>
                      <div className="flex gap-2 justify-center">
                        <div className="w-10 h-10 bg-[#395185] rounded-full flex items-center">
                          <FaFacebookF className="text-2xl text-white mx-auto" />
                        </div>
                        <div className="w-10 h-10 bg-[#55ACEE] rounded-full flex items-center">
                          <BsTwitter className="text-2xl text-white mx-auto" />
                        </div>
                        <div className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center">
                          <FaLinkedinIn className="text-2xl text-white mx-auto" />
                        </div>
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                          }}
                        >
                          <FaInstagram className="text-2xl text-white" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative mx-12 items-center bottom-60">
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
    image: "/assets/images/Testimonials/1.png",
    title: "Car Engine Plug",
    description: "Engine Expert",
  },
  {
    image: "/assets/images/Testimonials/2.png",
    title: "Car Engine Plug",
    description: "Engine Expert",
  },
  {
    image: "/assets/images/Testimonials/3.png",
    title: "Car Engine Plug",
    description: "Engine Expert",
  },
  {
    image: "/assets/images/Testimonials/1.png",
    title: "Car Engine Plug",
    description: "Engine Expert",
  },
  {
    image: "/assets/images/Testimonials/2.png",
    title: "Car Engine Plug",
    description: "Engine Expert",
  },
  {
    image: "/assets/images/Testimonials/3.png",
    title: "Car Engine Plug",
    description: "Engine Expert",
  },
];
