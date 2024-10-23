/* eslint-disable no-unused-vars */
import React from "react";
import "./section.css"
export default function Section() {
  return (
    <div>
      <section id="menu" tabIndex="-1" className="">
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
              <use xlinkHref="#icon-cancel"></use>
            </svg>
            <span className="label">Close</span>
          </a>
        </nav>
      </section>
    </div>
  );
}
