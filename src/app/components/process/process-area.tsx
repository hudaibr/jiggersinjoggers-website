'use client';
import { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { AppContext } from "@/context/app-context";
import sketch_img from '@/assets/img/process/img-01.webp';
import final_img from '@/assets/img/process/img-2.webp';
import sketch_img_2 from '@/assets/img/process/img-4.png';
import final_img_2 from '@/assets/img/process/img-3.png';
import sketch_img_3 from '@/assets/img/process/img-5.png';
import final_img_3 from '@/assets/img/process/img-6.png';
import sketch_img_4 from '@/assets/img/process/img-7.jpeg';
import final_img_4 from '@/assets/img/process/img-8.jpeg';
import sketch_img_5 from '@/assets/img/process/img-9.jpeg';
import final_img_5 from '@/assets/img/process/img-10.jpeg';

const processSlides = [
    {
        id: 1,
        sketch: sketch_img,
        final: final_img,
    },
    {
        id: 2,
        sketch: sketch_img_2,
        final: final_img_2,
    },
    {
        id: 3,
        sketch: sketch_img_3,
        final: final_img_3,
    },
    {
        id: 4,
        sketch: sketch_img_4,
        final: final_img_4,
    },
    {
        id: 5,
        sketch: sketch_img_5,
        final: final_img_5,
    },
];

const sliderSettings = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
};

export default function ProcessArea() {
    const [showVideo, setShowVideo] = useState(false);
    const { handleMouseEnter, handleMouseLeave } = useContext(AppContext);

    return (
        <section className="section-pt-120 section-pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section__title text-center mb-60 title-shape-none">
                            <h6 className="sub-title2">OUR PROCESS</h6>
                            <h3 className="title2">From Sketch to Final Design</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-60">
                    <div className="col-lg-8">
                        <div className="text-center">
                            <h5 className="mb-4" style={{ color: '#fff', fontSize: '20px', fontWeight: 600 }}>Watch Our Process</h5>
                                <div onClick={() => setShowVideo(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#45f882', fontSize: '18px', fontWeight: 600 }}>
                                <span style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#45f882', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#11131c', flexShrink: 0 }}>&#9654;</span>
                                Click Here To Play
                            </div>
                        </div>
                    </div>
                </div>

                {showVideo && (
                    <div onClick={() => setShowVideo(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.9)', padding: '20px' }}>
                        <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
                            <button onClick={() => setShowVideo(false)} style={{ position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', color: '#fff', fontSize: '30px', cursor: 'pointer' }}>&times;</button>
                            <video controls autoPlay style={{ width: '100%', borderRadius: '8px' }}>
                                <source src="/process/speedpaint-1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                )}

                <PhotoProvider>
                <Swiper {...sliderSettings} modules={[Autoplay]} className="swiper-container">
                    {processSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="row gy-4 justify-content-center align-items-center">
                                <div className="col-lg-6">
                                    <div className="text-center">
                                        <h5 className="mb-3" style={{ color: '#fff', fontSize: '20px', fontWeight: 600 }}>Sketch</h5>
                                        <div style={{ maxHeight: '500px', overflow: 'hidden', borderRadius: '12px' }}>
                                            <PhotoView src={slide.sketch.src}>
                                                <a data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                                    <Image src={slide.sketch} alt="Sketch" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} />
                                                </a>
                                            </PhotoView>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-center">
                                        <h5 className="mb-3" style={{ color: '#fff', fontSize: '20px', fontWeight: 600 }}>Final Design</h5>
                                        <div style={{ maxHeight: '500px', overflow: 'hidden', borderRadius: '12px' }}>
                                            <PhotoView src={slide.final.src}>
                                                <a data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                                    <Image src={slide.final} alt="Final Design" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} />
                                                </a>
                                            </PhotoView>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </PhotoProvider>
            </div>
        </section>
    )
}
