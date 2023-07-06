import React from "react";

export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <a href="https://hoongportfolio.netlify.app">
          <h1>HOONG</h1>
        </a>
        <nav id="nav">
          <ul>
            <li>
              <a href="#introSection2">ABOUT</a>
            </li>
            <li>
              <a href="#portSection3">WORK</a>
            </li>
            <li>
              <a href="#abilitySection1">ABILITY</a>
            </li>
            <li>
              <a href="#contactSection1">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
