"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { openLegacyForm } from "../utils/legacyActions";

export default function LeadCaptureSuite() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    const handleCloseForm = () => {
      setIsOpen(false);
      document.body.style.overflow = "";
    };

    // Set up window.openForm function
    if (typeof window !== "undefined") {
      window.openForm = handleOpenForm;
      window.closeForm = handleCloseForm;
    }

    // ESC key handler
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleCloseForm();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    // Ensure React form submission takes precedence
    const form = document.getElementById("propertyForm");
    if (form && form.hasAttribute("data-react-form")) {
      // Form is handled by React, legacy JS should not interfere
      const originalSubmit = form.onsubmit;
      form.onsubmit = null; // Clear any inline onsubmit handlers

      return () => {
        if (originalSubmit) {
          form.onsubmit = originalSubmit;
        }
      };
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
    if (typeof window !== "undefined" && window.closeForm) {
      window.closeForm();
    }
  };

  const showNotification = (message, type = "success") => {
    const notification = document.getElementById("notification");
    if (notification) {
      notification.textContent = message;
      notification.className = `lead-capture-modern-notification ${type}`;
      notification.style.display = "block";
      setTimeout(() => {
        notification.style.display = "none";
      }, 5000);
    }
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    if (e && e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }

    if (isSubmitting) {
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const propertyType = formData.get("property_type");
    const consent = formData.get("consentCheckbox") === "on";

    if (!name || !phone || !propertyType) {
      showNotification("Please fill in all required fields", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: email || "",
          phone,
          propertyType,
          consent,
        }),
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setIsOpen(false); // Close the form first
        setTimeout(() => {
          setShowThankYou(true);
        }, 300); // Small delay for smooth transition
      } else {
        showNotification(
          data.error || "Something went wrong. Please try again.",
          "error"
        );
      }
    } catch (error) {
      showNotification("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    handleClose();
  };

  return (
    <>
      <div className="lead-capture-modern-notification" id="notification" />

      {/* Thank You Popup */}
      {showThankYou && (
        <>
          <div
            className="lead-capture-modern-backdrop active"
            onClick={handleCloseThankYou}
            style={{ zIndex: 10000 }}
          />
          <div className="lead-capture-thankyou-dialog active">
            <div className="lead-capture-thankyou-content">
              <div className="lead-capture-thankyou-icon">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="lead-capture-thankyou-title">Thank You!</h2>
              <p className="lead-capture-thankyou-message">
                We&apos;ve received your inquiry. Our team will contact you
                shortly.
              </p>
              <button
                onClick={handleCloseThankYou}
                className="lead-capture-thankyou-button"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      <div
        className={`lead-capture-modern-backdrop ${isOpen ? "active" : ""}`}
        onClick={handleClose}
      />
      <div className={`lead-capture-modern-dialog ${isOpen ? "active" : ""}`}>
        <div className="lead-capture-modern-header">
          <div className="lead-capture-modern-logo-wrapper">
            <img
              alt="9 Square Yard Logo"
              loading="lazy"
              src="/assets/img/logo.png"
              className="lead-capture-modern-logo"
            />
          </div>
          <div className="lead-capture-modern-header-text">
            <h2 className="lead-capture-modern-title">Connect With Us</h2>
            <p className="lead-capture-modern-subtitle">
              Grow your Money with 9 Square Yard
            </p>
          </div>
        </div>
        <button
          className="lead-capture-modern-close-btn"
          id="closeFormBtn"
          onClick={handleClose}
          aria-label="Close form"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <form
          id="propertyForm"
          className="lead-capture-modern-form"
          onSubmit={handleSubmit}
          data-react-form="true"
        >
          <div className="lead-capture-modern-group">
            <label htmlFor="name" className="lead-capture-modern-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              type="text"
              className="lead-capture-modern-input"
            />
          </div>
          <div className="lead-capture-modern-group">
            <label htmlFor="email" className="lead-capture-modern-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email address"
              type="email"
              className="lead-capture-modern-input"
            />
          </div>
          <div className="lead-capture-modern-group">
            <label htmlFor="phone" className="lead-capture-modern-label">
              Phone
            </label>
            <input
              id="phone"
              maxLength={10}
              minLength={10}
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Enter 10 digit mobile number"
              required
              type="tel"
              className="lead-capture-modern-input"
            />
          </div>
          <div className="lead-capture-modern-group">
            <label
              htmlFor="property_type"
              className="lead-capture-modern-label"
            >
              Property Type
            </label>
            <select
              id="property_type"
              name="property_type"
              required
              className="lead-capture-modern-select"
            >
              <option value="">Select Property Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              {/* <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
              <option value="RETAIL SHOP">Retail Shops</option>
              <option value="STUDIO APARTMENT">Studio Apartment</option>
              <option value="OFFICE SPACE">Office Space</option>
              <option value="OTHER">Others</option> */}
            </select>
          </div>

          <div className="lead-capture-modern-group lead-capture-modern-checkbox-group">
            <input
              defaultChecked
              id="consentCheckbox"
              type="checkbox"
              className="lead-capture-modern-checkbox"
            />
            <label
              htmlFor="consentCheckbox"
              className="lead-capture-modern-checkbox-label"
            >
              I agree to be contacted by 9 Square Yard via RCS, SMS, or phone
              call.
            </label>
          </div>
          <div className="lead-capture-modern-button-group">
            <button
              className="lead-capture-modern-submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>Submitting...</span>
                  <svg
                    className="lead-capture-spinner"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="31.416"
                      strokeDashoffset="31.416"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        dur="2s"
                        values="0 31.416;15.708 15.708;0 31.416;0 31.416"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-dashoffset"
                        dur="2s"
                        values="0;-15.708;-31.416;-31.416"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </>
              ) : (
                <>
                  <span>Submit</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
