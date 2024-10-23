/* eslint-disable no-unused-vars */
import React from "react";
import "./inner.css";
import asr from "../images/asr-prayer-mosque.png";
export default function Inner() {
  return (
    <section id="about" className="style1">
      <header>
        <h2>Build one-page sites for</h2>
        <p>
          Whether it&apos;s a personal profile, a landing page to capture emails
          or something a bit more elaborate, Carrd has you covered
        </p>
      </header>
      <div className="carousel active">
        <div className="reel">
          <a href="https://johnsmith-demo.carrd.co" target="_blank">
            <img alt="" src={asr}></img>
          </a>

        </div>
      </div>
    </section>
  );
}
