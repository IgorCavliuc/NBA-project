import React, { useState } from "react";
import SignInPict from "../../src/img/Layer 1.png";
import "../SignIn/SignIn.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);



  return (
    <div className="content">
      <div className="form">
        <form  className="form-content">
          <h1>Sign Up</h1>
          <label>Name</label>
         
              <input
                label="Name"
                className="inputForm"
              />
          
          <label>Login</label>
         
              <input
                label="Login"
                className="inputForm"
              />
          
          <label>Password</label>
         
              <input
                label="Password"
                type="password"
                className="inputForm"
              />
           
          <label>Enter your password again</label>
         
              <input
                label="secondPassword"
                type="password"
                className="inputForm"
              />
           
          <div className="iAccept">
            
                <input
                  label="checkbox"
                  type="checkbox"
                />
             
            <label htmlFor="checkbox"> I accept the agreement</label>
          </div>

          <button className="buttonForm">Sign Up</button>
          <h2 className="member-pasw">
            Not a member yet? <Link to="/">Sign in</Link>
          </h2>
        </form>
      </div>
      <div className="img">
        <img src={SignInPict}></img>
      </div>
    </div>
  );
}

export default SignUp;
