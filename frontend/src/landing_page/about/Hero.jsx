import React from "react";

function About() {
  return (
    <div className="container mt-5 mb-5">
      {/* Heading */}
      <div className="row p-4">
        <div className="col-12">
          <h1 className="fs-2 mb-4 text-center text-muted">
            About <span className="text-primary">Fincrub</span>
          </h1>
          <p className="text-center text-muted fs-6">
            Simple. Transparent. Smart.  
            Redefining how India invests and trades.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="row p-3 p-md-5 mt-4 border-top text-muted">
        <div className="col-12 col-md-6 p-3 p-md-4">
          <p>
            Fincrub was founded to make investing <strong>easy, affordable, and 
            accessible</strong> for everyone. With transparent pricing and powerful 
            tools, we help you grow your wealth with confidence.
          </p>
          <p>
            From stocks to mutual funds, everything you need is available 
            in one seamless platform.
          </p>
        </div>

        <div className="col-12 col-md-6 p-3 p-md-4">
          <p>
            Beyond trading, we’re building a space for <strong>financial learning 
            and community support</strong>, helping beginners and pros alike.
          </p>
          <p>
            Our mission: <strong>empower every Indian to achieve financial freedom.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
