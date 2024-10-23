/* eslint-disable no-unused-vars */
import React from "react";
import "./headerC.css";
export default function HeaderC() {
  return (
    <div>
      <header id="header">
        <a href="/" className="logo">
          <use xlinkHref="#icon-carrd"></use>
        </a>
        <nav>
          <a href="#menu">
            <svg>
            Hilton
              <use xlinkHref="#icon-menu"></use>
            </svg>
          </a>
        </nav>
      </header>
    </div>
  );
}
