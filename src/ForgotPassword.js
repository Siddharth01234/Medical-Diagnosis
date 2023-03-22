import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [message, setMessage] = useState("");

  // Function to handle the "forgot password" feature
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      // If the email is valid, send a password reset link to the user's email address
      // (you can use a third-party email service to send the email)
      setMessage("A password reset link has been sent to your email address.");
    } else {
      // If the email is not valid, show an error message
      setMessage("Please enter a valid email address.");
    }
  };

  // Function to validate the email address
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Function to handle changes to the email input field
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Forgot Password?</h1>
      <form className="forgot-password-form" onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button
          className="reset-password-btn"
          type="button"
          disabled={!isValidEmail}
        >
          Reset Password
        </button>
      </form>
      {message && <p className="forgot-password-message">{message}</p>}
    </div>
  );
}

export default ForgotPassword;