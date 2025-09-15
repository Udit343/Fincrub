import React, { useState, useEffect } from "react";
import axios from "axios";

const BuySell = ({ token, fetchPortfolio }) => {
  const [symbol, setSymbol] = useState("AAPL");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const config = { headers: { Authorization: token } };

  const fetchPrice = async () => {
    const res = await axios.get(`http://localhost:3002/api/stock/price/${symbol}`, config);
    setPrice(parseFloat(res.data["05. price"] || 0));
  };

  useEffect(() => {
    fetchPrice();
  }, [symbol]);

  const handleBuy = async () => {
    await axios.post("http://localhost:3002/api/stock/buy", { symbol, qty, price }, config);
    fetchPortfolio();
  };

  const handleSell = async () => {
    await axios.post("http://localhost:3002/api/stock/sell", { symbol, qty, price }, config);
    fetchPortfolio();
  };

  return (
    <div>
      <h3>Buy/Sell Stocks</h3>
      <input value={symbol} onChange={e => setSymbol(e.target.value.toUpperCase())} />
      <input type="number" value={qty} onChange={e => setQty(e.target.value)} />
      <input type="number" value={price} readOnly />
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
    </div>
  );
};

export default BuySell;
