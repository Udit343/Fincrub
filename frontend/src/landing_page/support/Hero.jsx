import React from "react";

function SupportHero() {
  return (
    <section className="container mt-5 mb-5">

      <div className="text-center mb-4">
        <h2 className="text-muted">Fincrub Support</h2>
        <p className="text-muted">
          Get help with your account, trading, and services.
        </p>
      </div>

      <div className="row text-center">
        <div className="col-12 col-sm-6 col-md-3 p-3">
          <div className="border rounded p-4 shadow-sm">
            <i className="fa-solid fa-user text-primary fs-2 mb-3"></i>
            <h5 className="text-muted">Account & KYC</h5>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3 p-3">
          <div className="border rounded p-4 shadow-sm">
            <i className="fa-solid fa-wallet text-primary fs-2 mb-3"></i>
            <h5 className="text-muted">Funds & Withdrawal</h5>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3 p-3">
          <div className="border rounded p-4 shadow-sm">
            <i className="fa-solid fa-chart-line text-primary fs-2 mb-3"></i>
            <h5 className="text-muted">Trading & Orders</h5>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3 p-3">
          <div className="border rounded p-4 shadow-sm">
            <i className="fa-solid fa-file-invoice text-primary fs-2 mb-3"></i>
            <h5 className="text-muted">Reports & Tax</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportHero;
