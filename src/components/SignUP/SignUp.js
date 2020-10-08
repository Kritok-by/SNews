import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { RegisterPost } from '../../services/RegisterService';
import { useSelector } from 'react-redux';


export const SignUp = () => {
  const [user, setUser] = useState(''),
        [pass, setPass] = useState(''),
        [mail, setMail] = useState(''),
        login = useSelector(state => state.autorize.currentUser),
        history = useHistory();


  const submit=(e)=>{
    e.preventDefault()
    RegisterPost(user, mail, pass)
    sessionStorage.setItem('account',`${login} ${pass}`)
  }
  useEffect(() => {
    if(login.id !== undefined){
      history.push('/')
    }
  });
  return(
    <div className="container">
      <div className="row">
        <form className="col-md-6 offset-md-3 col-xs-12 sign-up" onSubmit={submit}>
          <h2>Sign up</h2>
          <Link to='/signIn'><span className="to-sign-up">Have an account?</span></Link>
          <div className="form-group">
            <label htmlFor="exampleInputEmail2">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              onChange={e => setUser(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail3">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail3"
              aria-describedby="emailHelp"
              onChange={e => setMail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              onChange={e => setPass(e.target.value)}
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
