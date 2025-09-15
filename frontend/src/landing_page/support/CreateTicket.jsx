import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                {/* Account Section */}
                <div className='col-12 col-md-4'>
                    <h2 className='fs-4 text-muted p-3'>Account</h2>
                    <ul>
                        <li><a href='#' className="text-decoration-none text-dark">Open Account</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">KYC & Verification</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Profile & Settings</a></li>
                    </ul>
                </div>

                {/* Trading Section */}
                <div className='col-12 col-md-4'>
                    <h2 className='fs-4 text-muted p-3'>Trading</h2>
                    <ul>
                        <li><a href='#' className="text-decoration-none text-dark">Placing Orders</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Margins & Leverage</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Charts & Tools</a></li>
                    </ul>
                </div>

                {/* Funds Section */}
                <div className='col-12 col-md-4'>
                    <h2 className='fs-4 text-muted p-3'>Funds</h2>
                    <ul>
                        <li><a href='#' className="text-decoration-none text-dark">Add Money</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Withdraw Funds</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Linked Bank Accounts</a></li>
                    </ul>
                </div>
            </div>

            <div className='row mt-4'>
                {/* Reports Section */}
                <div className='col-12 col-md-4'>
                    <h2 className='fs-4 text-muted p-3'>Reports</h2>
                    <ul>
                        <li><a href='#' className="text-decoration-none text-dark">Portfolio</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Tax & P&L Reports</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Statements</a></li>
                    </ul>
                </div>

                {/* Investments Section */}
                <div className='col-12 col-md-4'>
                    <h2 className='fs-4 text-muted p-3'>Investments</h2>
                    <ul>
                        <li><a href='#' className="text-decoration-none text-dark">Mutual Funds</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Stocks</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Bonds & NPS</a></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div className='col-12 col-md-4'>
                    <h2 className='fs-4 text-muted p-3'>Support</h2>
                    <ul>
                        <li><a href='#' className="text-decoration-none text-dark">FAQs</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Create Ticket</a></li>
                        <li><a href='#' className="text-decoration-none text-dark">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
