import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "../../../public/assets/images/products/1.png";
import img2 from "../../../public/assets/images/products/2.png";
import img3 from "../../../public/assets/images/products/3.png";
import img4 from "../../../public/assets/images/products/4.png";
import img5 from "../../../public/assets/images/products/5.png";
import img6 from "../../../public/assets/images/products/6.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

type CardProps = React.ComponentProps<typeof Card>;

const Product = ({ className, ...props }: CardProps) => {
  return (
    <div className="mx-auto max-w-7xl mt-24">
      <div>
        <h1 className="text-center text-xl text-[#FF3811] font-bold">
          Product
        </h1>
        <h2 className="text-center text-5xl text-slate-950 font-bold leading-tight tracking-wide mt-5">
          Our Product Area
        </h2>
        <p className="text-center text-base leading-7 text-gray-500 tracking-wide pt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 my-10">
        <Card className={cn("w-[364px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="w-80 h-52 bg-[#F3F3F3] rounded-lg flex items-center">
              <Image
                src={img1}
                alt="img1"
                className=" rounded-lg mx-auto"
                width={156}
                height={153}
              />
            </div>
            <div className="mt-4 space-y-4 ">
              <div className="flex gap-1 justify-center">
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-2xl text-slate-800 font-bold text-center">
                Car Engine Plug
              </h3>
              <h5 className="text-xl text-[#FF3811] font-semibold text-center">
                $20.00
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="w-80 h-52 bg-[#F3F3F3] rounded-lg flex items-center">
              <Image
                src={img2}
                alt="img2"
                className=" rounded-lg mx-auto"
                width={156}
                height={153}
              />
            </div>
            <div className="mt-4 space-y-4 ">
              <div className="flex gap-1 justify-center">
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-2xl text-slate-800 font-bold text-center">
                Car Engine Plug
              </h3>
              <h5 className="text-xl text-[#FF3811] font-semibold text-center">
                $20.00
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="w-80 h-52 bg-[#F3F3F3] rounded-lg flex items-center">
              <Image
                src={img3}
                alt="img3"
                className=" rounded-lg mx-auto"
                width={156}
                height={153}
              />
            </div>
            <div className="mt-4 space-y-4 ">
              <div className="flex gap-1 justify-center">
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-2xl text-slate-800 font-bold text-center">
                Car Engine Plug
              </h3>
              <h5 className="text-xl text-[#FF3811] font-semibold text-center">
                $20.00
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="w-80 h-52 bg-[#F3F3F3] rounded-lg flex items-center">
              <Image
                src={img4}
                alt="img4"
                className=" rounded-lg mx-auto"
                width={156}
                height={153}
              />
            </div>
            <div className="mt-4 space-y-4 ">
              <div className="flex gap-1 justify-center">
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-2xl text-slate-800 font-bold text-center">
                Car Engine Plug
              </h3>
              <h5 className="text-xl text-[#FF3811] font-semibold text-center">
                $20.00
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px] ", className)} {...props}>
          <CardContent className="py-4">
            <div className="w-80 h-52 bg-[#F3F3F3] rounded-lg flex items-center">
              <Image
                src={img5}
                alt="img5"
                className=" rounded-lg mx-auto"
                width={156}
                height={153}
              />
            </div>
            <div className="mt-4 space-y-4 ">
              <div className="flex gap-1 justify-center">
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-2xl text-slate-800 font-bold text-center">
                Car Engine Plug
              </h3>
              <h5 className="text-xl text-[#FF3811] font-semibold text-center">
                $20.00
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="w-80 h-52 bg-[#F3F3F3] rounded-lg flex items-center">
              <Image
                src={img6}
                alt="img6"
                className=" rounded-lg mx-auto"
                width={156}
                height={153}
              />
            </div>
            <div className="mt-4 space-y-4 ">
              <div className="flex gap-1 justify-center">
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
                <FaStar className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-2xl text-slate-800 font-bold text-center">
                Car Engine Plug
              </h3>
              <h5 className="text-xl text-[#FF3811] font-semibold text-center">
                $20.00
              </h5>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-center mb-16">
        <Button
          variant="outline"
          className="
              py-6
              border-[#FF3811] 
              text-[#FF3811] 
                font-semibold
                tracking-wider
                text-lg
              hover:text-white 
                hover:bg-gradient-to-r 
              hover:from-[#FF3811] 
              hover:to-[#FF8611] 
                transition 
                duration-300 
                ease-in-out"
        >
          More Products
        </Button>
      </div>
    </div>
  );
};

export default Product;
