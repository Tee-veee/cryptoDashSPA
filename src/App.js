import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Coin from "./Coin";
import Header from "./Header";
import axios from "axios";
import "./App.css";

function App() {
  const [allCoins, setAllCoins] = useState([]);
  const [coinsList, setCoinsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((result) => {
        setAllCoins(result.data);
        setCoinsList(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setCoinsList(allCoins);
      return;
    }
    const searchArr = [];

    allCoins.forEach((coin) => {
      if (coin.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        searchArr.push(coin);
      }
    });

    setCoinsList(searchArr);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterItems = (type) => {
    switch (type) {
      case "symbol":
        const symbolArr = [...coinsList];
        symbolArr.sort((a, b) => {
          let firstA = a.symbol.toLowerCase();
          let firstB = b.symbol.toLowerCase();

          if (firstA < firstB) {
            return -1;
          }

          if (firstA > firstB) {
            return 1;
          }
          return 0;
        });
        setCoinsList(symbolArr);
        break;
      case "price":
        const priceArr = [...coinsList];
        priceArr.sort((a, b) => {
          return b.current_price - a.current_price;
        });
        setCoinsList(priceArr);
        break;
      case "ranking":
        const rankArr = [...coinsList];
        rankArr.sort((a, b) => {
          return a.market_cap_rank - b.market_cap_rank;
        });
        setCoinsList(rankArr);
        break;
      case "change":
        const changeArr = [...coinsList];
        changeArr.sort((a, b) => {
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        });
        setCoinsList(changeArr);
        break;
      default:
        return;
    }
  };

  return (
    <main className="main-container">
      <Header handleChange={handleChange} />
      <Buttons filterItems={filterItems} />
      <Coin coins={coinsList} />
    </main>
  );
}

export default App;
