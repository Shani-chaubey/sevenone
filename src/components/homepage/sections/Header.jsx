"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import { useEffect, useState } from "react";
import { CONTACT_PHONE_LABEL, CONTACT_PHONE_TEL } from "../constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check initial scroll position
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Check on mount
    checkScroll();

    const handleScroll = () => {
      checkScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = document.getElementById("mainHeader");
    if (!header) return;

    const handleMouseMove = (e) => {
      const rect = header.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update cursor trail position
      const cursorTrail = header.querySelector("::after");
      if (cursorTrail) {
        header.style.setProperty("--cursor-x", `${x}px`);
        header.style.setProperty("--cursor-y", `${y}px`);
      }

      // Create ripple effect on click
      const createRipple = (x, y) => {
        const ripple = document.createElement("div");
        ripple.className = "header-ripple";
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        header.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      };

      header.addEventListener("click", (e) => {
        const rect = header.getBoundingClientRect();
        createRipple(e.clientX - rect.left, e.clientY - rect.top);
      });
    };

    header.addEventListener("mousemove", handleMouseMove);
    return () => {
      header.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`custom-header ${isScrolled ? "scrolled" : ""}`}
      id="mainHeader"
    >
      <div className="header-glow-effect" />
      <div className="floating-particles">
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
      </div>
      <div className="magnetic-border" />
      <div className="custom-logo">
        <a href="/" className="logo-wrapper">
          <div className="logo-glow" />
          <div className="logo-3d-effect" />
          <img
            alt="Best Real Estate Property Consultant in Delhi/NCR"
            src="/assets/img/logo.png"
            className="logo-image"
          />
        </a>
      </div>
      <nav className="custom-nav">
        <ul className="custom-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="custom-dropdown">
            <a href="/top-real-estate-poperty-consultant-in-india">Projects</a>
            <ul className="custom-submenu">
              <li>
                <a href="/top-real-estate-poperty-consultant-in-india">All</a>
              </li>
              <li>
                <a href="/category/residential-property">Residential</a>
                <ul className="custom-sub-submenu">
                  <li>
                    <a href="/category/residential-property-for-sale-noida">
                      Noida
                    </a>
                  </li>
                  <li>
                    <a href="/category/residential-property-for-sale-greater-noida">
                      Greater Noida
                    </a>
                  </li>
                  <li>
                    <a href="/category/residential-property-for-sale-gurgaon">
                      Gurugram
                    </a>
                  </li>
                  <li>
                    <a href="/category/residential-property-for-sale-mumbai">
                      Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="/category/residential-property-for-sale-pune">
                      Pune
                    </a>
                  </li>
                  <li>
                    <a href="/category/residential-property-for-sale-lucknow">
                      Lucknow
                    </a>
                  </li>
                  <li>
                    <a href="/category/residential-property-for-sale-goa">
                      Goa
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/category/commercial-property">Commercial</a>
                <ul className="custom-sub-submenu">
                  <li>
                    <a href="/category/commercial-property-for-sale-noida">
                      Noida
                    </a>
                  </li>
                  <li>
                    <a href="/category/commercial-property-for-sale-greater-noida">
                      Greater Noida
                    </a>
                  </li>
                  <li>
                    <a href="/category/commercial-property-for-sale-gurgaon">
                      Gurugram
                    </a>
                  </li>
                  <li>
                    <a href="/category/commercial-property-for-sale-mumbai">
                      Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="/category/commercial-property-for-sale-pune">
                      Pune
                    </a>
                  </li>
                  <li>
                    <a href="/category/commercial-property-for-sale-lucknow">
                      Lucknow
                    </a>
                  </li>
                  <li>
                    <a href="/category/commercial-property-for-sale-goa">Goa</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/category/studio-apartments">Studio Apartments</a>
                <ul className="custom-sub-submenu">
                  <li>
                    <a href="/category/studio-apartments-for-sale-noida">
                      Noida
                    </a>
                  </li>
                  <li>
                    <a href="/category/studio-apartments-for-sale-greater-noida">
                      Greater Noida
                    </a>
                  </li>
                  <li>
                    <a href="/category/studio-apartments-for-sale-gurgaon">
                      Gurugram
                    </a>
                  </li>
                  <li>
                    <a href="/category/studio-apartments-for-sale-mumbai">
                      Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="/category/studio-apartments-for-sale-pune">Pune</a>
                  </li>
                  <li>
                    <a href="/category/studio-apartments-for-sale-lucknow">
                      Lucknow
                    </a>
                  </li>
                  <li>
                    <a href="/category/studio-apartments-for-sale-goa">Goa</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/category/plots">Plots</a>
                <ul className="custom-sub-submenu">
                  <li>
                    <a href="/category/plots-for-sale-noida">Noida</a>
                  </li>
                  <li>
                    <a href="/category/plots-for-sale-greater-noida">
                      Greater Noida
                    </a>
                  </li>
                  <li>
                    <a href="/category/plots-for-sale-gurgaon">Gurugram</a>
                  </li>
                  <li>
                    <a href="/category/plots-for-sale-mumbai">Mumbai</a>
                  </li>
                  <li>
                    <a href="/category/plots-for-sale-pune">Pune</a>
                  </li>
                  <li>
                    <a href="/category/plots-for-sale-lucknow">Lucknow</a>
                  </li>
                  <li>
                    <a href="/category/plots-for-sale-goa">Goa</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="/csr">CSR</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
            <div className="blog-dropdown">
              <a href="/blog/lease-vs-buy-commercial-real-estate">
                <div className="blog-dropdown-blog">
                  <div className="blog-dropdown-text">
                    <p className="blog-dropdown-title">
                      Lease vs Buy Commercial Real Estate Investors
                    </p>
                    <p className="blog-dropdown-description">
                      Make smarter commercial real estate decisions with our
                      detailed lease vs buy analysis. Explore up...
                    </p>
                  </div>
                  <img
                    alt="Lease vs Buy Commercial Real Estate Investors"
                    className="blog-dropdown-image"
                    src="/blog/assets/lease-vs-buy-commercial-real-estate-banner.webp"
                  />
                </div>
              </a>
              <a href="/blog/affordable-housing-schemes-2025">
                <div className="blog-dropdown-blog">
                  <div className="blog-dropdown-text">
                    <p className="blog-dropdown-title">
                      Affordable Housing Schemes in India
                    </p>
                    <p className="blog-dropdown-description">
                      Turn your homeownership dream into reality with
                      India&apos;s best affordable housing schemes 2025. Unl...
                    </p>
                  </div>
                  <img
                    alt="Affordable Housing Schemes in India"
                    className="blog-dropdown-image"
                    src="/blog/assets/affordable-housing-schemes-2025-banner.webp"
                  />
                </div>
              </a>
              <a href="/blog/real-estate-trends-tier-2-cities">
                <div className="blog-dropdown-blog">
                  <div className="blog-dropdown-text">
                    <p className="blog-dropdown-title">
                      Tier-2 Cities Real Estate Trends in 2025
                    </p>
                    <p className="blog-dropdown-description">
                      Unlock India&apos;s next real estate goldmine with our
                      comprehensive guide to Tier-2 city investments....
                    </p>
                  </div>
                  <img
                    alt="Tier-2 Cities Real Estate Trends in 2025"
                    className="blog-dropdown-image"
                    src="/blog/assets/real-estate-trends-tier-2-cities-banner.webp"
                  />
                </div>
              </a>{" "}
            </div>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li className="custom-dropdown">
            <p>Others</p>
            <ul className="custom-submenu">
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="/vision-and-mission">Vision &amp; Mission</a>
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
              <li>
                <a href="/media">Testimonials</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="custom-actions">
        <div className="custom-search">
          <a
            className="custom-contact track-button"
            data-button-id="button1"
            data-button-name="desktop header cta"
            href={CONTACT_PHONE_TEL}
            target="_blank"
          >
            <i className="bi bi-telephone-fill" />
            {CONTACT_PHONE_LABEL}
          </a>
          <div className="mobile-hamburger" id="mobileHamburgerIcon">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}
