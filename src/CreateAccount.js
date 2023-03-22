import React, { useState } from "react";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsPasswordMatch(value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && isPasswordMatch) {
      // If the email is valid and passwords match, create a new user account
      // (you can use a backend API for this)
      setMessage("Your account has been created successfully!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      // If the email is not valid or passwords do not match, show an error message
      setMessage(
        isValidEmail
          ? "Passwords do not match. Please re-enter your password."
          : "Please enter a valid email address."
      );
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-header">
        <h1 className="login-title">Welcome</h1>
        <p className="login-subtitle">Please sign up</p>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="username">
          Username:
        </label>
        <input
          className="form-input"
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
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
      <div className="form-group">
        <label className="form-label" htmlFor="password">
          Password:
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="confirm-password">
Confirm Password:
</label>
<input
       className="form-input"
       type="password"
       name="confirm-password"
       id="confirm-password"
       value={confirmPassword}
       onChange={handleConfirmPasswordChange}
     />
</div>
<button className="login-btn" type="submit">
Create Account
</button>
{message && <p className="error-message">{message}</p>}
</form>
);
}

export default CreateAccount;