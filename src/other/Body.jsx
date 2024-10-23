/* eslint-disable no-unused-vars */
import React from "react";
import "./body.css";
export default function Body() {
  return (
    <div>
      <section className="o-section o-section--feature v--borderless comp-promos">
        <div className="o-content-container">
          <header className="u-text--center">
            <h2 className="u-margin-top--flush u-margin-bottom--flush">
            Hilton&apos;s IT team drives innovation.
            </h2>
          </header>
        </div>
        <div className="o-content-container v--news-container u-padding-bottom--x-large u-padding-top--small">
          <div className="o-block-grid v--four u-margin-top--x-large u-hide-on-mobile v--centered-on-tablet">
            <a className="c-promo  v--flush v--border">
              <div className="c-promo__content">
                <figure className="c-promo__media">
                  <img
                    alt="A picture of two women clapping at a conference next to a Dreamforce logo."
                    loading="lazy"
                    className="lazyload"
                    src="https://a.slack-edge.com/b37cac3/marketing/img/promos/promo-card-dreamforce-2023.png"
                  ></img>
                </figure>
                <header className="c-promo__copy">
                  <span className="c-promo__subheading">Event</span>
                  <h3 className="c-promo__heading">
                    Ready for the future of AI in Slack?
                  </h3>
                </header>
              </div>

              <div className="c-promo__ctas" aria-hidden="true">
                <span className="c-promo__cta">
                  <span>Read more</span>
                </span>
              </div>
            </a>
            {/* ************************** */}
            <a className="c-promo  v--flush v--border">
              <div className="c-promo__content">
                <figure className="c-promo__media">
                  <img
                    alt="A picture of a group of people smiling at a conference next to a World Tour New York logo."
                    loading="lazy"
                    className="lazyload"
                    src="https://a.slack-edge.com/6b9d9e8/marketing/img/promos/wtny-resource-tile.jpg"
                  ></img>
                </figure>
                <header className="c-promo__copy">
                  <span className="c-promo__subheading">On-demand</span>
                  <h3 className="c-promo__heading">
                    Big things are launching. Relive the highlights of World
                    Tour New York!
                  </h3>
                </header>
              </div>
              <div className="c-promo__ctas" aria-hidden="true">
                <span className="c-promo__cta">
                  <span>Read more</span>
                </span>
              </div>
            </a>
            <a className="c-promo  v--flush v--border">
              <div className="c-promo__content">
                <figure className="c-promo__media">
                  <img
                    alt="An illustration of a human hand and robot hand putting puzzle pieces together."
                    loading="lazy"
                    className="lazyload"
                    src="https://a.slack-edge.com/426ed86/marketing/img/promos/promo-open-ai.jpg"
                  ></img>
                </figure>
                <header className="c-promo__copy">
                  <span className="c-promo__subheading">Customer Story</span>
                  <h3 className="c-promo__heading">
                    How OpenAI Expands ChatGPT with Slack
                  </h3>
                </header>
              </div>
              <div className="c-promo__ctas" aria-hidden="true">
                <span className="c-promo__cta">
                  <span>Read more</span>
                </span>
              </div>
            </a>
            <a className="c-promo  v--flush v--border">
              <div
                className="c-promo__content"
                role="region"
                aria-label="Webinar, Top Slack Tips to Boost Productivity , Read more"
              >
                <figure className="c-promo__media">
                  <img
                    alt="An illustration of numbers 2, 1, and 0 hanging on a wall."
                    loading="lazy"
                    className="lazyload"
                    src="https://a.slack-edge.com/426ed86/marketing/img/promos/promo-boost-productivity.jpg"
                  ></img>
                </figure>
                <header className="c-promo__copy">
                  <span className="c-promo__subheading">Webinar</span>
                  <h3 className="c-promo__heading">
                    Top Slack Tips to Boost Productivity
                  </h3>
                </header>
              </div>
              <div className="c-promo__ctas" aria-hidden="true">
                <span className="c-promo__cta">
                  <span>Read more</span>
                </span>
              </div>
            </a>
          </div>
          <div
            className="c-promos--mobile swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
            data-js-swiper="promos"
          >
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </section>
    </div>
  );
}
