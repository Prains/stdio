"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CasesSlide from "./CasesSlide/CasesSlide";
import { useState } from "react";
import { text } from "node:stream/consumers";

const CasesBlock = () => {
  const casesTypes = [
    {
      name: "Корпоративные сайты",
      value: "corp",
    },
    {
      name: "Лендинги",
      value: "land",
    },
    {
      name: "Интернет-магазины",
      value: "ig",
    },
    {
      name: "Веб-приложения",
      value: "ip",
    },
  ];

  /*   const cases = [[{ image, text, link }], [{ image, text, link }]]; */

  const [currentSlide, setCurrentSlide] = useState(casesTypes[0].value);

  return (
    <section className="mb-10 mt-5">
      <p className="text-bold mb-7">свежие проекты студии</p>
      <Swiper
        slidesPerView={1.2}
        onSlideChange={(swiper) => {
          setCurrentSlide(casesTypes[swiper.activeIndex].value);
        }}
      >
        {casesTypes.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CasesSlide {...item} currentSlide={currentSlide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <article></article>
    </section>
  );
};

export default CasesBlock;
