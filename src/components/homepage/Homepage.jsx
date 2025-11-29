"use client";

import useLegacySwipers from "./hooks/useLegacySwipers";
import SocialLinks from "./sections/SocialLinks";
import Header from "./sections/Header";
import MobileMenu from "./sections/MobileMenu";
import SearchOverlay from "./sections/SearchOverlay";
import InlineLegacyStyles from "./sections/InlineLegacyStyles";
import LeadCaptureSuite from "./sections/LeadCaptureSuite";
import HeroSection from "./sections/HeroSection";
import FeaturedPropertiesCarousel from "./sections/FeaturedPropertiesCarousel";
import HeadingSection from "./sections/HeadingSection";
import PropertiesGrid from "./sections/PropertiesGrid";
import WhyChooseUs from "./sections/WhyChooseUs";
import TestimonialsCarousel from "./sections/TestimonialsCarousel";
import Footer from "./sections/Footer";

export default function Homepage() {
  useLegacySwipers();

  return (
    <div>
      <SocialLinks />
      <Header />
      <MobileMenu />
      <SearchOverlay />
      <InlineLegacyStyles />
      <LeadCaptureSuite />
      <HeroSection />
      <FeaturedPropertiesCarousel />
      <HeadingSection />
      <PropertiesGrid />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
}
