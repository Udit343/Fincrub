import React from 'react';

function Stats() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Left Section (Text) */}
                <div className="col-12 col-md-6 p-4">
                    <h1 className="fs-3">Trade with Confidence</h1>

                    <div className="mt-4">
                        <h3 className="fs-5 text-muted">Built for new-age investors</h3>
                        <p className="text-muted">
                            Fincrub is designed to give every trader — from beginner to pro — a simple, 
                            reliable, and transparent platform to start their investment journey.
                        </p>
                    </div>

                    <div className="mt-3">
                        <h3 className="fs-5 text-muted">No distractions, only trading</h3>
                        <p className="text-muted">
                            No spam, gimmicks, or unwanted alerts. Fincrub delivers a clean, powerful trading 
                            experience — so you can focus on growing your wealth your way.
                        </p>
                    </div>

                    <div className="mt-3">
                        <h3 className="fs-5 text-muted">The Fincrub ecosystem</h3>
                        <p className="text-muted">
                            More than just a platform — Fincrub connects you to smart tools, insights, and 
                            financial services that empower your investment journey.
                        </p>
                    </div>

                    <div className="mt-3">
                        <h3 className="fs-5 text-muted">Helping you grow smarter</h3>
                        <p className="text-muted">
                            With intelligent tools, research insights, and risk controls, Fincrub goes beyond 
                            transactions to help you make better financial decisions.
                        </p>
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className="col-12 col-md-6 p-3 mb-4 text-center">
                    <img 
                        src="media/images/Confident.png" 
                        className="img-fluid rounded" 
                        alt="Fincrub Ecosystem" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Stats;
