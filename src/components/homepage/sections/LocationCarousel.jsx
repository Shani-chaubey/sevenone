"use client";
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages, jsx-a11y/alt-text, react/no-unescaped-entities */

export default function LocationCarousel() {
  return (
    <div className="full-width-bg">
            <div className="property-carousel">
              <p className="fakeTitle">Explore Our <span className="bg-green">Locations</span></p>
              <div className="swiper-container locationSwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="/search?search=noida">
                      <div className="location-card">
                        <div className="location-image">
                          <img alt="Noida" loading="lazy" src="assets/img/home1/noida-city.jpg" />
                          <div className="overlay">
                            <h3>Noida</h3>
                            <p>9 Projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/search?search=goa">
                      <div className="location-card">
                        <div className="location-image">
                          <img alt="Goa" loading="lazy" src="assets/img/home1/goa-city.jpg" />
                          <div className="overlay">
                            <h3>Goa</h3>
                            <p>4 Projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/search?search=gurugram">
                      <div className="location-card">
                        <div className="location-image">
                          <img alt="Gurugram" loading="lazy" src="assets/img/home1/gurugram-city.jpg" />
                          <div className="overlay">
                            <h3>Gurugram</h3>
                            <p>11 Projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/search?search=mumbai">
                      <div className="location-card">
                        <div className="location-image">
                          <img alt="Mumbai" loading="lazy" src="assets/img/home1/mumbai-city.jpg" />
                          <div className="overlay">
                            <h3>Mumbai</h3>
                            <p>4 Projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/search?search=ayodhya">
                      <div className="location-card">
                        <div className="location-image">
                          <img alt="Ayodhya" loading="lazy" src="assets/img/home1/ayodhya-city.png" />
                          <div className="overlay">
                            <h3>Ayodhya</h3>
                            <p>3 Projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/search?search=alibaug">
                      <div className="location-card">
                        <div className="location-image">
                          <img alt="Alibaug" loading="lazy" src="assets/img/home1/alibaug-city.webp" />
                          <div className="overlay">
                            <h3>Alibaug</h3>
                            <p>3 Projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/search?search=ghaziabad">
                      <div className="location-card">
                        <div className="location-image">
                          <img alt="Ghaziabad" loading="lazy" src="assets/img/home1/ghaziabad-city.png" />
                          <div className="overlay">
                            <h3>Ghaziabad</h3>
                            <p>3 Projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="swiper-button-prev">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.96 1.96a1 1 0 0 1 1.497 1.32l-.083.094L5.747 8l4.627 4.626a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.084l-.094-.084-5.334-5.333a1 1 0 0 1-.083-1.32l.083-.094L8.96 1.96Z" fillRule="evenodd">
                    </path>
                  </svg>
                </div>
                <div className="swiper-button-next">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.04 1.96a1 1 0 0 0-1.497 1.32l.083.094L10.253 8l-4.627 4.626a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.32.084l.094-.084 5.334-5.333a1 1 0 0 0 .083-1.32l-.083-.094L7.04 1.96Z" fillRule="evenodd">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
  );
}
