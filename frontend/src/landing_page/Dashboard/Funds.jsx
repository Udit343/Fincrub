import React from "react";

const Funds = ({ funds }) => {
  return (
    <div>
      <h3>Available Funds</h3>
      <p>₹{funds}</p>
    </div>
  );
};

export default Funds;
