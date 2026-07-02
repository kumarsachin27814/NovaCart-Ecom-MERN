import React from "react";
import '../styles/about.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About NovaCart</h1>
        <p>
          Your trusted destination for premium products, secure shopping, and an
          exceptional online shopping experience.
        </p>
      </div>

      <div className="about-container">
        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            NovaCart was created with one simple goal — to make online shopping
            easy, reliable, and affordable. We carefully select products from
            trusted sellers so every customer receives quality products at
            competitive prices.
          </p>
        </div>

        <div className="about-grid">
          <div className="info-card">
            <h3> Our Mission</h3>
            <p>
              To provide customers with a seamless shopping experience through
              quality products, secure payments, and fast delivery.
            </p>
          </div>

          <div className="info-card">
            <h3> Our Vision</h3>
            <p>
              To become one of the most trusted e-commerce platforms by focusing
              on customer satisfaction and innovation.
            </p>
          </div>

          <div className="info-card">
            <h3> Quality First</h3>
            <p>
              Every product listed on NovaCart is carefully reviewed to maintain
              high quality standards.
            </p>
          </div>

          <div className="info-card">
            <h3> Secure Shopping</h3>
            <p>
              We prioritize customer privacy and secure payment processing to
              ensure a safe shopping experience.
            </p>
          </div>
        </div>

        <div className="about-card">
          <h2>Why Choose NovaCart?</h2>

          <ul>
            <li>✔ Premium quality products</li>
            <li>✔ Secure payment gateway</li>
            <li>✔ Fast order processing</li>
            <li>✔ Easy return policy</li>
            <li>✔ Responsive customer support</li>
            <li>✔ Affordable pricing</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Customer Commitment</h2>

          <p>
            At NovaCart, every customer matters. We continuously improve our
            platform to provide better services, transparent policies, and an
            enjoyable shopping journey from browsing to delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
