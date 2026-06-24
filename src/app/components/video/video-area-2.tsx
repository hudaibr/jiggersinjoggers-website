'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

// images
import card_shape_1 from '@/assets/img/gallery/video3-card-shape1.png';
import card_shape_2 from '@/assets/img/gallery/video3-card-shape2.png';
import card_shape_3 from '@/assets/img/gallery/video3-card-shape3.png';
import card_shape_4 from '@/assets/img/gallery/video3-card-shape4.png';
import card_title_shape_1 from '@/assets/img/gallery/video3-card-title-shape1.png';
import card_title_shape_2 from '@/assets/img/gallery/video3-card-title-shape2.png';
import bg_img from '@/assets/img/bg/video_bg3.png';

import video_1 from '@/assets/img/gallery/video3-1.jpg';
import video_2 from '@/assets/img/gallery/video3-2.png';
import video_3 from '@/assets/img/gallery/video3-3.png';
import video_4 from '@/assets/img/gallery/video3-4.jpg';
import video_5 from '@/assets/img/gallery/video3-5.jpg';

import char_1 from '@/assets/img/gallery/character-slide-1.webp';
import char_2 from '@/assets/img/gallery/character-slide-2.webp';
import char_3 from '@/assets/img/gallery/character-slide-3.webp';
import char_4 from '@/assets/img/gallery/character-slide-4.webp';
import char_5 from '@/assets/img/gallery/character-slide-5.webp';
import char_6 from '@/assets/img/gallery/character-slide-6.webp';

const char_images = [char_1, char_2, char_3, char_4, char_5, char_6];

// nav data
const navData = [
  { id: "about01", title: "CHARACTERS" },
  { id: "about02", title: "EMOTES" },
  { id: "about03", title: "ANIMATIONS" },
  { id: "about04", title: "AVATAR" },
  { id: "about05", title: "BOT VISUALS" },
];
// tab content data
const tabContentData = [
  {
    id: "about01",
    images: char_images,
    title: "CHARACTERS",
  },
  {
    id: "about02",
    images: [video_2],
    title: "Daniel Barna Klark",
  },
  {
    id: "about03",
    images: [video_3],
    title: "Daniel Barna Klark",
  },
  {
    id: "about04",
    images: [video_4],
    title: "Daniel Barna Klark",
  },
  {
    id: "about05",
    images: [video_5],
    title: "Daniel Barna Klark",
  },
];

const slider_setting = {
  slidesPerView: 3,
  spaceBetween: 15,
  navigation: {
    nextEl: ".char-button-next",
    prevEl: ".char-button-prev",
  },
  scrollbar: {
    el: ".char-scrollbar",
    draggable: true,
    dragSize: 24,
  },
};

export default function VideoAreaTwo() {
  const [activeTab, setActiveTab] = useState(navData[0].id);

  return (
    <section
      className="video__area section-pb-120 section-pt-120 bg-img-cover"
      style={{ backgroundImage: `url(${bg_img.src})` }}
    >
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-lg-auto">
            <div className="section__title mb-50 title-shape-none text-xl-start text-center">
              <h6 className="sub-title2">Our Services</h6>
              <h3 className="title2">DISCORD ART</h3>
            </div>
          </div>
          <div className="col-lg-auto text-xl-end align-self-end text-center">
            <ul className="nav nav-tabs video-tab-wrap mb-60" id="myTab" role="tablist">
              {navData.map((nav) => (
                <li className="nav-item" key={nav.id} role="presentation">
                  <button
                    className={`nav-link ${activeTab === nav.id ? "active" : ""}`}
                    onClick={() => setActiveTab(nav.id)}
                    type="button"
                    role="tab"
                    aria-controls={nav.id}
                    aria-selected={activeTab === nav.id}
                  >
                    {nav.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          {tabContentData.map((content) => (
            <div
              key={content.id}
              className={`tab-pane ${activeTab === content.id ? "show active" : ""}`}
              id={content.id}
              role="tabpanel"
              aria-labelledby={`${content.id}-tab`}
            >
              {content.id === "about01" ? (
                <>
                  <Swiper
                    {...slider_setting}
                    modules={[Navigation, Scrollbar]}
                    className="swiper-container"
                  >
                    {content.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="video__card">
                          <div className="video-card-shape video-card-shape1">
                            <Image src={card_shape_1} alt="shape1" />
                          </div>
                          <div className="video-card-shape video-card-shape2">
                            <Image src={card_shape_2} alt="shape2" />
                          </div>
                          <div className="video-card-shape video-card-shape3">
                            <Image src={card_shape_3} alt="shape3" />
                          </div>
                          <div className="video-card-shape video-card-shape4">
                            <Image src={card_shape_4} alt="shape4" />
                          </div>
                          <div className="video-card-img">
                            <Image src={img} alt={`Character ${i + 1}`} width={331} height={436} style={{ width: 'auto', height: '436px', objectFit: 'contain' }} />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="char-button-prev">
                    <i className="flaticon-right-arrow"></i>
                    <i className="flaticon-right-arrow"></i>
                  </div>
                  <div className="char-scrollbar"></div>
                </>
              ) : (
                <div className="video__card">
                  <div className="video-card-shape video-card-shape1">
                    <Image src={card_shape_1} alt="shape1" />
                  </div>
                  <div className="video-card-shape video-card-shape2">
                    <Image src={card_shape_2} alt="shape2" />
                  </div>
                  <div className="video-card-shape video-card-shape3">
                    <Image src={card_shape_3} alt="shape3" />
                  </div>
                  <div className="video-card-shape video-card-shape4">
                    <Image src={card_shape_4} alt="shape4" />
                  </div>
                  <div className="video-card-img">
                    <Image src={content.images[0]} alt={content.title} width={1246} height={586} style={{ height: 'auto' }} />
                  </div>
                  <Link href="/service-details" className="video-card-title">
                    <span className="icon">
                      <i className="fas fa-link"></i>
                    </span>
                    <span className="video-card-title-shape video-card-title-shape2">
                      <Image src={card_title_shape_2} alt="title-shape2" />
                    </span>
                    <span className="title">
                      <span className="video-card-title-shape video-card-title-shape1">
                        <Image src={card_title_shape_1} alt="title-shape1" />
                      </span>
                      {content.title}
                    </span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
