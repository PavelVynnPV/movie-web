import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

export default function Slider({ films }) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {films.map((film_item) => (
          <>
            <SwiperSlide><img src={film_item.image} alt="" /></SwiperSlide>
         
          </>
        ))}
      </Swiper>
    </>
  );
}
