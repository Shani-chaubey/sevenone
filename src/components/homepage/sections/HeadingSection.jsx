"use client";

import { headingSectionContent } from "@/data/content";

export default function HeadingSection() {
  const content = headingSectionContent;

  return (
    <section className="heading-modern">
      <div className="heading-modern-container">
        <div className="heading-modern-content">
          <div className="heading-modern-badge">
            <span className="heading-modern-badge-text">{content.badge}</span>
            <div className="heading-modern-badge-glow"></div>
          </div>

          <h1 className="heading-modern-title">
            <span className="heading-modern-title-line">
              {content.title.line1}
            </span>
            <span className="heading-modern-title-line heading-modern-title-accent">
              {content.title.line2}
            </span>
          </h1>

          <div className="heading-modern-divider">
            <div className="heading-modern-divider-line"></div>
            <div className="heading-modern-divider-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="url(#starGradientHeading)"
                />
                <defs>
                  <linearGradient
                    id="starGradientHeading"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                  >
                    <stop offset="0%" stopColor="#ffd700" />
                    <stop offset="100%" stopColor="#ff9900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="heading-modern-divider-line"></div>
          </div>

          <p className="heading-modern-description">
            {content.description.part1}{" "}
            <span className="heading-modern-description-highlight">
              {content.description.highlight}
            </span>
            {content.description.part2}
            <br />
            <br />
            {content.description.part3}{" "}
            <span className="heading-modern-description-accent">
              {content.description.accent}
            </span>
            {content.description.part4}
          </p>

          <div className="heading-modern-cta-wrapper">
            <a href={content.cta.link} className="heading-modern-cta">
              <span className="heading-modern-cta-text">
                {content.cta.text}
              </span>
              <div className="heading-modern-cta-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="heading-modern-cta-shine"></div>
            </a>
          </div>
        </div>

        <div className="heading-modern-decoration">
          <div className="heading-modern-decoration-circle"></div>
          <div className="heading-modern-decoration-circle"></div>
          <div className="heading-modern-decoration-circle"></div>
        </div>
      </div>
    </section>
  );
}
