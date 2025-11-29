"use client";
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages, jsx-a11y/alt-text, react/no-unescaped-entities */

import { slideImageControl, toggleLinkColor } from "../utils/legacyActions";

export default function PropertiesGrid() {
  return (
    <div className="property-container">
      <p className="fakeTitle">
        Our <span className="bg-green">Projects</span>
      </p>
      <div className="properties-grid" id="propertiesGrid">
        <div
          className="new-property-card"
          style={{
            borderRadius: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            overflow: "hidden",
          }}
        >
          <a href="/propertydetail/m3m-jewel-crest-sector-97-noida">
            <div
              className="featured-property-images-slider"
              style={{ position: "relative" }}
            >
              <div
                className="images-wrapper"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                }}
              >
                <img
                  alt="Featured Property Image"
                  src="/assets/img/projectdetails/m3mjewelcrest1.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets/img/projectdetails/m3mjewelcrest2.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets/img/projectdetails/m3mjewelcrest3.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
              </div>
              <button
                className="slider-btn prev-btn"
                onClick={slideImageControl(0, -1)}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="slider-btn next-btn"
                onClick={slideImageControl(0, 1)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </a>
          <div style={{ padding: 24 }}>
            <a href="/propertydetail/m3m-jewel-crest-sector-97-noida">
              <div
                className="property-type-labels"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <span className="property-type-label">Residential </span>
              </div>
              <h3
                className="property-title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: "0.5rem",
                }}
              >
                M3M Jewel Crest{" "}
                <span
                  className="builder-label"
                  style={{
                    color: 'var(--color-text-muted)',
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    display: "block",
                    marginTop: 2,
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height={16}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    style={{ verticalAlign: "middle", marginRight: 5 }}
                    viewBox="0 0 24 24"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 22v-6.57" />
                    <path d="M12 11h.01" />
                    <path d="M12 7h.01" />
                    <path d="M14 15.43V22" />
                    <path d="M15 16a5 5 0 0 0-6 0" />
                    <path d="M16 11h.01" />
                    <path d="M16 7h.01" />
                    <path d="M8 11h.01" />
                    <path d="M8 7h.01" />
                    <rect height={20} rx={2} width={16} x={4} y={2} />
                  </svg>
                  M3M India Pvt. Ltd.{" "}
                </span>
              </h3>
              <span
                className="featured-property-price"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.95)",
                  color: 'var(--color-primary)',
                  padding: "0.25em 0em",
                  marginBottom: "0.75em",
                  borderRadius: "1em",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                ₹6 Cr onwards<span aria-hidden="true">*</span>
                <span
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  Terms &amp; conditions apply
                </span>
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                  fontSize: "0.98em",
                  fontWeight: 600,
                  borderRadius: "0.6em",
                  marginBottom: "0.75em",
                  color: 'var(--color-text-light)',
                }}
              >
                <svg
                  aria-hidden="true"
                  className="lucide lucide-map-pin-icon lucide-map-pin"
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span style={{ fontSize: "0.875rem", color: 'var(--color-text-muted)' }}>
                  Sector 97, Noida - 201303{" "}
                </span>
              </div>
            </a>
            <div className="action-row">
              <a href="/propertydetail/m3m-jewel-crest-sector-97-noida"></a>
              <a
                aria-label="Open M3M Jewel Crest details"
                className="action-btn view-details"
                href="/propertydetail/m3m-jewel-crest-sector-97-noida"
              >
                View Details
              </a>
              <button
                aria-label="Share"
                className="action-btn share-btn"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="icon-share"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="new-property-card"
          style={{
            borderRadius: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            overflow: "hidden",
          }}
        >
          <a href="/propertydetail/signature-global-twin-tower-dxp">
            <div
              className="featured-property-images-slider"
              style={{ position: "relative" }}
            >
              <div
                className="images-wrapper"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                }}
              >
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\twintowerdxp1.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\twintowerdxp2.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\twintowerdxp3.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
              </div>
              <button
                className="slider-btn prev-btn"
                onClick={slideImageControl(1, -1)}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="slider-btn next-btn"
                onClick={slideImageControl(1, 1)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </a>
          <div style={{ padding: 24 }}>
            <a href="/propertydetail/signature-global-twin-tower-dxp">
              <div
                className="property-type-labels"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <span className="property-type-label">Residential </span>
              </div>
              <h3
                className="property-title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: "0.5rem",
                }}
              >
                Signature Global Twin Tower DXP{" "}
                <span
                  className="builder-label"
                  style={{
                    color: 'var(--color-text-muted)',
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    display: "block",
                    marginTop: 2,
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height={16}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    style={{ verticalAlign: "middle", marginRight: 5 }}
                    viewBox="0 0 24 24"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 22v-6.57" />
                    <path d="M12 11h.01" />
                    <path d="M12 7h.01" />
                    <path d="M14 15.43V22" />
                    <path d="M15 16a5 5 0 0 0-6 0" />
                    <path d="M16 11h.01" />
                    <path d="M16 7h.01" />
                    <path d="M8 11h.01" />
                    <path d="M8 7h.01" />
                    <rect height={20} rx={2} width={16} x={4} y={2} />
                  </svg>
                  Signature Global{" "}
                </span>
              </h3>
              <span
                className="featured-property-price"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.95)",
                  color: 'var(--color-primary)',
                  padding: "0.25em 0em",
                  marginBottom: "0.75em",
                  borderRadius: "1em",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                On Request<span aria-hidden="true">*</span>
                <span
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  Terms &amp; conditions apply
                </span>
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                  fontSize: "0.98em",
                  fontWeight: 600,
                  borderRadius: "0.6em",
                  marginBottom: "0.75em",
                  color: 'var(--color-text-light)',
                }}
              >
                <svg
                  aria-hidden="true"
                  className="lucide lucide-map-pin-icon lucide-map-pin"
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span style={{ fontSize: "0.875rem", color: 'var(--color-text-muted)' }}>
                  Sector 84, Gurugram - 122004{" "}
                </span>
              </div>
            </a>
            <div className="action-row">
              <a href="/propertydetail/signature-global-twin-tower-dxp"></a>
              <a
                aria-label="Open Signature Global Twin Tower DXP details"
                className="action-btn view-details"
                href="/propertydetail/signature-global-twin-tower-dxp"
              >
                View Details
              </a>
              <button
                aria-label="Share"
                className="action-btn share-btn"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="icon-share"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="new-property-card"
          style={{
            borderRadius: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            overflow: "hidden",
          }}
        >
          <a href="/propertydetail/civitech-santoni-greater-noida">
            <div
              className="featured-property-images-slider"
              style={{ position: "relative" }}
            >
              <div
                className="images-wrapper"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                }}
              >
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\civitechsantoni1.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\civitechsantoni2.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\civitechsantoni3.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
              </div>
              <button
                className="slider-btn prev-btn"
                onClick={slideImageControl(2, -1)}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="slider-btn next-btn"
                onClick={slideImageControl(2, 1)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </a>
          <div style={{ padding: 24 }}>
            <a href="/propertydetail/civitech-santoni-greater-noida">
              <div
                className="property-type-labels"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <span className="property-type-label">Commercial </span>
                <span className="property-type-label">Studio Apartments </span>
              </div>
              <h3
                className="property-title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: "0.5rem",
                }}
              >
                Civitech Santoni Greater Noida West{" "}
                <span
                  className="builder-label"
                  style={{
                    color: 'var(--color-text-muted)',
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    display: "block",
                    marginTop: 2,
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height={16}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    style={{ verticalAlign: "middle", marginRight: 5 }}
                    viewBox="0 0 24 24"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 22v-6.57" />
                    <path d="M12 11h.01" />
                    <path d="M12 7h.01" />
                    <path d="M14 15.43V22" />
                    <path d="M15 16a5 5 0 0 0-6 0" />
                    <path d="M16 11h.01" />
                    <path d="M16 7h.01" />
                    <path d="M8 11h.01" />
                    <path d="M8 7h.01" />
                    <rect height={20} rx={2} width={16} x={4} y={2} />
                  </svg>
                  Civitech Developers{" "}
                </span>
              </h3>
              <span
                className="featured-property-price"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.95)",
                  color: 'var(--color-primary)',
                  padding: "0.25em 0em",
                  marginBottom: "0.75em",
                  borderRadius: "1em",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                On Request<span aria-hidden="true">*</span>
                <span
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  Terms &amp; conditions apply
                </span>
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                  fontSize: "0.98em",
                  fontWeight: 600,
                  borderRadius: "0.6em",
                  marginBottom: "0.75em",
                  color: 'var(--color-text-light)',
                }}
              >
                <svg
                  aria-hidden="true"
                  className="lucide lucide-map-pin-icon lucide-map-pin"
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span style={{ fontSize: "0.875rem", color: 'var(--color-text-muted)' }}>
                  Sector 16B, Greater Noida West - 201009{" "}
                </span>
              </div>
            </a>
            <div className="action-row">
              <a href="/propertydetail/civitech-santoni-greater-noida"></a>
              <a
                aria-label="Open Civitech Santoni Greater Noida West details"
                className="action-btn view-details"
                href="/propertydetail/civitech-santoni-greater-noida"
              >
                View Details
              </a>
              <button
                aria-label="Share"
                className="action-btn share-btn"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="icon-share"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="new-property-card"
          style={{
            borderRadius: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            overflow: "hidden",
          }}
        >
          <a href="/propertydetail/godrej-riverine-sector-44-noida">
            <div
              className="featured-property-images-slider"
              style={{ position: "relative" }}
            >
              <div
                className="images-wrapper"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                }}
              >
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\godrejriverine1.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\godrejriverine2.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\godrejriverine3.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
              </div>
              <button
                className="slider-btn prev-btn"
                onClick={slideImageControl(3, -1)}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="slider-btn next-btn"
                onClick={slideImageControl(3, 1)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </a>
          <div style={{ padding: 24 }}>
            <a href="/propertydetail/godrej-riverine-sector-44-noida">
              <div
                className="property-type-labels"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <span className="property-type-label">Residential </span>
              </div>
              <h3
                className="property-title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: "0.5rem",
                }}
              >
                Godrej Riverine Sector 44 Noida{" "}
                <span
                  className="builder-label"
                  style={{
                    color: 'var(--color-text-muted)',
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    display: "block",
                    marginTop: 2,
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height={16}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    style={{ verticalAlign: "middle", marginRight: 5 }}
                    viewBox="0 0 24 24"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 22v-6.57" />
                    <path d="M12 11h.01" />
                    <path d="M12 7h.01" />
                    <path d="M14 15.43V22" />
                    <path d="M15 16a5 5 0 0 0-6 0" />
                    <path d="M16 11h.01" />
                    <path d="M16 7h.01" />
                    <path d="M8 11h.01" />
                    <path d="M8 7h.01" />
                    <rect height={20} rx={2} width={16} x={4} y={2} />
                  </svg>
                  Godrej Properties{" "}
                </span>
              </h3>
              <span
                className="featured-property-price"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.95)",
                  color: 'var(--color-primary)',
                  padding: "0.25em 0em",
                  marginBottom: "0.75em",
                  borderRadius: "1em",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                ₹7.30 Cr+<span aria-hidden="true">*</span>
                <span
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  Terms &amp; conditions apply
                </span>
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                  fontSize: "0.98em",
                  fontWeight: 600,
                  borderRadius: "0.6em",
                  marginBottom: "0.75em",
                  color: 'var(--color-text-light)',
                }}
              >
                <svg
                  aria-hidden="true"
                  className="lucide lucide-map-pin-icon lucide-map-pin"
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span style={{ fontSize: "0.875rem", color: 'var(--color-text-muted)' }}>
                  Sector 44, Noida - 201301{" "}
                </span>
              </div>
            </a>
            <div className="action-row">
              <a href="/propertydetail/godrej-riverine-sector-44-noida"></a>
              <a
                aria-label="Open Godrej Riverine Sector 44 Noida details"
                className="action-btn view-details"
                href="/propertydetail/godrej-riverine-sector-44-noida"
              >
                View Details
              </a>
              <button
                aria-label="Share"
                className="action-btn share-btn"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="icon-share"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="new-property-card"
          style={{
            borderRadius: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            overflow: "hidden",
          }}
        >
          <a href="/propertydetail/mahindra-codename-greenlife">
            <div
              className="featured-property-images-slider"
              style={{ position: "relative" }}
            >
              <div
                className="images-wrapper"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                }}
              >
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\mahindracodenamegreenlife1.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\mahindracodenamegreenlife2.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\mahindracodenamegreenlife3.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
              </div>
              <button
                className="slider-btn prev-btn"
                onClick={slideImageControl(4, -1)}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="slider-btn next-btn"
                onClick={slideImageControl(4, 1)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </a>
          <div style={{ padding: 24 }}>
            <a href="/propertydetail/mahindra-codename-greenlife">
              <div
                className="property-type-labels"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <span className="property-type-label">Residential </span>
              </div>
              <h3
                className="property-title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: "0.5rem",
                }}
              >
                Mahindra Codename GreenLife{" "}
                <span
                  className="builder-label"
                  style={{
                    color: 'var(--color-text-muted)',
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    display: "block",
                    marginTop: 2,
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height={16}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    style={{ verticalAlign: "middle", marginRight: 5 }}
                    viewBox="0 0 24 24"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 22v-6.57" />
                    <path d="M12 11h.01" />
                    <path d="M12 7h.01" />
                    <path d="M14 15.43V22" />
                    <path d="M15 16a5 5 0 0 0-6 0" />
                    <path d="M16 11h.01" />
                    <path d="M16 7h.01" />
                    <path d="M8 11h.01" />
                    <path d="M8 7h.01" />
                    <rect height={20} rx={2} width={16} x={4} y={2} />
                  </svg>
                  Mahindra Lifespaces Developers{" "}
                </span>
              </h3>
              <span
                className="featured-property-price"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.95)",
                  color: 'var(--color-primary)',
                  padding: "0.25em 0em",
                  marginBottom: "0.75em",
                  borderRadius: "1em",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                ₹ 49.5 lac onwards<span aria-hidden="true">*</span>
                <span
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  Terms &amp; conditions apply
                </span>
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                  fontSize: "0.98em",
                  fontWeight: 600,
                  borderRadius: "0.6em",
                  marginBottom: "0.75em",
                  color: 'var(--color-text-light)',
                }}
              >
                <svg
                  aria-hidden="true"
                  className="lucide lucide-map-pin-icon lucide-map-pin"
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span style={{ fontSize: "0.875rem", color: 'var(--color-text-muted)' }}>
                  Kalyan, Rajnouli, Maharashtra - 421302{" "}
                </span>
              </div>
            </a>
            <div className="action-row">
              <a href="/propertydetail/mahindra-codename-greenlife"></a>
              <a
                aria-label="Open Mahindra Codename GreenLife details"
                className="action-btn view-details"
                href="/propertydetail/mahindra-codename-greenlife"
              >
                View Details
              </a>
              <button
                aria-label="Share"
                className="action-btn share-btn"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="icon-share"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="new-property-card"
          style={{
            borderRadius: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            overflow: "hidden",
          }}
        >
          <a href="/propertydetail/elan-the-presidential-sector-106-gurgaon">
            <div
              className="featured-property-images-slider"
              style={{ position: "relative" }}
            >
              <div
                className="images-wrapper"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                }}
              >
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\elanpresidential1.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\elanpresidential2.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
                <img
                  alt="Featured Property Image"
                  src="/assets\img\projectdetails\elanpresidential3.webp"
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    objectFit: "cover",
                    height: 250,
                  }}
                />
              </div>
              <button
                className="slider-btn prev-btn"
                onClick={slideImageControl(5, -1)}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="slider-btn next-btn"
                onClick={slideImageControl(5, 1)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </a>
          <div style={{ padding: 24 }}>
            <a href="/propertydetail/elan-the-presidential-sector-106-gurgaon">
              <div
                className="property-type-labels"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <span className="property-type-label">Residential </span>
              </div>
              <h3
                className="property-title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: "0.5rem",
                }}
              >
                Elan The Presidential{" "}
                <span
                  className="builder-label"
                  style={{
                    color: 'var(--color-text-muted)',
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    display: "block",
                    marginTop: 2,
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height={16}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    style={{ verticalAlign: "middle", marginRight: 5 }}
                    viewBox="0 0 24 24"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 22v-6.57" />
                    <path d="M12 11h.01" />
                    <path d="M12 7h.01" />
                    <path d="M14 15.43V22" />
                    <path d="M15 16a5 5 0 0 0-6 0" />
                    <path d="M16 11h.01" />
                    <path d="M16 7h.01" />
                    <path d="M8 11h.01" />
                    <path d="M8 7h.01" />
                    <rect height={20} rx={2} width={16} x={4} y={2} />
                  </svg>
                  Elan Group{" "}
                </span>
              </h3>
              <span
                className="featured-property-price"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.95)",
                  color: 'var(--color-primary)',
                  padding: "0.25em 0em",
                  marginBottom: "0.75em",
                  borderRadius: "1em",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                On Request<span aria-hidden="true">*</span>
                <span
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  Terms &amp; conditions apply
                </span>
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                  fontSize: "0.98em",
                  fontWeight: 600,
                  borderRadius: "0.6em",
                  marginBottom: "0.75em",
                  color: 'var(--color-text-light)',
                }}
              >
                <svg
                  aria-hidden="true"
                  className="lucide lucide-map-pin-icon lucide-map-pin"
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span style={{ fontSize: "0.875rem", color: 'var(--color-text-muted)' }}>
                  Sector 106, Gurugram - 122017{" "}
                </span>
              </div>
            </a>
            <div className="action-row">
              <a href="/propertydetail/elan-the-presidential-sector-106-gurgaon"></a>
              <a
                aria-label="Open Elan The Presidential details"
                className="action-btn view-details"
                href="/propertydetail/elan-the-presidential-sector-106-gurgaon"
              >
                View Details
              </a>
              <button
                aria-label="Share"
                className="action-btn share-btn"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="icon-share"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <a
          href="/top-real-estate-property-consultant-in-india"
          onMouseOut={toggleLinkColor("var(--color-primary)")}
          onMouseOver={toggleLinkColor("var(--color-text)")}
          style={{
            display: "inline-flex",
            width: "65%",
            alignItems: "center",
            gap: "0.5em",
            color: 'var(--color-primary)',
            fontWeight: 600,
            fontSize: "1.125rem",
            textDecoration: "none",
            transition: "color 0.3s",
            justifyContent: "center",
          }}
        >
          Explore more Premium Properties
          <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  );
}
