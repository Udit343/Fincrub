import React from "react";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <footer style={{ backgroundColor: " #d8e0e598" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Branding & Social */}
          <div className="col-12 col-md-4 mb-4">
            <p>© {new Date().getFullYear()} Fincrub. All rights reserved.</p>
            <a href="https://www.linkedin.com/in/udit-narayan-pandey-9b2a792b5/">
              <i className="fa-brands fa-linkedin-in"></i> Linkedin
            </a>
            <br />
            <a href="https://x.com/uditPandit46284">
              <i className="fa-brands fa-twitter"></i> Twitter
            </a>
            <br />
            <a href="#">
              <i className="https://www.facebook.com/"></i> Facebook
            </a>
            <br />
            <a href="https://www.instagram.com/udit__2004/">
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
          </div>

          {/* Company */}
          <div className="col-12 col-md-4 mb-4">
            <p>Company</p>
            <Link to="/about" >About</Link>
            <br />
           <Link to="/home" >Careers</Link>
            <br />
            <Link to="/about" >Blog</Link>
            <br />
            <Link to="/about" >Contact</Link>
            <br />
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4">
            <p>Quick Links</p>
            <Link to="/signup" >Open Account</Link>
            <br />
            <Link to="/pricing" >Pricing</Link>
            <br />
            <Link to="/support" >Education</Link>
            <br />
            <a href="#">FAQs</a>
            <br />
          </div>
        </div>

        <div className="mt-4 text-muted" style={{ fontSize: "12px" }}>
          <p>
            Fincrub is a beginner-friendly investment platform. Investments in
            the stock market are subject to risks — please do your research
            before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
