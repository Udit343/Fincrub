import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="row text-center mt-5">
        <h1 className="p-2 fs-2 text-primary">Fincrub Pricing</h1>
        <h4 className="p-2 fs-5 text-muted mb-5">
          Simple, transparent, and beginner-friendly plans
        </h4>
      </div>

      {/* Pricing Cards */}
      <div className="row p-4 mt-5 text-center">
        {/* Free Learning */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <h1 className="fs-4 p-2">Learn Free</h1>
          <p className="p-2 text-muted">
            Access beginner stock market lessons, trading basics, and investing
            guides — all at no cost.
          </p>
        </div>

        {/* Trading Charges */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <h1 className="fs-4 p-2">Low-cost Trading</h1>
          <p className="p-2 text-muted">
            Flat ₹20 per executed order across intraday, F&O, currency, and
            commodities. No hidden fees.
          </p>
        </div>

        {/* Investment Plan */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <h1 className="fs-4 p-2">Invest Smart</h1>
          <p className="p-2 text-muted">
            Long-term investing in equities and mutual funds with ₹0 account
            opening fee and transparent pricing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
