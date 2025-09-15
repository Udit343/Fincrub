import React from "react";
import {Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center justify-content-center">


        <div className="col-12 mb-4">
          <img
            src="media/images/Front.png"
            alt="Hero Image"
            className="img-fluid"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </div>


        <div className="col-12">
          <h1 className="mt-3 fs-2 fs-md-1">Trade Smarter, Invest Better</h1>
        </div>


        <div className="col-12 col-md-8">
          <p className="text-muted fs-6 fs-md-5">
            All-in-one platform for <strong>stocks</strong>,{" "}
            <strong>derivatives</strong>, and <strong>mutual funds</strong> — with
            real-time charts, insights, and analytics.
          </p>
        </div>


      <div className="col-12">
      <Link className="btn btn-primary fs-6 fs-md-5 px-4 py-2 mt-3" to="/signup">Sign Up Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
