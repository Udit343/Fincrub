import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allposition, setAllposition] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allpositions").then((res) => {
      setAllposition(res.data);
    });
  }, []);

  return (
    <div className="container my-4">
      <h3 className="title mb-3 text-center">
        Positions ({allposition.length})
      </h3>

      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allposition.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
