import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/header/header-three";
import HeroBannerFour from "@/app/components/hero-banner/hero-banner-4";
import VideoAreaTwo from "@/app/components/video/video-area-2";
import ProjectArea from "@/app/components/projects/project-area";
import BrandArea from "@/app/components/brand/brand-area";
import AboutAreaFive from "@/app/components/about-area/about-area-5";
import StreamersArea from "@/app/components/streamers/streamers-area";
import ContactAreaTwo from "@/app/components/contact/contact-area-2";
import TestimonialArea from "@/app/components/testimonial/testimonial-area";
import FooterFour from "@/layout/footer/footer-4";

import bg_img from '@/assets/img/bg/area_bg03.png';

export const metadata: Metadata = {
    title: "Home Page Four",
};


export default function HomeFourPage() {
    return (
        <Wrapper bodyCls="bg-black2">

            {/* header area start */}
            <HeaderThree />
            {/* header area end */}

            <main className="main--area">

                {/* hero area start */}
                <HeroBannerFour />
                {/* hero area end */}

                {/* area background start */}
                <div className="area-background" style={{ backgroundImage: `url(${bg_img.src})` }}>

                    {/* brand area start */}
                    <BrandArea top_cls="brand-area4" hideTitle={true}/>
                    {/* brand area start */}

                    {/* video area start */}
                    <VideoAreaTwo/>
                    {/* video area end */}

                    {/* about area start */}
                    <AboutAreaFive/>
                    {/* about area end */}

                    {/* streamers area start */}
                    <StreamersArea/>
                    {/* streamers area end */}

                    {/* project area start */}
                    <ProjectArea/>
                    {/* project area end */}

                </div>
                {/* area background end*/}

                {/* contact area start */}
                <ContactAreaTwo/>
                {/* contact area end */}

                {/* testimonial area start */}
                <TestimonialArea/>
                {/* testimonial area end */}

            </main>

            {/* footer start */}
            <FooterFour/>
            {/* footer end */}
        </Wrapper>
    )
}
