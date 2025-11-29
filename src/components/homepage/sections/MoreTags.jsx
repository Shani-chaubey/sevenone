"use client";
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages, jsx-a11y/alt-text, react/no-unescaped-entities */

import { toggleLinkColor } from "../utils/legacyActions";

export default function MoreTags() {
  return (
    <>
      <section className="more-tags">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .hidden {\n            display: none;\n        }\n    ",
          }}
        />
        <div className="more-tags-wrapper">
          <h2>Property in India</h2>
          <ul className="property-list">
            <li>
              <a href="/property-in-noida">Property in Noida</a>
            </li>
            <li>
              <a href="/property-in-gurgaon">Property in Gurgaon</a>
            </li>
            <li>
              <a href="/search?search=goa">Property in Goa</a>
            </li>
            <li className="hidden">
              <a href="/search?search=mumbai">Property in Mumbai</a>
            </li>
            <li className="hidden">
              <a href="/search?search=ayodhya">Property in Ayodhya</a>
            </li>
            <li className="hidden">
              <a href="/search?search=alibaug">Property in Alibaug</a>
            </li>
          </ul>
          <button className="toggle-btn">Read more</button>
        </div>
        <div className="more-tags-wrapper">
          <h2>Real Estate in India</h2>
          <ul className="property-list">
            <li>
              <a href="/index">Real Estate in Noida</a>
            </li>
            <li>
              <a href="/index">Real Estate in Gurgaon</a>
            </li>
            <li>
              <a href="/index">Real Estate in Goa</a>
            </li>
            <li className="hidden">
              <a href="/index">Real Estate in Mumbai</a>
            </li>
            <li className="hidden">
              <a href="/index">Real Estate in Ayodhya</a>
            </li>
            <li className="hidden">
              <a href="/index">Real Estate in Alibaug</a>
            </li>
          </ul>
          <button className="toggle-btn">Read more</button>
        </div>
        <div className="more-tags-wrapper">
          <h2>Flats in Noida</h2>
          <ul className="property-list">
            <li>
              <a href="/flats-for-sale-in-noida">Flats in Noida</a>
            </li>
            <li>
              <a href="/flats-for-sale-in-gurgaon">Flats in Gurgaon</a>
            </li>
            <li>
              <a href="/index">Flats in Goa</a>
            </li>
            <li className="hidden">
              <a href="/category/residential-property-for-sale-mumbai">
                Flats in Mumbai
              </a>
            </li>
            <li className="hidden">
              <a href="/index">Flats in Ayodhya</a>
            </li>
            <li className="hidden">
              <a href="/index">Flats in Alibaug</a>
            </li>
          </ul>
          <button className="toggle-btn">Read more</button>
        </div>
        <div className="bigger-tag more-tags-wrapper">
          <h2>Real Estate Developers in India</h2>
          <ul className="property-list">
            <li>
              <a href="/real-estate-developers/ace-group">Ace Group</a>
            </li>
            <li>
              <a href="/real-estate-developers/ametek-buildtech">
                Ametek Buildtech
              </a>
            </li>
            <li>
              <a href="/real-estate-developers/au-real-estate">
                AU Real Estate
              </a>
            </li>
            <li>
              <a href="/real-estate-developers/axis-ecorp">Axis Ecorp</a>
            </li>
            <li>
              <a href="/real-estate-developers/devika-group">Devika Group</a>
            </li>
            <li>
              <a href="/real-estate-developers/elan-group">Elan Group</a>
            </li>
            <li>
              <a href="/real-estate-developers/godrej-properties">
                Godrej Properties
              </a>
            </li>
            <li>
              <a href="/real-estate-developers/krisumi-corporation">
                Krisumi Corporation
              </a>
            </li>
            <li>
              <a href="/real-estate-developers/l-t-realty">L&amp;T Realty</a>
            </li>
            <li>
              <a href="/real-estate-developers/m3m-group">M3M Group</a>
            </li>
            <li>
              <a href="/real-estate-developers/mahindra-lifespaces-developers">
                Mahindra Lifespace Developers
              </a>
            </li>
            <li>
              <a href="/real-estate-developers/paras-buildtech">
                Paras Buildtech
              </a>
            </li>
            <li>
              <a href="/real-estate-developers/piramal-realty">
                Piramal Realty
              </a>
            </li>
            <li>
              <a href="/real-estate-developers/sarvottam-group">
                Sarvottam Group
              </a>
            </li>
          </ul>
          <button className="toggle-btn">Read more</button>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .more-tags {\n        margin-top: 2rem;\n        min-height: 22rem;\n\n        display: flex;\n        justify-content: center;\n        justify-items: center;\n        gap: 16px;\n        width: 91vw;\n        margin-inline: auto;\n        padding-bottom: 4rem;\n    }\n\n    @media (width < 1000px) {\n        .more-tags {\n            flex-direction: column;\n            align-items: center;\n        }\n    }\n\n    .more-tags div {\n        display: flex;\n        flex-direction: column;\n        width: 230px;\n    }\n\n    .more-tags div:last-child {\n        width: auto;\n    }\n\n    @media (width < 900px) {\n        .more-tags div:last-child {\n            justify-content: center;\n        }\n\n        .more-tags div {\n            align-items: center;\n        }\n    }\n\n    .more-tags ul {\n        list-style-type: none;\n        text-align: left;\n        margin: 0;\n        padding: 0;\n    }\n\n    .more-tags h2 {\n        text-transform: capitalize;\n        color: #FF9900;\n        position: relative;\n        margin-bottom: 34px;\n        margin-left: 0;\n        display: flex;\n        align-items: center;\n        font-size: 20px;\n\n    }\n\n    .more-tags h2::after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: -14px;\n        left: 0;\n        height: 2px;\n        width: 100%;\n        background: #e2dede;\n\n    }\n\n    .more-tags li {\n        font-size: 14px;\n        color: #5e5d5d;\n    }\n\n    .more-tags button {\n        background-color: #FF9900;\n        color: white;\n        text-decoration: none;\n        border-radius: 5px;\n        position: relative;\n\n        font-weight: 500;\n        height: 50px;\n        width: 110px;\n        overflow: hidden;\n        margin-top: 1rem;\n\n\n    }\n\n    @media (width<900px) {\n        .more-tags button {\n            margin-top: 20px;\n        }\n    }\n\n    .more-tags button::before {\n        content: '';\n        display: block;\n        position: absolute;\n        width: 100%;\n        border-radius: 5px;\n        height: 100%;\n        background: linear-gradient(164deg, white, transparent 40%);\n        top: 0;\n        left: 0;\n        opacity: 0;\n        transition: opacity 150ms ease-in-out;\n\n\n    }\n\n    .more-tags button:hover::before {\n        opacity: 0.4;\n    }\n\n    div.bigger-tag {\n        width: auto;\n    }\n\n    @media (width < 1000px) {\n        div.bigger-tag {\n            width: 14rem;\n        }\n    }\n\n    .more-tags a {\n        background: linear-gradient(90deg, #FF9900, #FF9900, #FF9900);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n",
        }}
      />
    </>
  );
}
