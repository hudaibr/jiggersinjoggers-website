import React from "react";
import Link from "next/link";

import bg_img from '@/assets/img/bg/service_bg3.png';

const service_items = [
  {
    id: 1,
    icon: "flaticon-add-user",
    title: "Character Design",
    desc: "Custom character art tailored to your Discord community with unique styles and personalities.",
    link: "/service-details",
  },
  {
    id: 2,
    icon: "flaticon-play",
    title: "Emote & Sticker Animation",
    desc: "Animated emotes, stickers, and GIFs that bring your server conversations to life.",
    link: "/service-details",
  },
  {
    id: 3,
    icon: "flaticon-invoice",
    title: "Banner Art",
    desc: "Stunning Discord server banners, channel headers, and promotional graphics.",
    link: "/service-details",
  },
  {
    id: 4,
    icon: "flaticon-repeat",
    title: "Animation Loops",
    desc: "Looping character animations for intros, transitions, and profile displays.",
    link: "/service-details",
  },
  {
    id: 5,
    icon: "flaticon-user-profile",
    title: "Avatar Design",
    desc: "Unique profile pictures and avatar sets for your server members and brand.",
    link: "/service-details",
  },
  {
    id: 6,
    icon: "flaticon-guru",
    title: "Bot Visuals",
    desc: "Custom bot avatars, banners, and UI elements to match your server's identity.",
    link: "/service-details",
  },
];

const ServicesAreaThree = () => {
  return (
    <section
      className="video__area section-pb-120 section-pt-120 bg-img-cover"
      style={{ backgroundImage: `url(${bg_img.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section__title text-center mb-65 title-shape-none">
              <span className="sub-title2">what we create</span>
              <h3 className="title2">
                Services for Your
                <span className="text-theme"> Discord Community</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {service_items.map((item) => (
            <div key={item.id} className="col-xl-4 col-md-6">
              <div className="services__item text-center">
                <div className="services__icon">
                  <i className={item.icon}></i>
                </div>
                <div className="services__content">
                  <h4 className="title">
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaThree;
