import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-3'>
            <div className='row align-items-center'>
                

                <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img 
                        src='media/images/Trading.png' 
                        style={{ width: "70%", height: "auto" }} 
                        alt="Trading" 
                    />
                </div>


                <div className='col-12 col-md-6'>
                    <h1 className='mb-3 text-center text-md-start'>
                        Trusted Trading Partner in India
                    </h1>
                    <p className='text-center text-md-start'>
                        Over 2 million investors rely on us, contributing to a significant share of India’s daily market transactions through trading and investments.
                    </p>

                    <div className='row'>
                        <div className='col-6 mt-4'>
                            <ul>
                                <li>Wide Range of Asset Classes</li>
                                <li>Live Market Data</li>
                                <li>Interactive Charts & Insights</li>
                                <li>Instant Buy/Sell Options</li>
                            </ul>
                        </div>
                        <div className='col-6 mt-4'>
                            <ul>
                                <li>Futures & Options Contracts</li>
                                <li>Comprehensive Risk Alerts</li>
                                <li>Exchange Selection Menu</li>
                                <li className='mb-5'>Access to Historical Trends</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
