import React from 'react'
import ProfileTabs from './ProfileTabs/ProfileTabs';
import ProfilePostsService from '../../../services/ProfilePostsService';

export default function ProfilePosts({data}) {
  const user = data.username;
  return(
    <div className="all-posts">
      <ProfileTabs user={user}/>
      <hr/>
      <div className="posts">
        <ProfilePostsService user={user}/>
      </div>
    </div>
  )
};
