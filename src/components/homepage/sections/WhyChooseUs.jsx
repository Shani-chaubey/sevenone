"use client";
/* eslint-disable @next/next/no-img-element */

export default function WhyChooseUs() {
  return (
    <div
      className="why-choose-section"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <h2 style={{ color: "var(--color-primary)" }}>
        Why Only MoneyTree Realty?
      </h2>
      <div className="card-wrapper">
        <div
          className="choose-card"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          <div className="image-wrapper">
            <img alt="Trust Moneytree" src="assets/img/home1/icon/trust.svg" />
          </div>
          <p className="title" style={{ color: "var(--color-primary)" }}>
            Why Trust MoneyTree Realty
          </p>
          <p className="description">
            MoneyTree Realty is the Best Real Estate Consultant in Delhi/NCR
            with a record number of sales, sustaining quality service with the
            help of our dedicated property consultants.
          </p>
        </div>
        <div
          className="choose-card"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          <div className="image-wrapper">
            <img
              alt="Customer oriented"
              src="assets/img/home1/icon/customer.svg"
            />
          </div>
          <p className="title" style={{ color: "var(--color-primary)" }}>
            Customer Oriented
          </p>
          <p className="description">
            Our client-centric approach ensures properties tailored to your
            unique style, budget, and preferences, making us the best real
            estate consultant in Delhi/NCR.
          </p>
        </div>
        <div
          className="choose-card"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          <div className="image-wrapper">
            <img alt="tech enabled" src="assets/img/home1/icon/tech.svg" />
          </div>
          <p className="title" style={{ color: "var(--color-primary)" }}>
            Tech Enabled
          </p>
          <p className="description">
            Discover your dream property with listings matching your lifestyle
            and budget, guided by the Best Real Estate Consultant in Delhi/NCR.
          </p>
        </div>
      </div>
    </div>
  );
}
