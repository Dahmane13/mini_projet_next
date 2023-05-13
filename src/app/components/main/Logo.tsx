import Image from "next/image";
import React from "react";

function Logo({ width, height }: { width?: number; height?: number }) {
  return (
    <Image
      src={"/assets/logo.svg"}
      alt="Logo"
      width={width || 150}
      height={height || 150}
      className=" cursor-pointer"
    />
  );
}

export default Logo;
