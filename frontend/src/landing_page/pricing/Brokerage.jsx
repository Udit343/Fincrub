import React from 'react';

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-4 mt-5">
        {/* Left Section */}
        <div className="col-12 col-md-8 p-4">
          <h3 className="fs-4 text-primary p-2">Brokerage & Charges</h3>

          <ul className="text-muted">
            <li className="p-2">
              Zero charges for account opening and equity delivery
              investments. No hidden fees.
            </li>
            <li className="p-2">
              Flat ₹20 per executed order on intraday, F&O, currency, and
              commodity trades.
            </li>
            <li className="p-2">
              Mutual fund investments are completely free — ₹0 commission.
            </li>
            <li className="p-2">
              Government taxes and regulatory charges are applied as per SEBI
              and exchange rules.
            </li>
            <li className="p-2">
              No annual maintenance charges for the first year. ₹200/year from
              the second year onward.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-4 p-4">
          <h3 className="fs-4 text-primary">Highlights</h3>
          <ul className="text-muted">
            <li className="p-2">₹0 account opening</li>
            <li className="p-2">₹0 equity delivery</li>
            <li className="p-2">Flat ₹20 intraday & F&O</li>
            <li className="p-2">Free direct mutual funds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
