function CreateAccount()
{
    return(
    <form className="login-form">
      <div className="login-header">
          <h1 className="login-title">Welcome</h1>
          <p className="login-subtitle">Please sign up</p>
        </div>
      <div className="form-group">
        <label className="form-label" htmlFor="username">Username:</label>
        <input className="form-input" type="text" name="username" id="username" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">Password:</label>
        <input className="form-input" type="password" name="password" id="password" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">Re-Enter Password:</label>
        <input className="form-input" type="password" name="password" id="password" />
      </div>
      <button className="login-btn" type="submit">Sign In</button>
      <div className="login-footer">
      </div>
    </form>
    )
}
export default CreateAccount;