"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import TextAnimation from "../common/text-animation";

import chibi_1 from "@/assets/img/chibi/img (1).jpeg";
import chibi_2 from "@/assets/img/chibi/img (2).jpeg";
import chibi_3 from "@/assets/img/chibi/img (3).jpeg";
import chibi_4 from "@/assets/img/chibi/img (4).jpeg";
import chibi_5 from "@/assets/img/chibi/img (5).jpeg";
import chibi_6 from "@/assets/img/chibi/img (6).jpeg";
import chibi_7 from "@/assets/img/chibi/img (7).jpeg";

const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 15,
  breakpoints: {
    "1500": { slidesPerView: 4 },
    "1200": { slidesPerView: 4 },
    "992": { slidesPerView: 3 },
    "768": { slidesPerView: 3 },
    "576": { slidesPerView: 2 },
    "0": { slidesPerView: 1.5, centeredSlides: true, centeredSlidesBounds: true },
  },
  navigation: {
    nextEl: ".chibi-button-next",
    prevEl: ".chibi-button-prev",
  },
  scrollbar: {
    el: ".chibi-scrollbar",
    draggable: true,
    dragSize: 24,
  },
};

const chibi_data = [chibi_1, chibi_2, chibi_3, chibi_4, chibi_5, chibi_6, chibi_7];

export default function ChibiProjectArea() {
  return (
    <section className="project-area project-bg section-pt-120 section-pb-140">
      <div className="container custom-container">
        <div className="project__wrapper">
          <div className="section__title text-start">
            <h3 className="title">CHIBI ART</h3>
            <TextAnimation title="cute & expressive" />
          </div>
          <PhotoProvider>
            <Swiper
              {...slider_setting}
              modules={[Navigation, Scrollbar]}
              className="swiper-container project-active"
            >
              {chibi_data.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="project__item">
                    <PhotoView src={img.src}>
                      <a className="popup-image pointer">
                        <Image src={img} alt={`Chibi ${i + 1}`} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                      </a>
                    </PhotoView>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </PhotoProvider>
          <div className="chibi-button-prev" style={{ display: 'flex', gap: '5px', cursor: 'pointer' }}>
            <i className="flaticon-right-arrow"></i>
            <i className="flaticon-right-arrow"></i>
          </div>
        </div>
      </div>
      <div className="chibi-scrollbar swiper-scrollbar"></div>
    </section>
  );
}
