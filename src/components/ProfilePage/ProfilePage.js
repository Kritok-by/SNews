import { Avatar, Chip } from '@material-ui/core'
import React, { useState } from 'react'
import './ProfilePage.scss'
import { useSelector } from 'react-redux';
import { Like } from '../../services/LikeService';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import { Link } from 'react-router-dom';


export const ProfilePage = ({data}) => {
  const currentUser = useSelector(i=>i.autorize.currentUser.username),
        [follow, setFollow] = useState(data.following),
        user = useSelector(i=>i.autorize.currentUser.token),
        followUrl = `https://conduit.productionready.io/api/profiles/${data.username}/follow`;

  const buttons = () => {
    if(currentUser===data.username){
      return <Link to='/settings'><Chip label="Settings profile" /></Link>
    }
    if(follow) {
    return <Chip label="Unfollow" onClick={onFollow}/>
    }
    return <Chip label="Follow" onClick={onFollow}/>
  }
  const onFollow = ()=>{
    let method;
    setFollow(prev=>!prev)
    if(follow){
      method='DELETE'
    } else{
      method='POST'
    }
    Like(followUrl,method,user)
  }
  console.log(data)
  console.log(currentUser)
  return(
    <article className='profile'>
      <div className="header-block">
        <div className="center">
          <Avatar alt="user" src={data.image}/>
          <h2 className="header-user-name">{data.username}</h2>
          {buttons()}
        </div>
      </div>
      <div className="container main-container">
      <div className="row">
        <div className=" offset-1 col-md-10">
          <ProfilePosts data={data}/>
        </div>
      </div>
      </div>
    </article>
  )
};
