"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../homepage/sections/Header";
import Footer from "../homepage/sections/Footer";
import SocialLinks from "../homepage/sections/SocialLinks";
import MobileMenu from "../homepage/sections/MobileMenu";
import SearchOverlay from "../homepage/sections/SearchOverlay";
import LeadCaptureSuite from "../homepage/sections/LeadCaptureSuite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { openContactForm } from "../homepage/utils/legacyActions";
import { formatPrice } from "@/utils/formatPrice";
import { propertiesPageContent } from "@/data/content";

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Get search query from URL if present
    const urlSearch = searchParams.get("search");
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }
    fetchProperties();
  }, [searchParams]);

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/properties");
      const data = await res.json();
      if (data.success) {
        setAllProperties(data.data);
      }
    } catch (error) {
      // Error fetching properties
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <SocialLinks />
        <Header />
        <div
          style={{ padding: "100px 20px", textAlign: "center", color: "#fff" }}
        >
          Loading properties...
        </div>
        <Footer />
      </div>
    );
  }

  // Get unique property types (excluding Studio Apartments)
  const propertyTypes = [
    "all",
    ...new Set(
      allProperties
        .flatMap((p) => p.type)
        .filter((type) => type !== "Studio Apartments")
    ),
  ];

  // Filter properties
  const filteredProperties = allProperties.filter((property) => {
    const matchesFilter = filter === "all" || property.type.includes(filter);
    const matchesSearch =
      searchQuery === "" ||
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.builder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (property.specification &&
        property.specification
          .toLowerCase()
          .includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <SocialLinks />
      <Header />
      <MobileMenu />
      <SearchOverlay />
      <LeadCaptureSuite />

      <section className="properties-page-modern">
        <div className="properties-page-modern-container">
          <div className="properties-page-modern-header">
            <span className="properties-page-modern-subtitle">
              {propertiesPageContent.subtitle}
            </span>
            <h1 className="properties-page-modern-title">
              {propertiesPageContent.title.main}{" "}
              <span className="properties-page-modern-title-accent">
                {propertiesPageContent.title.accent}
              </span>
            </h1>
            <p className="properties-page-modern-description">
              {propertiesPageContent.description}
            </p>
          </div>

          <div className="properties-page-modern-filters">
            <div className="properties-page-modern-search">
              <div className="properties-page-modern-search-icon">
                <svg
                  width="20"
                  height="20"
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
                type="text"
                placeholder={propertiesPageContent.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="properties-page-modern-search-input"
              />
            </div>

            <div className="properties-page-modern-filter-buttons">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`properties-page-modern-filter-btn ${
                    filter === type ? "active" : ""
                  }`}
                >
                  {type === "all" ? propertiesPageContent.filterAll : type}
                </button>
              ))}
            </div>
          </div>

          <div className="properties-page-modern-results">
            <p className="properties-page-modern-results-count">
              Showing {filteredProperties.length} of {allProperties.length}{" "}
              properties
            </p>
          </div>

          <div className="properties-page-modern-grid">
            {filteredProperties.map((property) => (
              <div key={property.id} className="properties-page-modern-card">
                <div className="properties-page-modern-card-glow"></div>
                <div className="properties-page-modern-card-border"></div>

                <div className="properties-page-modern-image-wrapper">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                      nextEl: `.properties-page-nav-next-${property.id}`,
                      prevEl: `.properties-page-nav-prev-${property.id}`,
                    }}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    className="properties-page-modern-image-swiper"
                  >
                    {/* Main image first */}
                    <SwiperSlide key="main">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="properties-page-modern-image"
                      />
                    </SwiperSlide>
                    {/* Additional images */}
                    {property.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`${property.name} - Image ${index + 1}`}
                          className="properties-page-modern-image"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="properties-page-modern-image-overlay"></div>
                  <div className="properties-page-modern-type-badge">
                    {property.type.map((type, index) => (
                      <span
                        key={index}
                        className="properties-page-modern-type-tag"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                  <button
                    className={`properties-page-modern-nav-btn properties-page-nav-prev-${property.id}`}
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
                    className={`properties-page-modern-nav-btn properties-page-nav-next-${property.id}`}
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

                <div className="properties-page-modern-card-content">
                  <div className="properties-page-modern-card-header">
                    <h3 className="properties-page-modern-card-title">
                      {property.name}
                    </h3>
                    <div className="properties-page-modern-builder">
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
                      <div className="properties-page-modern-specification">
                        <span>{property.specification}</span>
                      </div>
                    )}
                  </div>

                  <div className="properties-page-modern-price">
                    {formatPrice(property.price)}
                    <span className="properties-page-modern-price-asterisk">
                      *
                    </span>
                  </div>

                  <div className="properties-page-modern-location">
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

                  <div className="properties-page-modern-actions">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openContactForm();
                      }}
                      className="properties-page-modern-view-btn"
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
                      className="properties-page-modern-share-btn"
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

          {filteredProperties.length === 0 && (
            <div className="properties-page-modern-empty">
              <svg
                width="80"
                height="80"
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
              <h3>No properties found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
