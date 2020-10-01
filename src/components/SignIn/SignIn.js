import React from "react";
import "./SignIn.scss";

export const SignIn = () => {
  return (
    <div className="container">
      <div className="row">
        <form className="col-md-6 offset-md-3 col-xs-12 sign-in">
          <h2>Sign in</h2>
          <span className="to-sign-up">Need an account?</span>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
