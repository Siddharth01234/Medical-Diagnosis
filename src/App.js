import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">Welcome Back!</h1>
          <p className="login-subtitle">Please sign in to continue.</p>
        </div>
        <form className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="username">Username</label>
            <input className="form-input" type="text" name="username" id="username" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-input" type="password" name="password" id="password" />
          </div>
          <button className="login-btn" type="submit">Sign In</button>
        </form>
        <div className="login-footer">
          <button className="reset-password-btn">Forgot Password?</button>
          <button className="create-account-btn">Create New Account</button>
        </div>
      </div>
    </div>
  );
}

export default App;
