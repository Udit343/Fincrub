import React from 'react';

function Pricing() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">

                {/* Left Section */}
                <div className="col-12 col-md-5 p-4 text-center text-md-start">
                    <h1 className="mb-3 fs-3 fs-md-2">Simple & Transparent Pricing</h1>
                    <p className="text-muted mb-4 fs-6 fs-md-5">
                        At Fincrub, we believe trading should be affordable for everyone. 
                        No hidden charges, no surprises — just flat and transparent fees.
                    </p>
                </div>

                {/* Spacer (hidden on small screens) */}
                <div className="d-none d-md-block col-md-1"></div>

                {/* Pricing Cards */}
                <div className="col-12 col-md-6 p-4 mb-4">
                    <div className="row text-center">
                        
                        <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                            <div className="border rounded-3 shadow-sm p-4 h-100">
                                <h1 className="p-2 text-primary fs-2">₹0</h1>
                                <p className="text-muted fs-6">
                                    Zero brokerage on equity delivery & mutual fund investments
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <div className="border rounded-3 shadow-sm p-4 h-100">
                                <h1 className="p-2 text-success fs-2">₹20</h1>
                                <p className="text-muted fs-6">
                                    Flat ₹20 per executed order for intraday & derivatives
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
