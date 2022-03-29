// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/Carrousel.css";
import City from './json'

// import required modules
import { Grid, Autoplay, Pagination, Navigation } from "swiper";

// import required modules

export default function Carrousel() {
  return (
    <div className="swip" >
      <>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              grid: {
                rows: 2,
              },
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              grid: {
                rows: 2,
              },
              spaceBetween: 15,
            }
          }}
          slidesPerView={2}
          slidesPerGroup={2}
          grid={{
            rows: 2
          }}
          spaceBetween={15}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Grid, Pagination, Autoplay, Pagination, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          className="mySwiper"
        >
          {City.map(evento =>
            <SwiperSlide>
              <img className="image" src={evento.image} />
              <span className="imageText" >{evento.name}</span>
            </SwiperSlide>

          )}
        </Swiper>
      </>
    </div>
  );
}
