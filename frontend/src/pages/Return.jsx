import React from "react";
import "../styles/return.css";

function Return() {
  return (
    <div className="return-page">
      <div className="return-hero">
        <h1>Return Policy</h1>
        <p>
          We want you to shop with confidence. If you're not completely
          satisfied with your purchase, we're here to help.
        </p>
      </div>

      <div className="return-container">
        <div className="return-card">
          <h2>📅 Return Window</h2>
          <p>
            Products can be returned within <strong>7 days</strong> of delivery.
            The item must be unused, undamaged, and in its original packaging.
          </p>
        </div>

        <div className="return-grid">
          <div className="policy-card">
            <h3>✅ Eligible Returns</h3>
            <ul>
              <li>Unused products</li>
              <li>Original packaging</li>
              <li>Invoice included</li>
              <li>No physical damage</li>
            </ul>
          </div>

          <div className="policy-card">
            <h3>❌ Non-Returnable Items</h3>
            <ul>
              <li>Used products</li>
              <li>Gift cards</li>
              <li>Personal care items</li>
              <li>Customized products</li>
            </ul>
          </div>
        </div>

        <div className="return-card">
          <h2>💳 Refund Process</h2>
          <p>
            After we receive and inspect your returned item, your refund will be
            processed within <strong>5–7 business days</strong>. Refunds are
            credited to your original payment method.
          </p>
        </div>

        <div className="return-card">
          <h2>🔄 Exchange Policy</h2>
          <p>
            Exchanges are available only for defective, damaged, or incorrectly
            delivered products. Subject to stock availability.
          </p>
        </div>

        <div className="return-card">
          <h2>📦 Return Shipping</h2>
          <p>
            Customers may be responsible for return shipping charges unless the
            return is due to a damaged, defective, or incorrect item delivered
            by NovaCart.
          </p>
        </div>

        <div className="return-card">
          <h2>📞 Need Help?</h2>
          <p>
            If you have any questions regarding returns or refunds, please
            contact our customer support team. We're always happy to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Return;