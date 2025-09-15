import React from "react";

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container text-center">
        <h1 className="fw-bold fs-2 fs-md-1 text-danger">
          404 - Page Not Found
        </h1>
        <p className="fs-6 fs-md-5 text-muted">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
