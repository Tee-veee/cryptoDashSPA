import React from "react";
import Logo from "./Logo.svg";

function Header({ handleChange }) {
  return (
    <header className="main-header">
      <section className="header-content">
        <img src={Logo} alt="company-header-logo" className="header-img" />

        <input
          type="text"
          className="coin-input"
          aria-label="Search"
          onChange={handleChange}
        ></input>
      </section>
    </header>
  );
}

export default Header;
