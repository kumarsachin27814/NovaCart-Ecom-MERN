import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Email verified successfully!");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  if (!email) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Invalid Request</h2>
          <p>Please register first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Verify OTP</h2>

        <p
          style={{
            color: "#a1a1aa",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          OTP has been sent to
          <br />
          <strong>{email}</strong>
        </p>

        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          required
        />

        <button type="submit" className="btn">
          Verify OTP
        </button>
      </form>
    </div>
  );
}

export default VerifyOtp;
