import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPolicyPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbAreaThree title="Refund Policy" subtitle="Refund Policy" />
        {/* breadcrumb area end */}

        {/* refund content start */}
        <section className="blog-area section-pt-120 section-pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="blog-details-content">
                  <p className="last-updated"><strong>Last Updated: June 2026</strong></p>

                  <h2 className="title">Refund Policy</h2>
                  <p>At Jiggers in Joggers LLC, we provide customized digital services. Due to the time, expertise, and resources invested in each project, refunds are subject to the following conditions.</p>

                  <h3>Eligible Refunds</h3>
                  <p>A refund may be approved if:</p>
                  <ul>
                    <li>The project has not started.</li>
                    <li>A duplicate payment was made.</li>
                    <li>We are unable to deliver the agreed service due to our fault.</li>
                    <li>Payment was processed in error.</li>
                  </ul>

                  <h3>Partial Refunds</h3>
                  <p>If a project is cancelled after work has started:</p>
                  <ul>
                    <li>Only unfinished work may be eligible for a partial refund.</li>
                    <li>Completed work remains billable.</li>
                    <li>Administrative, consultation, and planning costs may be deducted.</li>
                  </ul>

                  <h3>Non-Refundable Services</h3>
                  <p>The following are non-refundable once work has commenced:</p>
                  <ul>
                    <li>Website Design</li>
                    <li>Website Development</li>
                    <li>Graphic Design</li>
                    <li>Logo Design</li>
                    <li>Branding Services</li>
                    <li>Character Design</li>
                    <li>Illustrations</li>
                    <li>SEO Services</li>
                    <li>Social Media Management</li>
                    <li>Marketing Campaigns</li>
                    <li>Consulting Services</li>
                    <li>Strategy Sessions</li>
                    <li>Audits and Reports</li>
                  </ul>
                  <p>Digital services cannot be returned once delivered and are generally non-refundable after work begins.</p>

                  <h3>Third-Party Expenses</h3>
                  <p>The following costs are never refundable:</p>
                  <ul>
                    <li>Domain Registrations</li>
                    <li>Hosting Services</li>
                    <li>Advertising Spend</li>
                    <li>Software Licenses</li>
                    <li>Premium Plugins</li>
                    <li>Stock Assets</li>
                    <li>Third-Party Service Fees</li>
                  </ul>

                  <h3>Cancellation Policy</h3>
                  <p>Clients may request project cancellation at any time.</p>
                  <p>Work completed up to the cancellation date will be invoiced and deducted from any eligible refund amount.</p>

                  <h3>Refund Request Procedure</h3>
                  <p>To request a refund, please email:</p>
                  <p><a href="mailto:hello@jiggersinjoggers.com" style={{color: 'var(--tg-theme-primary)'}}>hello@jiggersinjoggers.com</a></p>
                  <p>Include:</p>
                  <ul>
                    <li>Full Name</li>
                    <li>Invoice Number</li>
                    <li>Project Name</li>
                    <li>Reason for Refund Request</li>
                  </ul>

                  <h3>Processing Time</h3>
                  <p>Approved refunds will be processed within 7-14 business days through the original payment method.</p>

                  <h3>PayPal Disputes and Chargebacks</h3>
                  <p>For payment disputes, we may provide evidence including:</p>
                  <ul>
                    <li>Signed Agreements</li>
                    <li>Invoices</li>
                    <li>Email Communications</li>
                    <li>Project Files</li>
                    <li>Revision History</li>
                    <li>Delivery Records</li>
                    <li>Client Approvals</li>
                  </ul>
                  <p>Maintaining these records helps verify service fulfillment in the event of a payment dispute.</p>

                  <h3>Contact</h3>
                  <p>For refund-related inquiries:</p>
                  <p className='mb-0'><strong>Jiggers in Joggers LLC</strong></p>
                  <p><a href="mailto:hello@jiggersinjoggers.com" style={{color: 'var(--tg-theme-primary)'}}>hello@jiggersinjoggers.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* refund content end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
