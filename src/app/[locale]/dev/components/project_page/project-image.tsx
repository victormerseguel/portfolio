import Image from "next/image";
import React from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
};

const ProjectImage = ({ src, alt }: ProjectImageProps) => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full z-50">
      <div className="absolute w-full h-full bg-foreground opacity-85 cursor-zoom-out"></div>
      <div className="relative w-[80vw] pt-[45%] placeholder-opacity-100 ">
        <Image src={src} alt={alt} fill className="contain rounded-3xl" />
      </div>
    </div>
  );
};

export default ProjectImage;
