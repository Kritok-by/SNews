import React from 'react'

export const SignUp = () => {
  return(
    <div className="container">
      <div className="row">
        <form className="col-md-6 offset-md-3 col-xs-12 sign-up">
          <h2>Sign up</h2>
          <span className="to-sign-up">Have an account?</span>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
};
