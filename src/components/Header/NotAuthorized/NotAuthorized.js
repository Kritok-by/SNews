import React from 'react'
import {Link} from 'react-router-dom'
export default function NotAuthorized() {
  return(
    <nav className="header-nav">
      <ul>
        <Link to='/signIn'><li>Sign In</li></Link>
        <Link to='/register'><li>Sign Up</li></Link>
      </ul>
    </nav>
  )
};
