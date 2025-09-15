import React from "react";

const Positions = ({ orders }) => {
  const positions = {};
  orders.forEach(o => {
    if (!positions[o.symbol]) positions[o.symbol] = 0;
    positions[o.symbol] += o.type === "BUY" ? o.qty : -o.qty;
  });

  return (
    <div>
      <h3>Positions</h3>
      <table border="1">
        <thead><tr><th>Symbol</th><th>Qty</th></tr></thead>
        <tbody>
          {Object.keys(positions).map((symbol, i) => (
            <tr key={i}><td>{symbol}</td><td>{positions[symbol]}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
