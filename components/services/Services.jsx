import React from "react";
import { servicesData } from "./servdata";
import TitleSection from "../heading";
import Image from "next/image";

export const Services = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
      <TitleSection firstTitle="OUR" secondTitle="Services" />
      <div className="md:grid grid-cols-1  md:grid-cols-4 md:grid-rows-2 md:gap-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={
              index >= 4
                ? "row-start-2 bg-[#e6e6e6] py-6 px-4 my-2 md:my-0"
                : "bg-[#e6e6e6] my-2 md:my-0 py-6 px-4"
            }
          >
            <Image width={150} src={service.image} alt={service.title} />
            <h3 className="font-bold text-3xl">{service.title}</h3>
            <p className="text-light font-extralight">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
