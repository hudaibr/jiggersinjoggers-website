import React from "react";

const steps = [
  {
    id: 1,
    icon: "flaticon-add-user",
    title: "Submit Your Brief",
    desc: "Tell us about your character, style preferences, and what you need — whether it's an emote, banner, or full character design.",
  },
  {
    id: 2,
    icon: "flaticon-edit",
    title: "We Create & Refine",
    desc: "Our artists bring your vision to life with sketches, revisions, and final polish until it's perfect.",
  },
  {
    id: 3,
    icon: "flaticon-checked",
    title: "You Receive & Use",
    desc: "Get your final high-res assets ready to use on Discord, Twitch, or anywhere your community hangs out.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pt-95 section-pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section__title text-center mb-65 title-shape-none">
              <h6 className="sub-title2">HOW IT WORKS</h6>
              <h3 className="title2">From Idea to Artwork</h3>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {steps.map((step) => (
            <div key={step.id} className="col-xl-4 col-md-6">
              <div className="services__item text-center">
                <div className="services__icon">
                  <i className={step.icon}></i>
                </div>
                <div className="services__content">
                  <h4 className="title">{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
