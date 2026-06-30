import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbAreaThree title="Privacy Policy" subtitle="Privacy Policy" />
        {/* breadcrumb area end */}

        {/* privacy content start */}
        <section className="blog-area section-pt-120 section-pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="blog-details-content">
                  <p className="last-updated"><strong>Last Updated: June 2026</strong></p>

                  <h2 className="title">Privacy Policy</h2>
                  <p>Welcome to Jiggers in Joggers LLC (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).</p>
                  <p>We respect your privacy and are committed to protecting any information you share with us when using our website and services.</p>

                  <h3>Information We Collect</h3>
                  <p>We may collect the following information:</p>
                  <ul>
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Company Name</li>
                    <li>Project Requirements</li>
                    <li>Billing Information</li>
                    <li>Communication Records</li>
                  </ul>
                  <p>We may also automatically collect:</p>
                  <ul>
                    <li>IP Address</li>
                    <li>Browser Type</li>
                    <li>Device Information</li>
                    <li>Website Usage Data</li>
                    <li>Cookies and Analytics Information</li>
                  </ul>

                  <h3>How We Use Your Information</h3>
                  <p>We use your information to:</p>
                  <ul>
                    <li>Respond to inquiries</li>
                    <li>Provide our services</li>
                    <li>Process payments</li>
                    <li>Deliver project updates</li>
                    <li>Improve our website and services</li>
                    <li>Maintain security and prevent fraud</li>
                  </ul>

                  <h3>Sharing of Information</h3>
                  <p>We do not sell, rent, or trade your personal information.</p>
                  <p>We may share information with trusted third-party providers necessary for business operations, including:</p>
                  <ul>
                    <li>PayPal</li>
                    <li>Stripe</li>
                    <li>Google Analytics</li>
                    <li>Cloud Hosting Providers</li>
                    <li>CRM and Project Management Platforms</li>
                  </ul>

                  <h3>Data Security</h3>
                  <p>We implement reasonable technical and organizational measures to protect your information against unauthorized access, disclosure, or misuse.</p>

                  <h3>Cookies</h3>
                  <p>Our website may use cookies and similar technologies to improve user experience and analyze website performance.</p>

                  <h3>Third-Party Links</h3>
                  <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.</p>

                  <h3>Your Rights</h3>
                  <p>You may request:</p>
                  <ul>
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your information where legally permitted</li>
                  </ul>

                  <h3>Contact Us</h3>
                  <p>If you have any questions regarding this Privacy Policy, please contact:</p>
                  <p className='mb-0'><strong>Jiggers in Joggers LLC</strong></p>
                  <p><a href="mailto:hello@jiggersinjoggers.com" style={{color: 'var(--tg-theme-primary)'}}>hello@jiggersinjoggers.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* privacy content end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
