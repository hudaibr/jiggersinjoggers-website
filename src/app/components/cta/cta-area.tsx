import Link from "next/link";

export default function CtaArea() {
    return (
        <section className="section-pt-50 section-pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="text-center">
                            <h3 className="title2 mb-4" style={{ color: '#fff' }}>Ready to Bring Your Characters to Life?</h3>
                            <Link href="/contact" className="tg-btn-5">
                                <span>Get a Quote</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
