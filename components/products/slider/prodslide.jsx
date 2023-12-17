"use client";
import React from "react";
import Image from "next/image";

const ProductSlide = ({ data }) => {
  const { imageSrc, altText, description, link } = data;

  return (
    <div className="text-center  space-y-4 flex flex-col justify-center">
      <Image src={imageSrc} alt={altText} className="mx-auto " />
      <p className="font-light text-lg min-h-[200px]">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#132849] hover:bg-transparent hover:text-[#132849] hover:border-[#132849] shadow-md border w-[50%] mx-auto py-2 rounded text-center text-white font-light"
      >
        LEARN MORE
      </a>
    </div>
  );
};

export default ProductSlide;
