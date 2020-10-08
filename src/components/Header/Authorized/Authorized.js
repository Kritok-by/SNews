import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'

export default function Authorized() {
  let userName = useSelector(i=>i.autorize.currentUser.username),
      img = useSelector(i=>i.autorize.currentUser.img)

  return(
    <nav className="header-nav">
      <ul>
       <Link to='/new-post'> <li>New Post</li></Link>
       <Link to='/settings'> <li>Settings</li></Link>
       <Link to={`/profile/${userName}`}><li><Avatar alt="user" src={img}/>{userName}</li></Link>
      </ul>
    </nav>
  )
};
