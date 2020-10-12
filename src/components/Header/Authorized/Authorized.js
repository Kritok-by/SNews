import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'
import { currentProfile } from '../../../redux/Actions'

export default function Authorized() {
 const userName = useSelector(i=>i.autorize.currentUser.username),
      img = useSelector(i=>i.autorize.currentUser.image),
      dispatch = useDispatch()

  return(
    <nav className="header-nav">
      <ul>
       <Link to='/new-post'> <li>New Post</li></Link>
       <Link to='/settings'> <li>Settings</li></Link>
       <Link to={`/profile/${userName}`} onClick={()=>dispatch(currentProfile(userName))}><li><Avatar alt="user" src={img}/>{userName}</li></Link>
      </ul>
    </nav>
  )
};
