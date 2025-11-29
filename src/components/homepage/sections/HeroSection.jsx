"use client";
/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  handleHeroFormSubmit,
  handleHeroInput,
  handleHeroKeyNavigation,
} from "../utils/legacyActions";
import { heroBanners } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="hero-modern">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
          bulletClass: "hero-modern-pagination-bullet",
          bulletActiveClass: "hero-modern-pagination-bullet-active",
        }}
        navigation={{
          nextEl: ".hero-modern-nav-next",
          prevEl: ".hero-modern-nav-prev",
        }}
        className="hero-modern-swiper"
      >
        {heroBanners.map((banner) => (
          <SwiperSlide key={banner.id} className="hero-modern-slide">
            <div className="hero-modern-slide-content">
              <img
                src={banner.image}
                alt={banner.title}
                className="hero-modern-slide-image"
              />
              <div className="hero-modern-slide-overlay"></div>
              <div className="hero-modern-slide-text">
                <div className="hero-modern-slide-badge">
                  <span>Premium Properties</span>
                </div>
                <h1 className="hero-modern-slide-title">{banner.title}</h1>
                <h2 className="hero-modern-slide-subtitle">
                  {banner.subtitle}
                </h2>
                <p className="hero-modern-slide-description">
                  {banner.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-modern-content">
        <div className="hero-modern-search-container">
          <div className="hero-modern-search-header">
            <h2 className="hero-modern-search-title">
              Find Your{" "}
              <span className="hero-modern-search-title-accent">
                Dream Property
              </span>
            </h2>
            <p className="hero-modern-search-subtitle">
              Search properties for sale across top locations
            </p>
          </div>

          <form
            action="search.php"
            className="hero-modern-search-form"
            method="GET"
            onSubmit={handleHeroFormSubmit}
          >
            <div className="hero-modern-search-input-wrapper">
              <div className="hero-modern-search-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                autoComplete="off"
                name="search"
                onInput={handleHeroInput}
                onKeyDown={handleHeroKeyNavigation}
                placeholder="Enter City, Location, or Project Name"
                type="text"
                className="hero-modern-search-input"
              />
              <ul className="list-group suggestions-box" id="suggestions" />
            </div>
            <button className="hero-modern-search-btn" type="submit">
              <span>Search</span>
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
          </form>
        </div>
      </div>

      <div className="hero-modern-navigation">
        <button
          className="hero-modern-nav-btn hero-modern-nav-prev"
          aria-label="Previous slide"
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
          className="hero-modern-nav-btn hero-modern-nav-next"
          aria-label="Next slide"
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

      <div className="hero-modern-pagination"></div>
    </section>
  );
}
