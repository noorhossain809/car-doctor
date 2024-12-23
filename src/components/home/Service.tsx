import React from "react";
import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import img1 from "../../../public/assets/images/services/1.jpg";
import img2 from "../../../public/assets/images/services/2.jpg";
import img3 from "../../../public/assets/images/services/3.jpg";
import img4 from "../../../public/assets/images/services/4.jpg";
import img5 from "../../../public/assets/images/services/5.png";
import img6 from "../../../public/assets/images/services/6.jpg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

type CardProps = React.ComponentProps<typeof Card>;

const Service = ({ className, ...props }: CardProps) => {
  return (
    <div className="mx-auto max-w-7xl mt-16">
      <div>
        <h1 className="text-center text-xl text-[#FF3811] font-bold">
          Service
        </h1>
        <h2 className="text-center text-5xl text-slate-950 font-bold leading-tight tracking-wide mt-5">
          Our Service Area
        </h2>
        <p className="text-center text-base leading-7 text-gray-500 tracking-wide pt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 my-10">
        <Card className={cn("w-[364px] h-[348px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="">
              <Image src={img1} alt="img1" className=" rounded-lg" />
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-2xl text-slate-800 font-bold">
                Electrical System
              </h3>
              <div className="flex justify-between">
                <h5 className="text-xl text-[#FF3811] font-semibold">
                  Price : $20.00
                </h5>
                <FaArrowRight className="text-xl text-[#FF3811]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px] h-[348px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="">
              <Image src={img2} alt="img2" className=" rounded-lg" />
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-2xl text-slate-800 font-bold">
                Electrical System
              </h3>
              <div className="flex justify-between">
                <h5 className="text-xl text-[#FF3811] font-semibold">
                  Price : $20.00
                </h5>
                <FaArrowRight className="text-xl text-[#FF3811]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px] h-[348px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="">
              <Image src={img3} alt="img3" className=" rounded-lg" />
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-2xl text-slate-800 font-bold">
                Electrical System
              </h3>
              <div className="flex justify-between">
                <h5 className="text-xl text-[#FF3811] font-semibold">
                  Price : $20.00
                </h5>
                <FaArrowRight className="text-xl text-[#FF3811]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px] h-[348px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="">
              <Image src={img4} alt="img4" className=" rounded-lg" />
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-2xl text-slate-800 font-bold">
                Electrical System
              </h3>
              <div className="flex justify-between">
                <h5 className="text-xl text-[#FF3811] font-semibold">
                  Price : $20.00
                </h5>
                <FaArrowRight className="text-xl text-[#FF3811]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px] h-[348px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="">
              <Image
                src={img5}
                alt="img5"
                className=" rounded-lg"
                width={314}
                height={208}
              />
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-2xl text-slate-800 font-bold">
                Electrical System
              </h3>
              <div className="flex justify-between">
                <h5 className="text-xl text-[#FF3811] font-semibold">
                  Price : $20.00
                </h5>
                <FaArrowRight className="text-xl text-[#FF3811]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-[364px] h-[348px]", className)} {...props}>
          <CardContent className="py-4">
            <div className="">
              <Image src={img6} alt="img6" className=" rounded-lg" />
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-2xl text-slate-800 font-bold">
                Electrical System
              </h3>
              <div className="flex justify-between">
                <h5 className="text-xl text-[#FF3811] font-semibold">
                  Price : $20.00
                </h5>
                <FaArrowRight className="text-xl text-[#FF3811]" />
              </div>
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
          More Services
        </Button>
      </div>
    </div>
  );
};

export default Service;
