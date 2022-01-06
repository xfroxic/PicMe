import React from 'react';

const LoginForm = ({ isShowLogin }) => {

  return (
    <div className="login-form">
      <div className="form-box solid">
          <form>
              <h1 className="login-text">Sign In</h1>
              <label>Username</label>
              <input 
                  type="text"
                  name="username"
                  className="login-box" 
              /><br />
              <input 
                  type="password"
                  name="password"
                  className="login-box" 
              /><br />
              <input type="submit" value="LOGIN" className="login-btn" />
          </form>
      </div>
    </div>
  )
}

export default LoginForm