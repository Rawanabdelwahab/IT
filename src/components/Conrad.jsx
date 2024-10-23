/* eslint-disable no-unused-vars */
import React from "react";
import site1 from "../images/site-1.jpg";
import site2 from "../images/site-2.jpg";
import site3 from "../images/site-3.jpg";
import site4 from "../images/site-4.jpg";
import site5 from "../images/site-5.jpg";
import Header from "./Header.jsx";
import Body2 from "./Body2.jsx";
import Card1 from "./Card1.jsx";
import Stack from "@mui/material/Stack";
import template from "../images/template-3.jpg";
import "./bbbbody.css";
import Footer from "./Footer.jsx";
export default function Conrad() {
  return (
    <div>
      <Header />
      <body
        id="website"
        className="index is-nonTouch"
        data-action="index"
        data-browser="chrome"
        data-os="windows"
      >
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
            </section>
            <Stack
              direction="row"
              justifyContent={"space-around"}
              spacing={2}
              style={{ marginTop: "50px" }}
            >
              <Card1
                name="Yasser Abdel Samei "
                email="yasser.samei@conradhotels.com"
                src={template}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent={"space-around"}
              spacing={2}
              style={{ marginTop: "50px" }}
            >
              <Card1
                name="Ahmed Abouelea "
                email="Ahmed.Abouelela@ConradHotels.com"
                src={template}
              />
              <Card1
                name="Sameh Salah  "
                email="Sameh.Salah@conradhotels.com"
                src={template}
              />
              <Card1
                name="Tamer Salah "
                email="Tamer.Salah@ConradHotels.com"
                src={template}
              />
            </Stack>
          </section>
          <section id="pro" className="style1"></section>
        </div>

        <script src="/assets/bundle.js?v=1725676882"></script>
        <script src="/assets/website/bundle.js?v=1725676882"></script>
        <script></script>
      </body>
      <Footer/>
    </div>
  );
}
