"use client";

const sanitizePhone = (value) => value.replace(/[\s-]/g, "");

export const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91-9732 300 007";
export const CONTACT_PHONE_TEL = `tel:${sanitizePhone(CONTACT_PHONE)}`;
export const CONTACT_PHONE_LABEL =
  process.env.NEXT_PUBLIC_CONTACT_PHONE_LABEL ?? CONTACT_PHONE;

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "customercare@moneytreerealty.com";
export const CONTACT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+919732300007";
export const WHATSAPP_LINK = `https://wa.me/${sanitizePhone(WHATSAPP_NUMBER)}`;
