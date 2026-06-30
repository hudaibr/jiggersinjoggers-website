'use client';
import Link from "next/link";
import Image from "next/image";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import ab_img from '@/assets/img/others/about_img4-1.jpg';

export default function AboutAreaFive() {
    return (
        <MouseParallaxContainer>
            <section className="about__area4 section-pt-120 section-pb-100">
                <div className="container">
                    <div className="row gy-5 flex-row-reverse justify-content-center align-items-center">
                        <div className="col-xl-6">
                            <MouseParallaxChild factorX={0.03} factorY={0.03} className="about__funFact-images4">
                                <Image className="main-img1" data-magnetic src={ab_img} alt="img" />
                            </MouseParallaxChild>
                        </div>
                        <div className="col-xl-6">
                            <div className="text-xl-start text-center">
                                <div className="section__title mb-30 title-shape-none">
                                    <h6 className="sub-title2">About Our Agency</h6>
                                    <h3 className="title2">From Concept to Character — <br/> Art That Levels Up Your Community</h3>
                                </div>
                                <div className="about__content-three">
                                    <p>We're a team of character artists and animators who partner with gaming communities to bring their Discord servers to life. From custom emotes that spark conversation to animated banners that set the vibe, every asset is crafted to reflect your community's personality. Whether you're launching a new server or rebranding an established one, we deliver art that hits different.</p>
                                </div>
                                <div className="btn-group mt-4">
                                    <Link href="/contact" className="tg-btn-5">
                                        <span>View Our Work</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MouseParallaxContainer>
    )
}
