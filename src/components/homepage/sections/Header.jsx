"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import { useEffect, useState } from "react";
import { CONTACT_PHONE_LABEL, CONTACT_PHONE_TEL } from "../constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header
      className={`header-modern ${isScrolled ? "header-modern-scrolled" : ""}`}
      id="mainHeader"
    >
      <div className="header-modern-backdrop"></div>
      <div className="header-modern-container">
        <div className="header-modern-logo">
          <a href="/" className="header-modern-logo-link">
            <div className="header-modern-logo-glow"></div>
            <img
              alt="Best Real Estate Property Consultant in Delhi/NCR"
              src="/assets/img/logo.png"
              className="header-modern-logo-image"
            />
          </a>
        </div>

        <nav className="header-modern-nav">
          <ul className="header-modern-menu">
            <li>
              <a href="/" className="header-modern-link">
                Home
              </a>
            </li>
            <li>
              <a href="/our-service" className="header-modern-link">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="header-modern-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/about-us" className="header-modern-link">
                About Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-modern-actions">
          <a
            href={CONTACT_PHONE_TEL}
            className="header-modern-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="header-modern-cta-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>{CONTACT_PHONE_LABEL}</span>
          </a>
          <button
            className="header-modern-hamburger"
            id="mobileHamburgerIcon"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
