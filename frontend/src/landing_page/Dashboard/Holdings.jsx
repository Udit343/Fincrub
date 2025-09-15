import React from "react";

const Holdings = ({ orders }) => {
  return (
    <div>
      <h3>Holdings / Orders</h3>
      <table border="1">
        <thead><tr><th>Symbol</th><th>Qty</th><th>Price</th><th>Type</th><th>Date</th></tr></thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.symbol}</td>
              <td>{o.qty}</td>
              <td>{o.price}</td>
              <td>{o.type}</td>
              <td>{new Date(o.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Holdings;
