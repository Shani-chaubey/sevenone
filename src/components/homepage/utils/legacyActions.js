"use client";

export const callLegacyFunction = (fnName, ...args) => {
  if (typeof window === "undefined") return;
  const legacyFn = window[fnName];
  if (typeof legacyFn === "function") {
    legacyFn(...args);
  }
};

export const handleHeroFormSubmit = (event) => {
  event.preventDefault();
  callLegacyFunction("handleFormSubmit", event);
};

export const handleHeroInput = (event) => {
  callLegacyFunction("fetchSuggestions", event.target.value);
};

export const handleHeroKeyNavigation = (event) => {
  callLegacyFunction("handleKeyNavigation", event);
};

export const slideImageControl = (index, direction) => (event) => {
  event.preventDefault();
  callLegacyFunction("slideImages", index, direction);
};

export const toggleLinkColor = (color) => (event) => {
  event.currentTarget.style.color = color;
};

export const openLegacyForm = () => {
  callLegacyFunction("openForm");
};
