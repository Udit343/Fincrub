import React from "react";

function Team() {
  return (
    <div className="container border-top">
      <div className="row mt-5">
        <h1 className="text-muted text-center mb-5">Our Team</h1>

        {/* Founder Image & Info */}
        <div className="col-12 col-md-6 text-center mt-5">
          <img
            src="media/images/Udit.jpeg"
            alt="Founder"
            style={{ width: "50%", borderRadius: "100%" }}
          />
          <h4 className="p-2 mt-2 text-muted">Udit Narayan Pandey</h4>
          <h5 className="fs-6 text-muted">Founder & CEO</h5>
        </div>

        {/* Founder Story */}
        <div className="col-12 col-md-6 mt-5 text-muted">
          <p className="p-3 p-md-4">
            Udit Narayan Pandey founded <strong>Fincrub</strong> in 2025 with a
            vision to make investing in India simple, transparent, and
            accessible for everyone. His journey as a trader inspired him to
            build a platform that removes the barriers people face while
            entering the stock market.
          </p>

          <p className="p-3 p-md-4">
            Under his leadership, Fincrub is growing into one of India’s most
            promising fintech platforms, helping thousands of investors and
            traders take control of their financial future with confidence.
          </p>

          <p className="p-3 p-md-4">
            When not working on Fincrub, Udit enjoys exploring new ideas,
            mentoring young entrepreneurs, and staying active with sports. <br />
            Connect with him on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Blog
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
