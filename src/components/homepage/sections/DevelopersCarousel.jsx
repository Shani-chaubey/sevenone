"use client";
/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { developers, developersContent } from "@/data/content";

export default function DevelopersCarousel() {
  return (
    <section className="developers-modern">
      <div className="developers-modern-container">
        <div className="developers-modern-header">
          <span className="developers-modern-subtitle">
            {developersContent.subtitle}
          </span>
          <h2 className="developers-modern-title">
            {developersContent.title.main}{" "}
            <span className="developers-modern-title-accent">
              {developersContent.title.accent}
            </span>
          </h2>
          <p className="developers-modern-description">
            {developersContent.description}
          </p>
        </div>

        <div className="developers-modern-swiper-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".developers-modern-nav-next",
              prevEl: ".developers-modern-nav-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              968: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="developers-modern-swiper"
          >
            {developers.map((developer) => (
              <SwiperSlide
                key={developer.id}
                className="developers-modern-slide"
              >
                <a
                  href={developer.link}
                  className="developers-modern-card-link"
                >
                  <div className="developers-modern-card">
                    <div className="developers-modern-card-glow"></div>
                    <div className="developers-modern-card-border"></div>
                    <div className="developers-modern-logo-wrapper">
                      <img
                        src={developer.logo}
                        alt={developer.name}
                        className="developers-modern-logo"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="developers-modern-name">{developer.name}</h3>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="developers-modern-navigation">
            <button
              className="developers-modern-nav-btn developers-modern-nav-prev"
              aria-label="Previous developer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="developers-modern-nav-btn developers-modern-nav-next"
              aria-label="Next developer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
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
  );
}
