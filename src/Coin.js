import React, { useState, useRef, useEffect } from "react";
import {
  FaChevronRight,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";

function Coin({ coins }) {
  const [isActive, setActive] = useState("");
  const [currentHeight, setCurrentHeight] = useState("0px");

  const accordionRef = useRef(null);

  const checkActive = (id) => {
    if (isActive === id) {
      setActive("");
      return;
    }
    setActive(id);
  };

  useEffect(() => {
    setCurrentHeight(isActive === "" ? "0px" : `240px`);
  }, [isActive]);

  return (
    <section className="coin-container">
      <div className="coin-content">
        <ul className="coin-list">
          {coins.map((coin) => {
            const {
              id,
              image,
              symbol,
              current_price,
              market_cap_rank,
              price_change_percentage_24h,
              high_24h,
              low_24h,
              price_change_24h,
            } = coin;
            return (
              <li key={id} className="coin-row">
                <div
                  className={`coin-row-title ${
                    isActive === id ? "active" : ""
                  }`}
                  index={id}
                  onClick={() => {
                    checkActive(id);
                  }}
                >
                  <div className="coin-img-div">
                    <img src={image} alt="" className="coin-img" />
                    <p className="coin-title">{symbol}</p>
                  </div>
                  <p className="coin-price">${current_price}</p>
                  <p className="coin-marketcap">#{market_cap_rank}</p>
                  <p className="coin-price-change">
                    {price_change_percentage_24h}%
                  </p>
                  <div className="coin-icon-div">
                    <FaChevronRight className="accordion-chevron" />
                  </div>
                </div>
                <div
                  className="coin-row-accordion"
                  ref={accordionRef}
                  style={
                    isActive === id
                      ? { maxHeight: `${currentHeight}` }
                      : { maxHeight: "0px" }
                  }
                >
                  <div className="card-accordion-container">
                    <div className="coin-low">
                      <FaLongArrowAltDown />
                      <h4>24H Low</h4>
                      <h3>${low_24h}</h3>
                    </div>
                    <div className="coin-change">
                      <h4>Price Change 24H</h4>
                      <h3>${price_change_24h.toFixed(2)}</h3>
                    </div>
                    <div className="coin-high">
                      <FaLongArrowAltUp />
                      <h4>24H High</h4>
                      <h3>${high_24h}</h3>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Coin;
