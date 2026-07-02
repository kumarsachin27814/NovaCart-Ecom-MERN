import React from "react";
import "../styles/disclaimer.css";

function Disclaimer() {
  return (
    <div className="disclaimer-page">
      <div className="disclaimer-hero">
        <h1>Disclaimer</h1>
        <p>
          Please read this disclaimer carefully before using NovaCart. By
          accessing our website, you agree to the terms outlined below.
        </p>
      </div>

      <div className="disclaimer-container">
        <div className="disclaimer-card">
          <h2>📌 General Information</h2>
          <p>
            The information available on NovaCart is provided for general
            informational purposes only. While we strive to keep all information
            accurate and up to date, we make no warranties regarding its
            completeness, reliability, or accuracy.
          </p>
        </div>

        <div className="disclaimer-grid">
          <div className="info-card">
            <h3>🛍 Product Information</h3>
            <p>
              Product descriptions, specifications, and images are provided by
              manufacturers or suppliers. Actual products may slightly differ
              due to display settings or manufacturing updates.
            </p>
          </div>

          <div className="info-card">
            <h3>💰 Pricing & Availability</h3>
            <p>
              Prices, offers, and product availability may change without prior
              notice. We reserve the right to correct pricing errors whenever
              necessary.
            </p>
          </div>

          <div className="info-card">
            <h3>🔗 Third-Party Links</h3>
            <p>
              Our website may include links to third-party websites for your
              convenience. NovaCart is not responsible for the content,
              policies, or practices of external websites.
            </p>
          </div>

          <div className="info-card">
            <h3>⚖ Limitation of Liability</h3>
            <p>
              NovaCart shall not be held responsible for any direct, indirect,
              incidental, or consequential damages arising from the use of our
              website or products.
            </p>
          </div>
        </div>

        <div className="disclaimer-card">
          <h2>🔒 User Responsibility</h2>
          <p>
            Users are responsible for ensuring that the information they provide
            is accurate and for using the website in accordance with applicable
            laws and regulations.
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>📝 Changes to This Disclaimer</h2>
          <p>
            NovaCart reserves the right to update or modify this Disclaimer at
            any time without prior notice. Continued use of the website after
            changes indicates your acceptance of the revised terms.
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>📞 Contact Us</h2>
          <p>
            If you have any questions regarding this Disclaimer, please contact
            our customer support team. We will be happy to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
