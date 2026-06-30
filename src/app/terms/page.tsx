import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbAreaThree title="Terms of Service" subtitle="Terms of Service" />
        {/* breadcrumb area end */}

        {/* terms content start */}
        <section className="blog-area section-pt-120 section-pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="blog-details-content">
                  <p className="last-updated"><strong>Last Updated: June 2026</strong></p>

                  <h2 className="title">Terms of Service</h2>
                  <p>By accessing our website or purchasing our services, you agree to these Terms and Conditions.</p>

                  <h3>Services</h3>
                  <p>Jiggers in Joggers LLC provides:</p>
                  <ul>
                    <li>Website Design</li>
                    <li>Website Development</li>
                    <li>Graphic Design</li>
                    <li>Branding</li>
                    <li>SEO Services</li>
                    <li>Social Media Management</li>
                    <li>Digital Marketing</li>
                    <li>Character Design</li>
                    <li>Illustration Services</li>
                    <li>Creative Consulting</li>
                  </ul>

                  <h3>Project Initiation</h3>
                  <p>Projects begin only after:</p>
                  <ul>
                    <li>Agreement on scope of work</li>
                    <li>Required information and assets are provided</li>
                    <li>Initial payment has been received</li>
                  </ul>

                  <h3>Client Responsibilities</h3>
                  <p>Clients agree to:</p>
                  <ul>
                    <li>Provide accurate project information</li>
                    <li>Supply required content and materials</li>
                    <li>Respond to requests in a timely manner</li>
                    <li>Review and approve deliverables promptly</li>
                  </ul>

                  <h3>Revisions</h3>
                  <p>Unless otherwise stated in writing:</p>
                  <p>Design projects include up to two rounds of revisions. Additional revisions may incur additional charges.</p>

                  <h3>Payments</h3>
                  <p>All invoices are due according to the payment schedule specified in the proposal or invoice.</p>
                  <p>Late payments may result in project delays or suspension.</p>

                  <h3>Intellectual Property</h3>
                  <p>Upon full payment:</p>
                  <ul>
                    <li>Ownership of final approved deliverables transfers to the client.</li>
                    <li>Jiggers in Joggers LLC retains the right to display completed work in its portfolio and marketing materials unless otherwise agreed in writing.</li>
                  </ul>

                  <h3>Third-Party Costs</h3>
                  <p>Clients are responsible for costs associated with:</p>
                  <ul>
                    <li>Domain Registration</li>
                    <li>Website Hosting</li>
                    <li>Paid Plugins</li>
                    <li>Premium Themes</li>
                    <li>Stock Assets</li>
                    <li>Advertising Spend</li>
                    <li>Third-Party Software Licenses</li>
                  </ul>

                  <h3>SEO and Marketing Disclaimer</h3>
                  <p>We do not guarantee:</p>
                  <ul>
                    <li>Search engine rankings</li>
                    <li>Website traffic levels</li>
                    <li>Leads or sales</li>
                    <li>Advertising performance</li>
                    <li>Business growth outcomes</li>
                  </ul>
                  <p>Marketing and SEO results vary depending on market conditions, competition, and factors beyond our control.</p>

                  <h3>Project Delays</h3>
                  <p>If a client becomes unresponsive for more than 30 days, the project may be placed on hold. Additional fees may apply to restart inactive projects.</p>

                  <h3>Limitation of Liability</h3>
                  <p>Under no circumstances shall Jiggers in Joggers LLC be liable for indirect, incidental, consequential, or special damages arising from the use of our services.</p>
                  <p>Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.</p>

                  <h3>Termination</h3>
                  <p>We reserve the right to terminate services if:</p>
                  <ul>
                    <li>Payments are not made</li>
                    <li>Abusive behavior occurs</li>
                    <li>Requests violate laws or platform policies</li>
                  </ul>

                  <h3>Governing Law</h3>
                  <p>These Terms shall be governed by applicable business laws relevant to Jiggers in Joggers LLC.</p>

                  <h3>Contact</h3>
                  <p>Email: <a href="mailto:hello@jiggersinjoggers.com" style={{color: 'var(--tg-theme-primary)'}}>hello@jiggersinjoggers.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* terms content end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
