import React, { useState } from 'react'
import ProfilePostService from '../../../services/ProfilePostService'
import Pagination from '@material-ui/lab/Pagination';
import ProfileTabs from './ProfileTabs/ProfileTabs';
import { useSelector } from 'react-redux';

export default function Posts() {
  const [page, setPage] = useState(0),
        user = useSelector(i=>i.autorize.currentUser.username);
  return(
    <div className="all-posts">
      <ProfileTabs/>
      <hr/>
      <div className="posts">
        <ProfilePostService page={page} user={user}/>
        <Pagination count={10} value={page} shape="rounded" onChange={(e,value)=>setPage(--value*10)}/>
      </div>
    </div>
  )
};
