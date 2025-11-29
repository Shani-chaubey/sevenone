"use client";
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages, jsx-a11y/alt-text, react/no-unescaped-entities */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    id: 1,
    name: "Piryanshu Singh",
    role: "Property Consultation",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX98X2VfGKPPyv5CXlHDvWt8DrIO9UlQD8O84acVAVD0ErXZjr1kw=w45-h45-p-rp-mo-br100",
    text: "I had an excellent experience with Money Tree Realty. Their team is highly professional, transparent, and knowledgeable about both residential and commercial projects in Noida and Gurugram. From the very first interaction, they guided me with complete clarity, explained all investment options, and helped me choose the property that perfectly matched my needs.",
    rating: 5
  },
  {
    id: 2,
    name: "Khush Juneja",
    role: "Property Consultation",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLEoYrRvuCeP7n3w9Mil7t0cb2R8xwZDaAJshMVG9CqQZQ_7Q=w45-h45-p-rp-mo-br100",
    text: "MoneyTree is a very good property consulting company. It has a lot of very good projects of good developers you once visit here if you want to make any investment or for the personal use also.",
    rating: 5
  },
  {
    id: 3,
    name: "Aakash Chaudhary",
    role: "Property Consultation",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJKqkHaJI8iAuLlIEmiGh0Gt71cCpY_gozJjXhkhfzipPK1Wg=w45-h45-p-rp-mo-br100",
    text: "The best real estate company in all over India as per their customer satisfaction and explain each and every project in brief",
    rating: 5
  },
  {
    id: 4,
    name: "Paritosh Varakya",
    role: "Property Consultation",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVCb6jHVM22ZlWekhb8j9vJZe5YOgvDyFtAyuMVmy74pAhKcI0D=w45-h45-p-rp-mo-br100",
    text: "I highly recommend Money Tree Realty, a bestseller in the real estate sector. I recently purchased a property in M3M, and their support was exceptional throughout the entire process. They were always available to address any concerns or issues I had, providing top-notch assistance every step of the way. You can trust them blindly!",
    rating: 5
  },
  {
    id: 5,
    name: "Vansh Tadon",
    role: "Property Consultation",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKAZImi2b4euEvpuhUlQcwmnko-LnE9kuXERKk27a7FGtsGpQ=w180-h180-p-rp-mo-br100",
    text: "MoneyTree Realty is for sure a best option if anyone is thinking for investment in Real Estate. Everything happens here is transparent,trusworthy and specially the behaviour of employees here is so sweet they stand with you before buying the property,during the purchase and also after that if you face issues they handle it so smoothly.. Overall Fair deal at best price is what you get here..",
    rating: 5
  },
  {
    id: 6,
    name: "Anshuman Saini",
    role: "Property Consultation",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVxITxgAFOOrf8gZX5nVGIkMqbMpMcoAB38fYazWevENyboLJrd=w180-h180-p-rp-mo-br100",
    text: "I had a wonderful experience working with MoneyTree Realty for my real estate investment needs. They are truly experts in this field and guided me with complete professionalism and transparency. The team took the time to understand my requirements, explained the best investment opportunities available, and provided clear insights into the market.",
    rating: 5
  }
];

export default function TestimonialsCarousel() {
  return (
    <section className="testimonials-modern">
      <div className="testimonials-modern-container">
        <div className="testimonials-modern-header">
          <div className="testimonials-modern-title-wrapper">
            <span className="testimonials-modern-subtitle">Client Testimonials</span>
            <h2 className="testimonials-modern-title">
              Our <span className="testimonials-modern-title-accent">Customers</span> Think We're The Best
            </h2>
            <p className="testimonials-modern-description">
              Discover what our clients have to say about their experience with Money Tree Realty
            </p>
          </div>
        </div>

        <div className="testimonials-modern-swiper-wrapper">
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.testimonials-modern-nav-next',
              prevEl: '.testimonials-modern-nav-prev',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="testimonials-modern-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="testimonials-modern-slide">
                <div className="testimonials-modern-card">
                  <div className="testimonials-modern-card-glow"></div>
                  <div className="testimonials-modern-card-content">
                    <div className="testimonials-modern-card-header">
                      <div className="testimonials-modern-quote-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 21C3 17.4 5.4 15 9 15C12.6 15 15 17.4 15 21V21H3V21Z" fill="url(#quoteGradient1)" opacity="0.1"/>
                          <path d="M14.5 12C14.5 10.067 16.067 8.5 18 8.5C19.933 8.5 21.5 10.067 21.5 12C21.5 13.933 19.933 15.5 18 15.5C16.067 15.5 14.5 13.933 14.5 12Z" fill="url(#quoteGradient1)"/>
                          <path d="M2.5 12C2.5 10.067 4.067 8.5 6 8.5C7.933 8.5 9.5 10.067 9.5 12C9.5 13.933 7.933 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12Z" fill="url(#quoteGradient1)"/>
                          <defs>
                            <linearGradient id="quoteGradient1" x1="0" y1="0" x2="24" y2="24">
                              <stop offset="0%" stopColor="#ff9900" />
                              <stop offset="100%" stopColor="#ff6600" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="testimonials-modern-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGradient)"/>
                            <defs>
                              <linearGradient id="starGradient" x1="0" y1="0" x2="24" y2="24">
                                <stop offset="0%" stopColor="#ffd700" />
                                <stop offset="100%" stopColor="#ff9900" />
                              </linearGradient>
                            </defs>
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <p className="testimonials-modern-text">
                      {testimonial.text}
                    </p>
                    
                    <div className="testimonials-modern-footer">
                      <div className="testimonials-modern-avatar-wrapper">
                        <div className="testimonials-modern-avatar-border"></div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="testimonials-modern-avatar"
                        />
                        <div className="testimonials-modern-verified-badge">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="testimonials-modern-author">
                        <h4 className="testimonials-modern-author-name">{testimonial.name}</h4>
                        <p className="testimonials-modern-author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="testimonials-modern-navigation">
            <button className="testimonials-modern-nav-btn testimonials-modern-nav-prev" aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="testimonials-modern-nav-btn testimonials-modern-nav-next" aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
