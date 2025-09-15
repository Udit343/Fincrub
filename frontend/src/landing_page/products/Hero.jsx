import React from "react";

function Hero() {
  return (
    <div className="container mt-5 border-bottom">
      {/* Heading Section */}
      <div className="row text-center mt-5">
        <div className="col-12">
          <h1 className="p-2 text-primary fw-bold">Fincrub Features</h1>
          <h4 className="p-2 text-muted">
            Smarter tools to manage and grow your investments
          </h4>
          <p className="text-muted mb-5">
            Explore our{" "}
            <a
              href="#"
              style={{ textDecoration: "none", fontWeight: "500" }}
            >
              dashboard, portfolio tracker, and insights{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mb-5">
        <div className="col-12 col-md-4 p-3">
          <h5 className="fw-bold text-dark">📈 Real-Time Trading</h5>
          <p className="text-muted">
            Buy & sell stocks, derivatives, and mutual funds with live market
            updates.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3">
          <h5 className="fw-bold text-dark">📊 Portfolio Dashboard</h5>
          <p className="text-muted">
            Track your investments, analyze growth, and manage risk in one
            place.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3">
          <h5 className="fw-bold text-dark">🤖 Smart Insights</h5>
          <p className="text-muted">
            Get AI-powered suggestions for better investment opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
