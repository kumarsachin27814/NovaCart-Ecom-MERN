import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3 className="footer-title">NovaCart</h3>

          <p className="footer-text">Premium E-Commerce Platform</p>
        </div>

        <div className="footer-links">
          <Link to="/about">About Us</Link>

          <Link to="/return">Return Policy</Link>

          <Link to="/disclaimer">Disclaimer</Link>
        </div>

        <div className="footer-text">
          &copy; {new Date().getFullYear()} NovaCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
