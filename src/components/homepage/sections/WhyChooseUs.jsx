"use client";
/* eslint-disable @next/next/no-img-element */

import { whyChooseUsFeatures, whyChooseUsContent } from "@/data/content";

export default function WhyChooseUs() {
  const features = whyChooseUsFeatures;

  return (
    <section className="why-choose-modern">
      <div className="why-choose-modern-container">
        <div className="why-choose-modern-header">
          <span className="why-choose-modern-subtitle">
            {whyChooseUsContent.subtitle}
          </span>
          <h2 className="why-choose-modern-title">
            {whyChooseUsContent.title.main}{" "}
            <span className="why-choose-modern-title-accent">
              {whyChooseUsContent.title.accent}
            </span>
            {whyChooseUsContent.title.suffix}
          </h2>
          <p className="why-choose-modern-description">
            {whyChooseUsContent.description}
          </p>
        </div>

        <div className="why-choose-modern-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="why-choose-modern-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="why-choose-modern-card-glow"></div>
              <div className="why-choose-modern-card-border"></div>

              <div className="why-choose-modern-card-content">
                <div className="why-choose-modern-icon-wrapper">
                  <div className="why-choose-modern-icon-bg"></div>
                  <div className="why-choose-modern-icon-container">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="why-choose-modern-icon"
                    />
                  </div>
                  <div className="why-choose-modern-icon-shine"></div>
                </div>

                <div className="why-choose-modern-card-body">
                  <h3 className="why-choose-modern-card-title">
                    {feature.title}
                  </h3>
                  <p className="why-choose-modern-card-description">
                    {feature.description}
                  </p>
                </div>

                <div className="why-choose-modern-card-footer">
                  <div className="why-choose-modern-card-accent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
