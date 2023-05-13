import React from "react";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";

function Hero() {
  return (
    <div className="bg-main h-[24rem] p-7 flex overflow-hidden rounded-lg">
      <div className="flex-1 text-text flex flex-col justify-center gap-6">
        <h1 className=" text-5xl font-bold tracking-wide">
          Feel better about
          <br /> finding healthcare
        </h1>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className=" flex gap-2 items-center">
          <Button className="bg-primaryColor">Join us</Button>
          <span>learn more...</span>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={"/assets/doctor1.png"}
          width={600}
          height={100}
          alt="doctor"
        />
      </div>
    </div>
  );
}

export default Hero;
