"use client";

import React, { useEffect, useState } from "react";

import Card from "@/components/Card";
import { CardData } from "@/utils/data";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());

  useEffect(() => {
    function handleResize() {
      setSlidesPerView(calculateSlidesPerView());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateSlidesPerView() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 5;
    } else if (screenWidth >= 992) {
      return 5;
    } else if (screenWidth >= 768) {
      return 5;
    } else if (screenWidth >= 576) {
      return 3;
    } else {
      return 1;
    }
  }

  return (
    <div className="container w-[64rem] pt-28 2xl:pt-60 flex justify-center items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {CardData.map((items) => (
          <div key={items.id} className="h-[48rem]">
            <SwiperSlide className="">
              <Card {...items} />
            </SwiperSlide>
          </div>
        ))}

        <div className="slider-controler text-white mt-24">
          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft className="text-white bg-[#111111] p-3 rounded-[50%]" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight className="text-white bg-[#111111] p-3 rounded-[50%]" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
