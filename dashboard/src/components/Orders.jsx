import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <div className="no-orders">
        <p className="fs-5 mb-3">You haven't placed any orders today</p>

        <Link to={"/"} className="btn btn-primary btn-lg">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
