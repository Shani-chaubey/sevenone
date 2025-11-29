"use client";

import { useState } from "react";

export default function SearchOverlay() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    if (searchQuery.trim()) {
      // Close search overlay
      const searchContainer = document.getElementById("searchContainer");
      if (searchContainer) {
        searchContainer.classList.remove("active");
      }
      // Redirect to our-service page with search query
      window.location.href = `/our-service?search=${encodeURIComponent(
        searchQuery.trim()
      )}`;
    }
  };

  return (
    <div className="search-overlay-modern" id="searchContainer">
      <div className="search-overlay-modern-backdrop"></div>
      <div className="search-overlay-modern-container">
        <div className="search-overlay-modern-content">
          <div className="search-overlay-modern-header">
            <h2 className="search-overlay-modern-title">Search Properties</h2>
            <p className="search-overlay-modern-subtitle">
              Find your dream property across top locations
            </p>
          </div>

          <form
            className="search-overlay-modern-form"
            id="searchForm"
            onSubmit={handleSubmit}
            data-react-form="true"
          >
            <div className="search-overlay-modern-input-wrapper">
              <div className="search-overlay-modern-input-icon">
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
                className="search-overlay-modern-input"
                id="searchInput"
                name="q"
                placeholder="Enter City, Location, or Project Name..."
                type="text"
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="search-overlay-modern-input-glow"></div>
            </div>

            <div className="search-overlay-modern-actions">
              <button className="search-overlay-modern-submit" type="submit">
                <span>Search</span>
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
                className="search-overlay-modern-close"
                id="closeSearch"
                type="button"
                aria-label="Close search"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>

          <div
            className="search-overlay-modern-preview"
            id="searchPreview"
          ></div>
        </div>
      </div>
    </div>
  );
}
