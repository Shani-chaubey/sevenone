"use client";

import Header from "../homepage/sections/Header";
import Footer from "../homepage/sections/Footer";
import SocialLinks from "../homepage/sections/SocialLinks";
import MobileMenu from "../homepage/sections/MobileMenu";
import SearchOverlay from "../homepage/sections/SearchOverlay";
import LeadCaptureSuite from "../homepage/sections/LeadCaptureSuite";
import {
  CONTACT_PHONE_TEL,
  CONTACT_PHONE_LABEL,
  CONTACT_EMAIL,
} from "../homepage/constants";
import {
  aboutUsContent,
  contactInfo,
  contactAboutContent,
} from "@/data/content";

export default function ContactAboutPage() {
  return (
    <div>
      <SocialLinks />
      <Header />
      <MobileMenu />
      <SearchOverlay />
      <LeadCaptureSuite />

      {/* About Us Section */}
      <section className="contact-about-section">
        <div className="contact-about-container">
          <div className="contact-about-header">
            <span className="contact-about-subtitle">
              {contactAboutContent.aboutUs.subtitle}
            </span>
            <h1 className="contact-about-title">
              {contactAboutContent.aboutUs.title.main}{" "}
              <span className="contact-about-title-accent">
                {contactAboutContent.aboutUs.title.accent}
              </span>
            </h1>
            <p className="contact-about-description">
              {contactAboutContent.aboutUs.description}
            </p>
          </div>

          <div className="contact-about-content">
            <div className="contact-about-card">
              <div className="contact-about-card-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="contact-about-card-title">
                {aboutUsContent.mission.title}
              </h3>
              <p className="contact-about-card-text">
                {aboutUsContent.mission.text}
              </p>
            </div>

            <div className="contact-about-card">
              <div className="contact-about-card-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="contact-about-card-title">
                {aboutUsContent.vision.title}
              </h3>
              <p className="contact-about-card-text">
                {aboutUsContent.vision.text}
              </p>
            </div>

            <div className="contact-about-card">
              <div className="contact-about-card-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="contact-about-card-title">
                {aboutUsContent.values.title}
              </h3>
              <p className="contact-about-card-text">
                {aboutUsContent.values.text}
              </p>
            </div>
          </div>

          <div className="contact-about-stats">
            {aboutUsContent.statistics.map((stat, index) => (
              <div key={index} className="contact-about-stat-card">
                <div className="contact-about-stat-number">{stat.value}</div>
                <div className="contact-about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-about-section contact-section">
        <div className="contact-about-container">
          <div className="contact-about-header">
            <span className="contact-about-subtitle">
              {contactAboutContent.contactUs.subtitle}
            </span>
            <h1 className="contact-about-title">
              {contactAboutContent.contactUs.title.main}{" "}
              <span className="contact-about-title-accent">
                {contactAboutContent.contactUs.title.accent}
              </span>
            </h1>
            <p className="contact-about-description">
              {contactAboutContent.contactUs.description}
            </p>
          </div>

          <div className="contact-about-content contact-content">
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.352 21.3999C21.1467 21.5872 20.9042 21.7292 20.6397 21.8167C20.3752 21.9042 20.095 21.9351 19.82 21.9079C16.7428 21.5811 13.787 20.5331 11.19 18.8579C8.77382 17.3406 6.72533 15.2922 5.208 12.8759C3.53279 10.2788 2.48482 7.32305 2.158 4.24592C2.13087 3.97095 2.16178 3.69074 2.24926 3.42624C2.33673 3.16174 2.47875 2.91925 2.66604 2.71395C2.85333 2.50864 3.08185 2.34506 3.33679 2.23346C3.59173 2.12186 3.86746 2.06487 4.146 2.06592H7.146C7.68147 2.0643 8.20549 2.21121 8.66148 2.49063C9.11747 2.77005 9.48698 3.17159 9.726 3.65192L11.066 6.79192C11.3014 7.26554 11.4002 7.79424 11.3519 8.31876C11.3036 8.84328 11.1101 9.34419 10.792 9.77192L9.092 12.0019C10.5131 14.1271 12.3729 15.9869 14.498 17.4079L16.728 15.7079C17.1558 15.3898 17.6567 15.1963 18.1812 15.148C18.7058 15.0997 19.2345 15.1985 19.708 15.4339L22.848 16.7739C23.3283 17.0129 23.7298 17.3824 24.0092 17.8384C24.2886 18.2944 24.4355 18.8184 24.434 19.3539L24.434 19.3539Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="contact-info-card-title">Phone</h3>
                <p className="contact-info-card-text">
                  <a href={CONTACT_PHONE_TEL}>{CONTACT_PHONE_LABEL}</a>
                </p>
                <p className="contact-info-card-text">
                  Available 24/7 for your convenience
                </p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="contact-info-card-title">Email</h3>
                <p className="contact-info-card-text">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
                <p className="contact-info-card-text">
                  We respond within 24 hours
                </p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="contact-info-card-title">Office Address</h3>
                <p className="contact-info-card-text">
                  {contactInfo.address.line1}
                </p>
                <p className="contact-info-card-text">
                  {contactInfo.address.line2}
                </p>
                <p className="contact-info-card-text">
                  {contactInfo.address.line3}
                </p>
                <p className="contact-info-card-text">
                  {contactInfo.address.line4}
                </p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h2 className="contact-form-title">Send us a Message</h2>
                <p className="contact-form-subtitle">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && window.openForm) {
                    window.openForm();
                  }
                }}
                className="contact-form-cta-btn"
              >
                <span>Open Contact Form</span>
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
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
