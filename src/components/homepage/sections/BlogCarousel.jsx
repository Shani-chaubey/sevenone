"use client";
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages, jsx-a11y/alt-text, react/no-unescaped-entities */

export default function BlogCarousel() {
  return (
    <div className="blog-carousel">
            <div className="container">
              <p className="fakeTitle">Latest <span className="bg-green">News</span></p>
              <div className="swiper blogSwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="blog/lease-vs-buy-commercial-real-estate">
                      <div className="blog-card">
                        <div className="blog-header">
                          <span className="blog-date">29 October 2025</span>
                          <span className="blog-writer">
                            Team MoneyTree
                          </span>
                        </div>
                        <h3 className="blog-title">Lease vs Buy Commercial Real Estate Investors</h3>
                        <div className="blog-image">
                          <img alt="Blog Image" loading="lazy" src="blog/assets/lease-vs-buy-commercial-real-estate-banner.webp" />
                        </div>
                        <p className="blog-description">Make smarter commercial real estate decisions with our detailed lease vs buy analysis. Explore upfront costs, ROI potential, tax advantages, flexibility factors, and strategic investment approaches tailored for Indian businesses and investors seeking optimal property solutions.                                      </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="blog/affordable-housing-schemes-2025">
                      <div className="blog-card">
                        <div className="blog-header">
                          <span className="blog-date">27 October 2025</span>
                          <span className="blog-writer">
                            Team MoneyTree
                          </span>
                        </div>
                        <h3 className="blog-title">Affordable Housing Schemes in India</h3>
                        <div className="blog-image">
                          <img alt="Blog Image" loading="lazy" src="blog/assets/affordable-housing-schemes-2025-banner.webp" />
                        </div>
                        <p className="blog-description">Turn your homeownership dream into reality with India's best affordable housing schemes 2025. Unlock PMAY benefits, CLSS subsidies, state-specific programs, eligibility details, and step-by-step application guidance to secure your ideal home with maximum financial assistance.                                      </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="blog/real-estate-trends-tier-2-cities">
                      <div className="blog-card">
                        <div className="blog-header">
                          <span className="blog-date">27 October 2025</span>
                          <span className="blog-writer">
                            Team MoneyTree
                          </span>
                        </div>
                        <h3 className="blog-title">Tier-2 Cities Real Estate Trends in 2025</h3>
                        <div className="blog-image">
                          <img alt="Blog Image" loading="lazy" src="blog/assets/real-estate-trends-tier-2-cities-banner.webp" />
                        </div>
                        <p className="blog-description">Unlock India's next real estate goldmine with our comprehensive guide to Tier-2 city investments. Explore Surat, Lucknow, Jaipur, Vadodara, and Nagpur—cities delivering exceptional ROI, affordable entry points, and booming infrastructure. Perfect timing for 2025 portfolio diversification.                                      </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="blog/future-proofing-real-estate-investments">
                      <div className="blog-card">
                        <div className="blog-header">
                          <span className="blog-date">27 October 2025</span>
                          <span className="blog-writer">
                            Team MoneyTree
                          </span>
                        </div>
                        <h3 className="blog-title">Future-Proofing Your Real Estate Investments 2025</h3>
                        <div className="blog-image">
                          <img alt="Blog Image" loading="lazy" src="blog/assets/future-proofing-real-estate-investments-banner.webp" />
                        </div>
                        <p className="blog-description">Master the art of resilient property investing with our comprehensive 2025 checklist. Discover sustainable development strategies, tech-driven insights, metro corridor opportunities, and proven risk mitigation techniques to build a future-ready portfolio in India's evolving real estate market.                                      </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="blog/noida-vs-pune-new-launches-luxury-apartments">
                      <div className="blog-card">
                        <div className="blog-header">
                          <span className="blog-date">25 October 2025</span>
                          <span className="blog-writer">
                            Team MoneyTree
                          </span>
                        </div>
                        <h3 className="blog-title">Noida vs. Pune: Comparing New Launches in Luxury Apartments</h3>
                        <div className="blog-image">
                          <img alt="Blog Image" loading="lazy" src="blog/assets/noida-vs-pune-new-launches-luxury-apartments-banner.webp" />
                        </div>
                        <p className="blog-description">Navigate your real estate journey between Noida and Pune's luxury apartment markets. Compare prices, connectivity, amenities, rental yields, and investment potential to make informed decisions for your dream home in India's top IT destinations this 2025.                                      </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="blog/commute-perks-m3m-jewel-crest-sector-97-noida">
                      <div className="blog-card">
                        <div className="blog-header">
                          <span className="blog-date">25 October 2025</span>
                          <span className="blog-writer">
                            Team MoneyTree
                          </span>
                        </div>
                        <h3 className="blog-title">Commute Perks of M3M Jewel Crest</h3>
                        <div className="blog-image">
                          <img alt="Blog Image" loading="lazy" src="blog/assets/commute-perks-m3m-jewel-crest-sector-97-noida-banner.webp" />
                        </div>
                        <p className="blog-description">Unlock seamless Delhi-Noida travel with M3M Jewel Crest's strategic Sector 97 location. Enjoy direct expressway access, upcoming metro proximity, eco-luxury living, and premium amenities designed for busy professionals seeking ultra-convenient urban connectivity.                                      </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="swiper-button-next">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.04 1.96a1 1 0 0 0-1.497 1.32l.083.094L10.253 8l-4.627 4.626a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.32.084l.094-.084 5.334-5.333a1 1 0 0 0 .083-1.32l-.083-.094L7.04 1.96Z" fillRule="evenodd" />
                  </svg>
                </div>
                <div className="swiper-button-prev">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.96 1.96a1 1 0 0 1 1.497 1.32l-.083.094L5.747 8l4.627 4.626a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.084l-.094-.084-5.334-5.333a1 1 0 0 1-.083-1.32l.083-.094L8.96 1.96Z" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
  );
}
