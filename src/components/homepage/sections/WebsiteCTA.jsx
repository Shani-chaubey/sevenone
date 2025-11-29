"use client";
/* eslint-disable @next/next/no-img-element */

import { openLegacyForm } from "../utils/legacyActions";
import { CONTACT_PHONE_TEL } from "../constants";

export default function WebsiteCTA() {
  return (
    <>
      <div className="website_cta">
        <div className="cta_desktop toggleFormBtn" onClick={openLegacyForm}>
          <img
            alt="desktop cta image"
            loading="lazy"
            src="/assets/img/desktop_cta.webp"
          />
        </div>
        <a className="cta_mobile" href={CONTACT_PHONE_TEL}>
          <img
            alt="mobile cta image"
            loading="lazy"
            src="/assets/img/mobile_cta.webp"
          />
        </a>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .website_cta {
        padding-block: 4rem 1rem;
        cursor: pointer;
    }

    .website_cta img {
        width: 100%;
    }

    .cta_desktop {
        display: block;
    }

    .cta_mobile {
        display: none;
    }

    @media (width < 800px) {
        .cta_desktop {
            display: none;
        }

        .cta_mobile {
            display: block;
        }
    }
`,
        }}
      />
    </>
  );
}
