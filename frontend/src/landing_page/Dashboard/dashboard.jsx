import React from "react";

function Dashboard() {
  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center ">
      <h1 className="mb-4 text-center mt-5 ">Dashboard</h1>
      <p className="mb-4 text-center mt-5">Click the button below to open Dashboard</p>
      <a
        href="http://localhost:5174/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mb-5 btn-lg"
      >
        Open Dashboard
      </a>
    </div>
  );
}

export default Dashboard;
