import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/img/logo/preloader.png';
import bg_img from '@/assets/img/bg/footer_bg4.png';


export default function FooterFour() {
  return (
    <footer className="footer-style-four bg-img-cover bg-img-center" 
      style={{ backgroundImage: `url(${bg_img.src})` }}>
        <div className="footer__top-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="footer-widget text-center">
                            <div className="footer-logo logo">
                                <Link href="/">
                                   <Image src={logo} alt="Logo" style={{height:'auto'}}/>
                                </Link>
                            </div>
                            <div className="footer-menu-link mt-20">
                                <Link href="/">Home</Link>
                                <Link href="/about">About</Link>
                                <Link href="/portfolio">Portfolio</Link>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="footer-newsletter2">
                            <h4 className="title">STUDIO UPDATES</h4>
                            <form action="#" className="footer-newsletter-form2">
                                <input type="email" placeholder="Enter Email Address"/>
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright__wrap">
                <div className="row gy-2 align-items-center">
                    <div className="col-lg-6">
                        <div className="copyright__text">
                            <p>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span>Jiggers in Joggers</span></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright__menu">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                                <li><Link href="/refund-policy">Refund Policy</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
