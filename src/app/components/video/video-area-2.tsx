'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

// images
import card_shape_1 from '@/assets/img/gallery/video3-card-shape1.png';
import card_shape_2 from '@/assets/img/gallery/video3-card-shape2.png';
import card_shape_3 from '@/assets/img/gallery/video3-card-shape3.png';
import card_shape_4 from '@/assets/img/gallery/video3-card-shape4.png';
import card_title_shape_1 from '@/assets/img/gallery/video3-card-title-shape1.png';
import card_title_shape_2 from '@/assets/img/gallery/video3-card-title-shape2.png';
import bg_img from '@/assets/img/bg/video_bg3.png';

import video_1 from '@/assets/img/gallery/video3-1.jpg';
import emote_img from '@/assets/img/gallery/emote-tab.png';
import video_3 from '@/assets/img/gallery/video3-3.png';
import video_4 from '@/assets/img/gallery/video3-4.jpg';
import video_5 from '@/assets/img/gallery/video3-5.jpg';
import overlay_img from '@/assets/img/gallery/overlay-tab.jpg';
import illustration_img from '@/assets/img/gallery/illustration-tab.jpg';
import logo_img from '@/assets/img/gallery/logo-tab.jpg';

import char_1 from '@/assets/img/gallery/character-slide-1.webp';

// nav data
const navData = [
  { id: "about01", title: "CHARACTERS" },
  { id: "about02", title: "EMOTES" },
  { id: "about03", title: "LOGO" },
  { id: "about04", title: "ILLUSTRATION" },
  { id: "about05", title: "OVERLAY" },
];
// tab content data
const tabContentData = [
  {
    id: "about01",
    images: [char_1],
    title: "CHARACTERS",
  },
  {
    id: "about02",
    images: [emote_img],
    title: "Daniel Barna Klark",
  },
  {
    id: "about03",
    images: [logo_img],
    title: "LOGO",
  },
  {
    id: "about04",
    images: [illustration_img],
    title: "ILLUSTRATION",
  },
  {
    id: "about05",
    images: [overlay_img],
    title: "OVERLAY",
  },
];

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
                  <div className="video-card-img" style={{ backgroundColor: '#000' }}>
                    <Image src={content.images[0]} alt="Character" width={331} height={436} style={{ width: 'auto', height: '436px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                  </div>
                </div>
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
