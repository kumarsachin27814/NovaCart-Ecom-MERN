import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-title">NovaCart</h2>

          <p className="footer-description">
            NovaCart is a modern e-commerce platform where you can discover
            premium products at affordable prices with a fast, secure and
            seamless shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/return">Return Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> yourmail@gmail.com
          </p>
          <p>
            <FaPhone /> +91 XXXXXXXXXX
          </p>
          <p>
            <FaLocationDot /> Bhopal, India
          </p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-links">
            <a
              href="https://github.com/kumarsachin27814"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-kumar-sahu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/sachin_sah41/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100087919812148"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NovaCart. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
