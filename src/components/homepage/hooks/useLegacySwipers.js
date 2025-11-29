"use client";

import { useEffect } from "react";
import "swiper/css/bundle";

const swiperConfigs = [
  {
    selector: ".locationSwiper",
    options: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".locationSwiper .swiper-button-next",
        prevEl: ".locationSwiper .swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    },
  },
  {
    selector: ".teamSwiper",
    options: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".team-carousel .swiper-button-next",
        prevEl: ".team-carousel .swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 10 },
        968: { slidesPerView: 4, spaceBetween: 10 },
        1400: { slidesPerView: 5, spaceBetween: 10 },
      },
    },
  },
  {
    selector: ".blogSwiper",
    options: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".blog-carousel .swiper-button-next",
        prevEl: ".blog-carousel .swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    },
  },
];

const createSwiperInstances = async () => {
  const { default: Swiper } = await import("swiper/bundle");
  return swiperConfigs
    .map(({ selector, options }) => {
      const target = document.querySelector(selector);
      if (!target || target?.swiper) return null;
      return new Swiper(selector, options);
    })
    .filter(Boolean);
};

export default function useLegacySwipers() {
  useEffect(() => {
    let instances = [];
    let cancelled = false;

    createSwiperInstances().then((created) => {
      if (!cancelled) {
        instances = created;
      } else {
        created.forEach((instance) => instance?.destroy(true, true));
      }
    });

    return () => {
      cancelled = true;
      instances.forEach((instance) => instance?.destroy(true, true));
    };
  }, []);
}
