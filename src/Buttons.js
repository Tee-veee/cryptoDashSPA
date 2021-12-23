import React from "react";

// BUTTON COMPONENT WITH FILTERITEM FUNCTION PASSED AS PROPS
// EACH BUTTON PASSES A DIFFERENT PARAM
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
