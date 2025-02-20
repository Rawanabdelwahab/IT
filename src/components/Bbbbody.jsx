/* eslint-disable no-unused-vars */
import React from "react";
import site1 from "../images/site-1.jpg";
import site2 from "../images/site-2.jpg";
import site3 from "../images/site-3.jpg";
import site4 from "../images/site-4.jpg";
import site5 from "../images/site-5.jpg";
import Body2 from "./Body2";
import "./bbbbody.css";
export default function Bbbbody() {
  return (
    <div>
      <body
        id="website"
        className="index is-nonTouch"
        data-action="index"
        data-browser="chrome"
        data-os="windows"
      >
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol id="icon-menu" viewBox="0 0 456 552">
            <path d="M24,264h408v24H24V264z M24,120v24h408v-24H24z M24,432h408v-24H24V432z"></path>
          </symbol>
          <symbol id="icon-cancel" viewBox="0 0 467 552">
            <path d="M250.4,276L440,465.5l-17,17L233.5,293L44,482.5l-17-17L216.5,276L27,86.5l17-17L233.5,259L423,69.5l17,17L250.4,276z"></path>
          </symbol>
          <symbol id="icon-carrd-light" viewBox="0 0 480 552">
            <path d="M446.1,83.3c-1.2-0.7-2.6-0.8-3.9-0.2l-130.7,62.7L37.7,14.4c-1.2-0.6-2.7-0.5-3.9,0.2c-1.2,0.7-1.9,2-1.9,3.4v324.5 c0,1.6,1,3.1,2.5,3.7l143.8,60.2c0.5,0.2,1,0.3,1.5,0.3c0,0,0,0,0,0v129.3c0,1.4,0.7,2.7,1.9,3.4c0.6,0.4,1.4,0.6,2.1,0.6 c0.6,0,1.2-0.1,1.7-0.4l260.1-124.8c1.4-0.7,2.3-2.1,2.3-3.6V86.6C448,85.3,447.3,84,446.1,83.3z M40,339.8V24.4l262.3,125.8 l-78.2,37.5c-0.4-0.6-0.9-1.1-1.6-1.4l-122.4-55.7c-2-0.9-4.4,0-5.3,2c-0.9,2,0,4.4,2,5.3l118.6,54l-33.3,16 c-1.4,0.7-2.3,2.1-2.3,3.6v26.2l-80-32.2c-2.1-0.8-4.4,0.2-5.2,2.2c-0.8,2,0.2,4.4,2.2,5.2l83,33.4v66.3l-80-32.2 c-2.1-0.8-4.4,0.2-5.2,2.2c-0.8,2,0.2,4.4,2.2,5.2l83,33.4v77.2L40,339.8z M440,408.6l-252.1,121V318.3c0,0,0,0,0,0v-74.9 c0,0,0,0,0,0V214L440,93V408.6z M242.7,273.3c-1-2-0.1-4.4,1.9-5.3l135.3-65.4c2-1,4.4-0.1,5.3,1.9c1,2,0.1,4.4-1.9,5.3L248,275.2 c-0.6,0.3-1.2,0.4-1.7,0.4C244.8,275.6,243.3,274.8,242.7,273.3z M242.7,348.2c-1-2-0.1-4.4,1.9-5.3l135.3-65.4 c2-1,4.4-0.1,5.3,1.9c1,2,0.1,4.4-1.9,5.3L248,350.1c-0.6,0.3-1.2,0.4-1.7,0.4C244.8,350.5,243.3,349.6,242.7,348.2z M242.7,423.1 c-1-2-0.1-4.4,1.9-5.3l135.3-65.4c2-1,4.4-0.1,5.3,1.9c1,2,0.1,4.4-1.9,5.3L248,425c-0.6,0.3-1.2,0.4-1.7,0.4 C244.8,425.4,243.3,424.5,242.7,423.1z"></path>
          </symbol>
          <symbol id="icon-carrd" viewBox="0 0 480 552">
            <path d="M450.4,76.5c-3.5-2.2-7.9-2.4-11.6-0.7l-127.3,61L41.2,7.2c-3.7-1.8-8.1-1.5-11.6,0.7C26.1,10,24,13.9,24,18v324.5 c0,4.8,2.9,9.2,7.4,11.1l140.5,58.8v123.6c0,4.1,2.1,8,5.6,10.2c1.9,1.2,4.2,1.8,6.4,1.8c1.8,0,3.5-0.4,5.2-1.2l260.1-124.8 c4.2-2,6.8-6.2,6.8-10.8V86.6C456,82.5,453.9,78.7,450.4,76.5z M48,334.5V37.1l235.8,113.1l-59.1,28.4l-121.3-55.2 c-6-2.7-13.1-0.1-15.9,6c-2.7,6-0.1,13.1,6,15.9l103.1,46.9l-17.8,8.6c-4.2,2-6.8,6.2-6.8,10.8v14.3l-69-27.8 c-6.1-2.5-13.1,0.5-15.6,6.7c-2.5,6.1,0.5,13.1,6.7,15.6l77.9,31.4v49l-69-27.8c-6.1-2.5-13.1,0.5-15.6,6.7 c-2.5,6.1,0.5,13.1,6.7,15.6l77.9,31.4v59.8L48,334.5z M432,403.6L195.9,516.9V318.2c0,0,0,0,0-0.1v-74.8c0,0,0,0,0-0.1V219 L432,105.7V403.6z M235.5,276.8c-2.9-6-0.4-13.1,5.6-16l135.3-65.4c6-2.9,13.1-0.4,16,5.6c2.9,6,0.4,13.1-5.6,16l-135.3,65.4 c-1.7,0.8-3.5,1.2-5.2,1.2C241.8,283.6,237.5,281.1,235.5,276.8z M235.5,351.7c-2.9-6-0.4-13.1,5.6-16l135.3-65.4 c6-2.9,13.1-0.4,16,5.6c2.9,6,0.4,13.1-5.6,16l-135.3,65.4c-1.7,0.8-3.5,1.2-5.2,1.2C241.8,358.5,237.5,356,235.5,351.7z M235.5,426.6c-2.9-6-0.4-13.1,5.6-16l135.3-65.4c6-2.9,13.1-0.4,16,5.6c2.9,6,0.4,13.1-5.6,16l-135.3,65.4 c-1.7,0.8-3.5,1.2-5.2,1.2C241.8,433.4,237.5,430.9,235.5,426.6z"></path>
          </symbol>
          <symbol id="icon-lock" viewBox="0 0 408 552">
            <path d="M333.9,192c-1-25.8-6.6-85.6-37.4-116.5c-40.6-40.6-144.3-40.6-185,0C80.7,106.4,75,166.2,74.1,192H24v288h359.1l0.9-288 H333.9z M128.5,92.5C143,78,171.9,69,204,69s61,9,75.5,23.5c24.4,24.4,29.4,76.3,30.4,99.5H98.1C99.2,164.5,105.7,115.2,128.5,92.5z M359.2,456H48V216h26.2h259.6H360L359.2,456z"></path>
          </symbol>
          <symbol id="icon-crosshair" viewBox="0 0 456 552">
            <path d="M24,72v408h407.8L432,72H24z M48,456V288h168v168H48z M240,456V288h167.9l-0.1,168H240z M408,96l-0.1,168H240V96h-24v168 H48V96h47.4H216h24H408L408,96L408,96z M408,96L408,96 M408,96H240 M216,96H95.4 M240,96h-24"></path>
          </symbol>
          <symbol id="icon-expand" viewBox="0 0 456 552">
            <path d="M432,72v122.3h-24V113L266.5,254.5l-17-17L391,96h-81.3V72H432z M189.5,297.5L48,439v-81.3H24V480h122.3v-24H65 l141.5-141.5L189.5,297.5z"></path>
          </symbol>
          <symbol id="icon-delete" viewBox="0 0 432 552">
            <path d="M228,444h-24V204h24V444z M156,204h-24v240h24V204z M300,204h-24v240h24V204z M408,180h-24.9l-24,312H72.9l-24-312H24V96 h132V36h114v60h138V180z M180,96h66V60h-66V96z M48,156h336v-36H270H156H48V156z M359,180H73l22.2,288h241.8L359,180z"></path>
          </symbol>
          <symbol id="icon-redo" viewBox="0 0 456 552">
            <path d="M295.6,161h94.3c-3.7-4.5-7.7-8.9-11.9-13c-74.5-74.5-195.6-74.5-270,0c-36.4,36.4-56.1,84.5-56,135h0 c0,3.8,0.1,7.5,0.3,11.2c0,0.4,0.1,0.8,0.1,1.2c0.1,1.2,0.2,2.5,0.3,3.7c0.3,3.6,0.7,7.3,1.2,10.9l0,0c4.3,30.5,15.7,59,33.3,83.7 l0.1,0c6.1,8.6,13.1,16.8,20.6,24.4c3,3,6.2,6,9.4,8.8c0.5,0.5,1.1,0.9,1.6,1.4c0.4,0.4,0.9,0.7,1.3,1.1c1.2,1,2.4,2,3.6,3 c0,0,0,0,0,0c1.5,1.2,3,2.3,4.5,3.5l0,0C161.3,460.6,201.1,474,243,474c51,0,99-19.9,135-55.9l17,17c-40.6,40.6-94.6,63-152,63 c-57.4,0-111.4-22.4-152-63c-8.5-8.5-16.3-17.7-23.2-27.4l0,0c-6.1-8.6-11.6-17.6-16.4-26.9c-15.5-30.4-23.4-63.3-23.4-97.6h0 c0-22.5,3.5-45,10.4-66.4C49,184.2,66.7,155.4,91,131.1c40.6-40.6,94.6-63,152-63c57.4,0,111.4,22.4,152,63 c4.5,4.5,8.9,9.3,13,14.2V48.7h24V185H295.6V161z"></path>
          </symbol>
          <symbol id="icon-transfer" viewBox="0 0 456 552">
            <path d="M386.1,174H24v-24h362.1l-57.5-57.5l17-17l86.5,86.5l-86.5,86.5l-17-17L386.1,174z M127.4,320.5l-17-17L23.9,390l86.5,86.5 l17-17L69.9,402H432v-24H69.9L127.4,320.5z"></path>
          </symbol>
          <symbol id="icon-sort" viewBox="0 0 456 552">
            <path d="M114,71.9l86.5,86.5l-17,17L126,117.9V480h-24V117.9l-57.5,57.5l-17-17L114,71.9z M411.5,376.6L354,434.1V72h-24v362.1 l-57.5-57.5l-17,17l86.5,86.5l86.5-86.5L411.5,376.6z"></path>
          </symbol>
          <symbol id="icon-crop-free" viewBox="0 0 552 552">
            <path d="M540.1,443.5l-0.1-24l-95.8,0.5V108h-312L132,12l-24,0l0.1,96L12,108l0,24l96.2,0v312h312l0.1,96l24,0l-0.1-96L540.1,443.5 z M132.2,132.1L132.2,132.1L132.2,132.1l288,0v288h-288V132.1z"></path>
          </symbol>
          <symbol id="icon-crop-fixed" viewBox="0 0 552 552">
            <path d="M540.1,443.5l-0.1-24l-95.8,0.5V132l95.9,0l0-24l-96.1,0l0.1-96l-24,0l-0.1,96.1H132.1L132,12l-24,0l0.1,96L12,108l0,24 l96.2,0V420l-96.1-0.5l-0.1,24l95.9,0.5l-0.1,96l24,0l0.1-96h288.3l0.1,96l24,0l-0.1-96L540.1,443.5z M132.2,132.1L132.2,132.1 L132.2,132.1l287.7,0v0l0.3,0v288h-288V132.1z"></path>
          </symbol>
          <symbol id="icon-crop-off" viewBox="0 0 552 552">
            <path d="M539.9,419.5l-95.8,0.5V124.9L548.5,20.5l-17-17L427,108H132.1L132,12l-24,0l0.1,96L12,108l0,24l96.2,0v295L3.6,531.6 l17,17L125.1,444h295.1l0.1,96l24,0l-0.1-96l95.9-0.5L539.9,419.5z M132.2,132.1L132.2,132.1L132.2,132.1l270.9,0L132.2,403V132.1z M420.2,148.9V420H149.1L420.2,148.9z"></path>
          </symbol>
          <symbol id="icon-adjustments" viewBox="0 0 552 552">
            <path d="M432,150v24h-96v72h-36v-72H24v-24h276V78h36v72H432z M156,306h-36v72H24v24h96v72h36v-72h276v-24H156V306z"></path>
          </symbol>
          <symbol id="icon-effects" viewBox="0 0 552 552">
            <path d="M180,336l-36.8-119.2L24,180l119.2-36.8L180,24l36.8,119.2L336,180l-119.2,36.8L180,336z M445.5,262.5L420,180l-25.5,82.5 L312,288l82.5,25.5L420,396l25.5-82.5L528,288L445.5,262.5z M252,372l-18.4,59.6L174,450l59.6,18.4L252,528l18.4-59.6L330,450 l-59.6-18.4L252,372z"></path>
          </symbol>
        </svg>
        <header id="header">
          <a href="/" className="logo">
            <svg>
              <use href="#icon-carrd"></use>
            </svg>
            <span className="label">
              {" "}
              Hilton&apos;s IT Team Drives Innovation.
            </span>
          </a>
          {/* <nav>
            <a href="#menu">
              <svg>
                <use href="#icon-menu"></use>
              </svg>
              <span className="label">Menu</span>
            </a>
          </nav> */}
        </header>
        <section id="menu" tabIndex="-1">
          <div className="inner">
            <ul>
              <li>
                <a href="/login">
                  <h2>Log In</h2>
                  <p>Log in to an existing account</p>
                </a>
              </li>
              <li>
                <a href="/signup">
                  <h2>Sign Up</h2>
                  <p>Create a free Carrd account</p>
                </a>
              </li>
              <li>
                <a href="/docs">
                  <h2>Documentation</h2>
                  <p>Get answers and instructions</p>
                </a>
              </li>
              <li>
                <a href="/docs/general/changelog">
                  <h2>Changelog</h2>
                  <p>Learn what&apos;s new (and changed)</p>
                </a>
              </li>
              <li>
                <a href="/pro">
                  <h2>Go Pro!</h2>
                  <p>Upgrade your Carrd experience</p>
                </a>
              </li>
              <li>
                <a href="/contact">
                  <h2>Contact</h2>
                  <p>Send your questions and comments</p>
                </a>
              </li>
            </ul>
          </div>
          <nav>
            <a href="#menu">
              <svg>
                <use href="#icon-cancel"></use>
              </svg>
              <span className="label">Close</span>
            </a>
          </nav>
        </section>
        <div className="inner ">
          <section id="intro">
            <div className="content">
              <svg>
                <use href="#icon-carrd-light"></use>
              </svg>
              <h1>Egypt IT Team&apos;s Structure.</h1>
              <h1> Hilton&apos;s IT Team Drives Innovation.</h1>
              {/* <p>
                Simple, free, fully responsive one-page sites for pretty much
                anything.
              </p>
              <ul className="actions stacked">
                <li>
                  <a href="/build" className="button special wide">
                    Choose a Starting Point
                  </a>
                </li>
                <li>
                  <a href="/login" className="button wide">
                    Log In
                  </a>
                </li>
              </ul> */}
            </div>
          </section>
          <section id="about" className="style1">
            {/* <header>
              <h2>
                Build one-page sites for
                <br /> pretty much anything
              </h2>
              <p>
                Whether it&apos;s a personal profile, a landing page to capture
                emails,
                <br /> or something a bit more elaborate, Carrd has you covered.
                <br /> Simple, responsive, and yup — totally free.
              </p>
            </header> */}
            <div className="carousel active paused">
              <div className="reel">
                <a
                  href="https://johnsmith-demo.carrd.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="John Smith Demo Site Screenshot" src={site1} />
                </a>

                {/* <a href="https://caycepollard-demo.carrd.co" target="_blank">
                  <img alt="" src={site2} />
                </a>
                <a href="https://janeanderson-demo.carrd.co" target="_blank">
                  <img alt="" src={site3} />
                </a>
                <a href="https://randomapp-demo.carrd.co" target="_blank">
                  <img alt="" src={site4} />
                </a>
                <a href="https://showcase-demo.carrd.co" target="_blank">
                  <img alt="" src={site5} />
                </a>
                <a href="https://johnsmith-demo.carrd.co" target="_blank">
                  <img alt="" src={site1} />
                </a>
                <a href="https://caycepollard-demo.carrd.co" target="_blank">
                  <img alt="" src={site2} />
                </a>
                <a href="https://janeanderson-demo.carrd.co" target="_blank">
                  <img alt="" src={site3} />
                </a>
                <a href="https://randomapp-demo.carrd.co" target="_blank">
                  <img alt="" src={site4} />
                </a>
                <a href="https://showcase-demo.carrd.co" target="_blank">
                  <img alt="" src={site5} />
                </a> */}
              </div>
            </div>
          </section>
          <section id="highlights" className="style1">
            <section>
              <div className="pic">
                <div className="highlight simple">
                  <div className="templates">
                    <div className="template n1"></div>
                    <div className="template n2"></div>
                    <div className="template n3"></div>
                    <div className="template n4"></div>
                  </div>
                </div>
              </div>
              {/* <div className="content">
                <h2>Simple</h2>
                <p>
                  Start with one of <a href="/build">dozens of templates</a> (or
                  a blank page) and make it your own.
                </p>
              </div> */}
            </section>
            <section>
              <div className="pic">
                <div className="highlight responsive">
                  <div className="phone">
                    <div className="screen">
                      <div className="image"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="content">
                <h2>Responsive</h2>
                <p>
                  Look great at every screen size right out of the box, from
                  phones to tablets to desktops.
                </p>
              </div> */}
            </section>
            <Body2 />
           
            <section>
              <div className="pic">
                <div className="highlight free active played">
                  <div className="site n1"></div>
                  <div className="site n2"></div>
                  <div className="site n3"></div>
                </div>
              </div>
              <div className="content">
                <h2>Free</h2>
                <p>
                  Build up to three sites per account and use all of
                  Carrd&apos;s core features – for free!
                </p>
              </div>
            </section>
          </section>
          <section id="pro" className="style1">
            {/* <header>
              <h2>Optional: Go Pro!</h2>
              <p>
                Upgrade your Carrd experience! Go Pro from just{" "}
                <strong>$19 / year</strong> (yup, per <em>year</em>)<br /> and
                get access to Pro-exclusive features like:
              </p>
            </header> */}
            {/* <div className="content">
              <ul className="pro-features">
                <li>
                  <h3>Custom Domains</h3>
                  <p>
                    Publish sites to any custom domains you own with full SSL
                    support (via{" "}
                    <a href="https://letsencrypt.org" target="_blank">
                      Let&apos;s Encrypt
                    </a>
                    ).
                  </p>
                </li>
                <li>
                  <h3>More Sites</h3>
                  <p>
                    Build and publish more than three sites from a single Carrd
                    account.
                  </p>
                </li>
                <li>
                  <h3>Forms</h3>
                  <p>
                    Add contact, signup (using{" "}
                    <a
                      href="https://www.activecampaign.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ActiveCampaign
                    </a>
                    ,{" "}
                    <a
                      href="https://www.beehiiv.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Beehiiv
                    </a>
                    ,{" "}
                    <a
                      href="https://www.br/evo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      br/evo
                    </a>
                    ,{" "}
                    <a
                      href="https://buttondown.email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buttondown
                    </a>
                    ,{" "}
                    <a
                      href="https://convertkit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ConvertKit
                    </a>
                    ,{" "}
                    <a
                      href="https://emailoctopus.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      EmailOctopus
                    </a>
                    ,{" "}
                    <a
                      href="https://www.getresponse.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GetResponse
                    </a>
                    ,{" "}
                    <a
                      href="https://hubspot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HubSpot
                    </a>
                    ,{" "}
                    <a
                      href="https://klaviyo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Klaviyo
                    </a>
                    ,{" "}
                    <a
                      href="https://mailchimp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mailchimp
                    </a>
                    ,{" "}
                    <a
                      href="https://www.mailerlite.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MailerLite
                    </a>
                    ,{" "}
                    <a
                      href="https://sendfox.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SendFox
                    </a>
                    ,{" "}
                    <a
                      href="https://sendgrid.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SendGrid
                    </a>
                    , and{" "}
                    <a
                      href="https://sendy.co"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sendy
                    </a>
                    ), custom, and payment-enabled forms.
                  </p>
                </li>
                <li>
                  <h3>Widgets + Embeds</h3>
                  <p>
                    Embed your own custom code and widgets from third-party
                    services like{" "}
                    <a href="https://stripe.com" target="_blank">
                      Stripe
                    </a>
                    ,{" "}
                    <a href="https://paypal.com" target="_blank">
                      PayPal
                    </a>
                    ,{" "}
                    <a href="https://gumroad.com" target="_blank">
                      Gumroad
                    </a>
                    ,{" "}
                    <a href="https://www.typeform.com" target="_blank">
                      Typeform
                    </a>
                    , and more.
                  </p>
                </li>
                <li>
                  <h3>Google Analytics</h3>
                  <p>
                    Add an optional{" "}
                    <a href="http://www.google.com/analytics" target="_blank">
                      Google Analytics
                    </a>{" "}
                    tracking ID to each of your sites to track and report
                    traffic.
                  </p>
                </li>
                <li>
                  <h3>No br/anding</h3>
                  <p>
                    Publish sites without the &quot;Made with Carrd&quot;
                    br/anding in the footer.
                  </p>
                </li>
              </ul>
              <div className="pro-cta">
                <p>
                  <strong>Try it free for 7 days</strong>. PayPal and all major
                  credit and debit cards accepted.
                </p>
                <ul className="actions special stacked">
                  <li>
                    <a href="/pro" className="button wide">
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </section>
          {/* <section id="cta" className="style2">
            <h2>Sound good?</h2>
            <p>Click below to get started. No signup required.</p>
            <ul className="actions stacked">
              <li>
                <a href="/build" className="button special wide">
                  Choose a Starting Point
                </a>
              </li>
            </ul>
          </section> */}
        </div>
        {/* <footer id="footer">
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <p className="copyright">© Carrd Inc. All rights reserved.</p>
        </footer> */}
        <script src="/assets/bundle.js?v=1725676882"></script>
        <script src="/assets/website/bundle.js?v=1725676882"></script>
        <script></script>
      </body>
    </div>
  );
}
