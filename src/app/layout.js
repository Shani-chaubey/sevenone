import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "9 Square Yard",
  description:
    "Experience a modern real-estate landing page built with reusable Next.js components and immersive UI details.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/img/favicon_io/favicon.ico"
          sizes="20x20"
          type="image/x-icon"
        />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastProvider />
        <Script
          strategy="afterInteractive"
          src="https://code.jquery.com/jquery-3.6.0.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="/assets/js/index-page-demo.js"
        />
      </body>
    </html>
  );
}
