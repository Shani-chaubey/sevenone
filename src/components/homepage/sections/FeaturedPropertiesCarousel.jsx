"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { openContactForm } from "../utils/legacyActions";
import { formatPrice } from "@/utils/formatPrice";
import { featuredPropertiesContent } from "@/data/content";

export default function FeaturedPropertiesCarousel() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/properties");
      const data = await res.json();
      if (data.success) {
        // Show only first 8 properties for featured
        setProperties(data.data.slice(0, 8));
      }
    } catch (error) {
      // Error fetching properties
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading properties...</div>;
  }

  return (
    <section className="featured-properties-modern">
      <div className="featured-properties-modern-container">
        <div className="featured-properties-modern-header">
          <span className="featured-properties-modern-subtitle">
            {featuredPropertiesContent.subtitle}
          </span>
          <h2 className="featured-properties-modern-title">
            {featuredPropertiesContent.title.main}{" "}
            <span className="featured-properties-modern-title-accent">
              {featuredPropertiesContent.title.accent}
            </span>
          </h2>
          <p className="featured-properties-modern-description">
            {featuredPropertiesContent.description}
          </p>
        </div>

        <div className="featured-properties-modern-swiper-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".featured-properties-modern-nav-next",
              prevEl: ".featured-properties-modern-nav-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="featured-properties-modern-swiper"
          >
            {properties.map((property) => (
              <SwiperSlide
                key={property.id}
                className="featured-properties-modern-slide"
              >
                <div className="featured-properties-modern-card">
                  <div className="featured-properties-modern-card-glow"></div>
                  <div className="featured-properties-modern-card-border"></div>

                  <div className="featured-properties-modern-image-wrapper">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="featured-properties-modern-image"
                    />
                    <div className="featured-properties-modern-image-overlay"></div>
                    <div className="featured-properties-modern-type-badge">
                      {property.type.map((type, index) => (
                        <span
                          key={index}
                          className="featured-properties-modern-type-tag"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="featured-properties-modern-card-content">
                    <div className="featured-properties-modern-card-header">
                      <h3 className="featured-properties-modern-card-title">
                        {property.name}
                      </h3>
                      <div className="featured-properties-modern-builder">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 22v-6.57M12 11h.01M12 7h.01M14 15.43V22M15 16a5 5 0 0 0-6 0M16 11h.01M16 7h.01M8 11h.01M8 7h.01M4 2h16v20H4V2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{property.builder}</span>
                      </div>
                      {property.specification && (
                        <div className="featured-properties-modern-specification">
                          <span>{property.specification}</span>
                        </div>
                      )}
                    </div>

                    <div className="featured-properties-modern-price">
                      {formatPrice(property.price)}
                      <span className="featured-properties-modern-price-asterisk">
                        *
                      </span>
                    </div>

                    <div className="featured-properties-modern-location">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{property.location}</span>
                    </div>

                    <div className="featured-properties-modern-actions">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          openContactForm();
                        }}
                        className="featured-properties-modern-view-btn"
                      >
                        <span>View Details</span>
                        <svg
                          width="18"
                          height="18"
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
                      <button
                        className="featured-properties-modern-share-btn"
                        aria-label="Share property"
                        type="button"
                        onClick={openContactForm}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 1 0 5.367-2.684 3 3 0 0 0-5.367 2.684zm0 9.316a3 3 0 1 0 5.367 2.684 3 3 0 0 0-5.367-2.684z"
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
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="featured-properties-modern-navigation">
            <button
              className="featured-properties-modern-nav-btn featured-properties-modern-nav-prev"
              aria-label="Previous property"
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
              className="featured-properties-modern-nav-btn featured-properties-modern-nav-next"
              aria-label="Next property"
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
