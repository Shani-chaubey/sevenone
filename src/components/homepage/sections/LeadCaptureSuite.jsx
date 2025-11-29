"use client";
/* eslint-disable @next/next/no-img-element */

import { openLegacyForm } from "../utils/legacyActions";

export default function LeadCaptureSuite() {
  return (
    <>
      <div className="slide-in-form-notification" id="notification" />
      <div className="slide-in-form-backdrop" />
      <div className="slide-in-form-dialog">
        <div className="slide-in-form-heading-wrapper">
          <img
            alt="Moneytree Realty Logo"
            loading="lazy"
            src="/assets/img/logo.png"
          />
          <div>
            <p>Connect With Us</p>
            <p>Grow your Money with MoneyTree Realty</p>
          </div>
        </div>
        <button className="slide-in-form-close-btn" id="closeFormBtn">
          ×
        </button>
        <form id="propertyForm">
          <div className="slide-in-form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
          </div>
          <div className="slide-in-form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              placeholder="Please Enter Your Email"
              type="email"
            />
          </div>
          <div className="slide-in-form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              maxLength={10}
              minLength={10}
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Enter 10 digits"
              required
              type="tel"
            />
          </div>
          <div className="slide-in-form-group">
            <label htmlFor="property_type">Property Type:</label>
            <select id="property_type" name="property_type" required>
              <option value="">Select Type</option>
              <option value="STUDIO_APARTMENT">Studio Apartment</option>
              <option value="TWO_BHK">2 BHK</option>
              <option value="THREE_BHK">3 BHK</option>
              <option value="RETAIL_SHOP">Retail Shops</option>
              <option value="OTHER">Others</option>
            </select>
          </div>
          <div className="slide-in-form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Description about it"
              required
              rows={2}
              defaultValue=""
            />
          </div>
          <div className="slide-in-form-group flex-label">
            <input defaultChecked id="consentCheckbox" type="checkbox" />
            <label htmlFor="consentCheckbox">
              I agree to be contacted by MoneyTree Realty via RCS, SMS, or phone
              call.
            </label>
          </div>
          <div className="slide-in-form-button-group">
            <button className="slide-in-form-submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
