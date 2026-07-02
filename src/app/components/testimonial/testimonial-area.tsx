'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import bg_img from '@/assets/img/bg/team_bg4.png';
import testi_thumb from '@/assets/img/others/testimonial-thumb.png';
import samantha_thumb from '@/assets/img/others/testimonial-samantha.jpg';
import ryan_thumb from '@/assets/img/others/testimonial-ryan.webp';
import jordan_thumb from '@/assets/img/others/testimonial-jordan.png';

const slider_setting = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
    },
}


const testimonialData = [
    {
        id: 1,
        thumb: ryan_thumb,
        content: `“Jiggers in Joggers created an amazing mascot for our gaming community. Communication was smooth, revisions were fast, and the final artwork looked premium.”`,
        name: "Ryan T.",
        designation: "DISCORD COMMUNITY MANAGER",
    },
    {
        id: 2,
        thumb: samantha_thumb,
        content: `“Our stream branding finally feels unique. The overlays, alerts, and illustrations all have a consistent style that our viewers instantly recognized.”`,
        name: "Samantha K.",
        designation: "STREAMER",
    },
    {
        id: 3,
        thumb: jordan_thumb,
        content: `“The fan art was vibrant, detailed, and exactly what we wanted. The team understood the concept immediately and delivered ahead of schedule.”`,
        name: "Jordan P.",
        designation: "CONTENT CREATOR",
    },
];

export default function TestimonialArea() {
    return (
        <section
            className="testimonial__area section-pb-120"
            style={{ backgroundImage: `url(${bg_img.src})` }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section__title mb-60 title-shape-none">
                            <h3 className="testimonial-title">
                                <span>15k+ Active Customer Review</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <Swiper {...slider_setting} className="swiper-container testimonial-active">
                    {testimonialData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="testimonial__item">
                                <div className="testimonial__thumb">
                                    <Image src={testimonial.thumb} alt={testimonial.name} width={350} height={352} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div className="testimonial__content">
                                    <p className="content">{testimonial.content}</p>
                                    <h4 className="name">{testimonial.name}</h4>
                                    <span className="desig">{testimonial.designation}</span>
                                </div>
                                <div className="quote-shape"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
