import React from "react";

function Buttons({ filterItems }) {
  return (
    <section className="button-container">
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("symbol");
        }}
      >
        Name
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("price");
        }}
      >
        Price
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("ranking");
        }}
      >
        Ranking
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("change");
        }}
      >
        Change
      </button>
    </section>
  );
}

export default Buttons;
