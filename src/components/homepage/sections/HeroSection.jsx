"use client";

import {
  handleHeroFormSubmit,
  handleHeroInput,
  handleHeroKeyNavigation,
} from "../utils/legacyActions";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <video
        autoPlay
        className="hero-video"
        loop
        muted
        playsInline
        poster="assets/img/mt-bg-desktop.webp"
        preload="auto"
      >
        <source src="assets/video/walkthrough1.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />
      <div className="search-bar-container">
        <h2>
          Find Your
          <span>Dream Property</span>
        </h2>
        <p>Search properties for sale across top locations.</p>
        <form
          action="search.php"
          className="hero-search-form"
          method="GET"
          onSubmit={handleHeroFormSubmit}
        >
          <div className="form-group position-relative">
            <input
              autoComplete="off"
              name="search"
              onInput={handleHeroInput}
              onKeyDown={handleHeroKeyNavigation}
              placeholder="Enter City, Location, or Project Name"
              type="text"
            />
            <ul className="list-group suggestions-box" id="suggestions" />
          </div>
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
