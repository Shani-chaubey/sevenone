"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { openContactForm } from "../utils/legacyActions";
import { formatPrice } from "@/utils/formatPrice";
import { propertiesGridContent } from "@/data/content";

export default function PropertiesGrid() {
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
        // Show only first 6 properties for grid
        setProperties(data.data.slice(0, 6));
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
    <section className="properties-grid-modern">
      <div className="properties-grid-modern-container">
        <div className="properties-grid-modern-header">
          <span className="properties-grid-modern-subtitle">
            {propertiesGridContent.subtitle}
          </span>
          <h2 className="properties-grid-modern-title">
            {propertiesGridContent.title.main}{" "}
            <span className="properties-grid-modern-title-accent">
              {propertiesGridContent.title.accent}
            </span>
          </h2>
          <p className="properties-grid-modern-description">
            {propertiesGridContent.description}
          </p>
        </div>

        <div className="properties-grid-modern-grid" id="propertiesGrid">
          {properties.map((property) => (
            <div key={property.id} className="properties-grid-modern-card">
              <div className="properties-grid-modern-card-glow"></div>
              <div className="properties-grid-modern-card-border"></div>

              <div className="properties-grid-modern-image-wrapper">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: `.properties-grid-modern-nav-next-${property.id}`,
                    prevEl: `.properties-grid-modern-nav-prev-${property.id}`,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  className="properties-grid-modern-image-swiper"
                >
                  {/* Main image first */}
                  <SwiperSlide key="main">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="properties-grid-modern-image"
                    />
                  </SwiperSlide>
                  {/* Additional images */}
                  {property.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${property.name} - Image ${index + 1}`}
                        className="properties-grid-modern-image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="properties-grid-modern-image-overlay"></div>
                <div className="properties-grid-modern-type-badge">
                  {property.type.map((type, index) => (
                    <span
                      key={index}
                      className="properties-grid-modern-type-tag"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <button
                  className={`properties-grid-modern-nav-btn properties-grid-modern-nav-prev-${property.id}`}
                  aria-label="Previous image"
                >
                  <svg
                    width="20"
                    height="20"
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
                  className={`properties-grid-modern-nav-btn properties-grid-modern-nav-next-${property.id}`}
                  aria-label="Next image"
                >
                  <svg
                    width="20"
                    height="20"
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

              <div className="properties-grid-modern-card-content">
                <div className="properties-grid-modern-card-header">
                  <h3 className="properties-grid-modern-card-title">
                    {property.name}
                  </h3>
                  <div className="properties-grid-modern-builder">
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
                    <div className="properties-grid-modern-specification">
                      <span>{property.specification}</span>
                    </div>
                  )}
                </div>

                <div className="properties-grid-modern-price">
                  {formatPrice(property.price)}
                  <span className="properties-grid-modern-price-asterisk">
                    *
                  </span>
                </div>

                <div className="properties-grid-modern-location">
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

                <div className="properties-grid-modern-actions">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openContactForm();
                    }}
                    className="properties-grid-modern-view-btn"
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
                    className="properties-grid-modern-share-btn"
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
          ))}
        </div>

        <div className="properties-grid-modern-footer">
          <a
            href="/our-service"
            className="properties-grid-modern-explore-link"
          >
            <span>{propertiesGridContent.exploreLink.text}</span>
            <svg
              width="24"
              height="24"
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
          </a>
        </div>
      </div>
    </section>
  );
}
