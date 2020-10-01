import React from "react";
import "./YSettings.scss";

export const YSettings = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12 settings">
          <form>
            <h2>Your Settings</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">URL of profile picture</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">New username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Short bio about you
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">New email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">New password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Update settings
            </button>
            <hr />
          </form>
          <div className="log-out-block">
            <button type="submit" className="btn btn-danger logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
