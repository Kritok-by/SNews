import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./SignIn.scss";
import { LoginPost } from "../../services/LoginService";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { numberTab } from "../../redux/Actions";

export const SignIn = () => {
  const [login, setLogin] = useState(''),
        [pass, setPass] = useState(''),
        error = useSelector(state => state.autorize.errorLogin),
        auth = useSelector(state=>state.autorize.currentUser),
        history = useHistory(),
        dispatch = useDispatch();
        const alert = () =>{
          if(error.length !== 0){
            return error.map((i, e)=><Alert key={e} variant="outlined" severity="error">{i}</Alert>)
            }}

  const submit=(e)=>{
    e.preventDefault()
    LoginPost(login, pass)
    localStorage.setItem('account',`${login} ${pass}`)
    dispatch(numberTab(1))
  }
  useEffect(() => {
    if(auth.id !== undefined){
      history.push('/')
    }
  });

  return (
    <div className="container">
      <div className="row">
        <form className="col-md-6 offset-md-3 col-xs-12 sign-in" onSubmit={submit}>
          <h2>Sign in</h2>
          <Link to='/register'><span className="to-sign-up">Need an account?</span></Link>
          {alert()}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={e => setPass(e.target.value)}
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
