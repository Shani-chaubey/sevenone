"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import { CONTACT_PHONE_LABEL, CONTACT_PHONE_TEL } from "../constants";

export default function MobileMenu() {
  return (
    <div className="mobile-menu" id="mobileMenu">
      <button
        aria-label="Close menu"
        className="mobile-menu-close"
        id="mobileMenuClose"
      >
        <svg
          fill="none"
          height={24}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1={18} x2={6} y1={6} y2={18} />
          <line x1={6} x2={18} y1={6} y2={18} />
        </svg>
      </button>
      <div className="custom-logo">
        <a href="/">
          <img
            alt="Best Real Estate Property Consultant in Delhi/NCR"
            src="/assets/img/logo.png"
          />
        </a>
      </div>
      <nav className="mobile-nav">
        <ul className="main-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/media">Testimonials</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/csr">CSR</a>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <span className="has-submenu" data-target="submenuProjects">
              Projects
              <svg
                className="lucide lucide-chevron-right"
                fill="none"
                height={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </li>
          <li>
            <span className="has-submenu" data-target="submenuOthers">
              More
              <svg
                className="lucide lucide-chevron-right"
                fill="none"
                height={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </li>
          <li>
            <a
              className="mobile-phone track-button"
              data-button-id="button3"
              data-button-name="mobile header cta"
              href={CONTACT_PHONE_TEL}
              target="_blank"
            >
              <i className="bi bi-telephone-fill" />
              {CONTACT_PHONE_LABEL}
            </a>
          </li>
        </ul>
        <div className="mobile-submenu" id="submenuProjects">
          <div className="submenu-header">
            <button className="back-button">
              <svg
                className="lucide lucide-arrow-left"
                fill="none"
                height={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              <span>Projects</span>
            </button>
          </div>
          <ul className="projects-submenu-list">
            <li className="projects-dropdown-item">
              <span
                className="projects-dropdown-toggle active"
                data-dropdown="citiesDropdown"
              >
                Best Cities
                <svg
                  className="projects-chevron-down"
                  fill="none"
                  height={20}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
              <div
                className="projects-mobile-dropdown active"
                id="citiesDropdown"
              >
                <div className="projects-dropdown-grid">
                  <a href="/category/projects-in-noida">Noida</a>
                  <a href="/category/projects-in-gurgaon">Gurugram</a>
                  <a href="/category/projects-in-lucknow">Lucknow</a>
                  <a href="/category/projects-in-pune">Pune</a>
                  <a href="/category/projects-in-mumbai">Mumbai</a>
                  <a href="/category/projects-in-greater-noida">
                    Greater Noida
                  </a>
                  <a href="/category/projects-in-goa">Goa</a>
                </div>
              </div>
            </li>
            <li className="projects-dropdown-item">
              <span
                className="projects-dropdown-toggle active"
                data-dropdown="configurationDropdown"
              >
                Configuration
                <svg
                  className="projects-chevron-down"
                  fill="none"
                  height={20}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
              <div
                className="projects-mobile-dropdown active"
                id="configurationDropdown"
              >
                <div className="projects-dropdown-grid">
                  <a href="/category/residential-property">Residential</a>
                  <a href="/category/commercial-property">Commercial</a>
                  <a href="/category/studio-apartments">Studio Apartments</a>
                  <a href="/category/plots">Plots</a>
                </div>
              </div>
            </li>
            <li className="projects-view-all-item">
              <a
                className="projects-view-all-btn"
                href="/top-real-estate-poperty-consultant-in-india"
              >
                View All
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-submenu" id="submenuOthers">
          <div className="submenu-header">
            <button className="back-button">
              <svg
                className="lucide lucide-arrow-left"
                fill="none"
                height={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              <span>More Pages</span>
            </button>
          </div>
          <ul>
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/vision-and-mission">Vision</a>
            </li>
            <li>
              <a href="/awards">Awards</a>
            </li>
            <li>
              <a href="/associated-developers">Developers</a>
            </li>
            <li>
              <a href="/event">Event</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
