import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "../../../public/assets/icons/group.svg";
import img2 from "../../../public/assets/icons/clock (1).png";
import img3 from "../../../public/assets/icons/person.svg";
import img4 from "../../../public/assets/icons/Wrench.svg";
import img5 from "../../../public/assets/icons/check.svg";
import img6 from "../../../public/assets/icons/deliveryt.svg";

import Image from "next/image";

type CardProps = React.ComponentProps<typeof Card>;

const Features = ({ className, ...props }: CardProps) => {
  return (
    <div className="mx-auto max-w-7xl my-16">
      <div>
        <h1 className="text-center text-xl text-[#FF3811] font-bold">
          Features
        </h1>
        <h2 className="text-center text-5xl text-slate-950 font-bold leading-tight tracking-wide mt-5">
          Our Features Area
        </h2>
        <p className="text-center text-base leading-7 text-gray-500 tracking-wide pt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4 my-10">
        <Card className="group rounded-md hover:bg-[#FF3811] text-[#FF3811] hover:text-white transition duration-300">
          <CardContent className="py-4">
            <div className="flex items-center">
              <Image
                src={img1}
                alt="img1"
                className="mx-auto transition duration-300 group-hover:brightness-0 group-hover:invert"
                width={75}
                height={53}
              />
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-bold text-center">Expert Team</h4>
            </div>
          </CardContent>
        </Card>
        <Card className="group rounded-md hover:bg-[#FF3811] text-[#FF3811] hover:text-white transition duration-300">
          <CardContent className="py-4">
            <div className="flex items-center">
              <Image
                src={img2}
                alt="img2"
                className="mx-auto transition duration-300 group-hover:brightness-0 group-hover:invert"
                width={53}
                height={53}
              />
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-bold text-center">Timely Delivery</h4>
            </div>
          </CardContent>
        </Card>
        <Card className="group rounded-md hover:bg-[#FF3811] text-[#FF3811] hover:text-white transition duration-300">
          <CardContent className="py-4">
            <div className="flex items-center">
              <Image
                src={img3}
                alt="img3"
                className="mx-auto transition duration-300 group-hover:brightness-0 group-hover:invert"
                width={42}
                height={53}
              />
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-bold text-center">24/7 Support</h4>
            </div>
          </CardContent>
        </Card>
        <Card className="group rounded-md hover:bg-[#FF3811] text-[#FF3811] hover:text-white transition duration-300">
          <CardContent className="py-4">
            <div className="flex items-center">
              <Image
                src={img4}
                alt="img4"
                className="mx-auto transition duration-300 group-hover:brightness-0 group-hover:invert"
                width={54}
                height={53}
              />
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-bold text-center">Best Equipment</h4>
            </div>
          </CardContent>
        </Card>
        <Card className="group rounded-md hover:bg-[#FF3811] text-[#FF3811] hover:text-white transition duration-300">
          <CardContent className="py-4">
            <div className="flex items-center">
              <Image
                src={img5}
                alt="img5"
                className="mx-auto transition duration-300 group-hover:brightness-0 group-hover:invert"
                width={46}
                height={53}
              />
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-bold text-center">100% Guaranty</h4>
            </div>
          </CardContent>
        </Card>
        <Card className="group rounded-md hover:bg-[#FF3811] text-[#FF3811] hover:text-white transition duration-300">
          <CardContent className="py-4">
            <div className="flex items-center">
              <Image
                src={img6}
                alt="img6"
                className="mx-auto transition duration-300 group-hover:brightness-0 group-hover:invert"
                width={67}
                height={53}
              />
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-bold text-center">Timely Delivery</h4>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Features;
