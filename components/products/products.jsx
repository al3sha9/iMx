"use client";
import React, { useEffect, useState } from "react";
import TitleSection from "../heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { productsData } from "./slider/prod";
import ProductSlide from "./slider/prodslide";

export const Products = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className=" bg-[#e6e6e6] ">
        <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
          <div>
            <TitleSection firstTitle="OUR" secondTitle="PRODUCTS" />
          </div>
          <div className="w-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={slidesPerView}
              modules={[Autoplay]}
              loop={true}
              autoplay={true}
            >
              {productsData.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductSlide data={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
