import Image from "next/image";
import Link from "next/link";
import banner_img from '@/assets/img/slider/banner_bg4.png';


export default function HeroBannerFour() {
    return (
        <section className="banner__area banner__area-three">
            <div className="banner__bg tg-jarallax">
                <Image src={banner_img} alt="img" style={{ height: 'auto' }} />
            </div>
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="col-xl-12">
                        <div className="banner__content slider__content">
                            <span className="sub-title2 wow fadeInUp" data-wow-delay=".1s">World Class Digital Design & Creative Solutions
</span>
                            <h2 className="title wow fadeInUp" data-wow-delay=".2s">SHAPING THE FUTURE OF </h2>
                            <h2 className="title wow fadeInUp" data-wow-delay=".3s" style={{ color: "#4cd964" }}>INNOVATION & BRANDING</h2> 
                            <div className="banner__btn d-flex wow fadeInUp" data-wow-delay=".6s" style={{ gap: "30px" }}>
                                <Link href="/contact" className="tg-btn-5">
                                    <span>CONTACT US</span>
                                </Link>
								<Link href="https://www.artstation.com/funixartstation" target="blank" className="tg-btn-4">
                                    <span>PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
