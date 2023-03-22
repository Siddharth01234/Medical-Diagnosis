import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <div className="App">
      <div className="login-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/create-account" element={<CreateAccount/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
function LoginForm() {
  const handleForgotPassword = () => {
    window.location.href = "/forgot-password";
  }
  const handleCreateAccount = () =>{
    window.location.href = "/create-account";
  };

  return (
    <form className="login-form">
      <div className="login-header">
          <h1 className="login-title">Welcome Back!</h1>
          <p className="login-subtitle">Please sign in to continue.</p>
        </div>
      <div className="form-group">
        <label className="form-label" htmlFor="username">Username</label>
        <input className="form-input" type="text" name="username" id="username" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
        <input className="form-input" type="password" name="password" id="password" />
      </div>
      <button className="login-btn" type="submit">Sign In</button>
      <div className="login-footer">
        <button className="reset-password-btn" type="button" onClick={handleForgotPassword}>Forgot Password?</button>
        <button className="create-account-btn" type="button" onClick={handleCreateAccount}>Create New Account</button>
      </div>
    </form>
  );
}

export default App;