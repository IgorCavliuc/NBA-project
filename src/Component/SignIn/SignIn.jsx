import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../SignIn/SignIn.css";
import SignInPict from "../../src/img/Layer 1.png";

function SignIn() {
  return (
    <div className="content">
      <div className="form">
        <form className="form-content">
          <h1>Sign In</h1>
          <label htmlFor="login">Login</label>

          <input type="text" label="Login" className="inputForm" />

          <p htmlFor="password">Password</p>

          <input type="password" label="Password" className="inputForm" />

          <Link to="profile">
            <button type="submit" className="buttonForm">
              Sign In
            </button>
          </Link>

          <h2 className="member-pasw">
            Not a member yet? <Link to="/signup">Sign up</Link>
          </h2>
        </form>
      </div>
      <div className="img">
        <img src={SignInPict}></img>
      </div>
    </div>
  );
}

export default SignIn;
