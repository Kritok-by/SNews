import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logOut } from "../../redux/Actions";
import { NewSettings } from "../../services/SettingsService";
import "./YSettings.scss";


export const YSettings = () => {
  const dispatch = useDispatch(),
        history = useHistory(),
        state = useSelector(i=>i.autorize.currentUser),
        [img, setImg] = useState(),
        [name, setName] = useState(),
        [bio, setBio] = useState(),
        [email, setEmail] = useState(),
        [pass, setPass] = useState();
  const log = () => {
    sessionStorage.removeItem('account')
    dispatch(logOut())
  }
  const out = () => {
    log()
    history.push('/')
  }
  const submit=(e)=>{
    e.preventDefault()
    NewSettings(img, name, bio, email, pass, state)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12 settings">
          <form onSubmit={submit}>
            <h2>Your Settings</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">URL of profile picture</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEma"
                aria-describedby="emailHelp"
                onChange={(e)=>setImg(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">New username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInput3"
                aria-describedby="emailHelp"
                // formControlName={state.username}
                onChange={(e)=>setName(e.target.value)}
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
                onChange={(e)=>setBio(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">New email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"

                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">New password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>setPass(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Update settings
            </button>
            <hr />
          </form>
          <div className="log-out-block">
            <button type="submit" className="btn btn-danger logout" onClick={out}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
