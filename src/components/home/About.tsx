import React from "react";
import img1 from "../../../public/assets/images/about_us/person.png";
import img2 from "../../../public/assets/images/about_us/parts.png";
import Image from "next/image";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl mb-48 mt-16">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="relative">
          <div className="w-full">
            <Image
              src={img1}
              alt="person"
              width={460}
              height={473}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute top-60 left-60 opacity-100">
            <Image
              src={img2}
              alt="parts"
              width={327}
              height={332}
              className="rounded-tl-lg border-t-8 border-l-8 border-slate-100"
            />
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-xl text-[#FF3811] font-bold">About us</h1>
          <h2 className="text-5xl text-slate-950 font-bold leading-tight tracking-wide pt-3">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <p className="text-base leading-7 text-gray-500 tracking-wide pt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-base leading-7 text-gray-500 tracking-wide pt-3">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{" "}
          </p>
       
         <Button
            className="
            bg-[#FF3811] text-white py-6 text-lg border font-normal tracking-wider  hover:text-white 
              hover:bg-gradient-to-r 
              hover:from-[#FF3811] 
              hover:to-[#FF8611] 
                transition 
                duration-300 
                ease-in-out"
          >
            Get More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
