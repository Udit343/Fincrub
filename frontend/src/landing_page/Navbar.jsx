import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkToken();
    window.addEventListener("storage", checkToken);

    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom fixed-top bg-light shadow-sm mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img style={{ width: "15%" }} src="media/images/Logo.png" alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link mx-3" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3" to="/product">Product</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3" to="/support">Support</Link></li>
            {isLoggedIn && (
              <li className="nav-item"><Link className="nav-link mx-3" to="/dashboard">Dashboard</Link></li>
            )}
          </ul>

          <div className="d-flex gap-3">
            {!isLoggedIn ? (
              <>
                <Link to="/signin" className="btn btn-outline-primary">Sign In</Link>
                <Link to="/signup" className="btn btn-primary">Sign Up</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
