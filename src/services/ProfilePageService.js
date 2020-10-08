import { LinearProgress } from '@material-ui/core';
import React from 'react'
import { Async } from 'react-async';
import { useSelector } from 'react-redux';
import { ProfilePage } from '../components/ProfilePage/ProfilePage';



export const ProfilePageService = () => {
  const name = useSelector(i=>i.profile.profile);
  const loadPosts = () =>
    fetch(`https://conduit.productionready.io/api/profiles/${name}`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
  return (
    <Async promiseFn={loadPosts}>
          <Async.Pending>
            <LinearProgress />
          </Async.Pending>
          <Async.Fulfilled>
            {(data) =><ProfilePage data={data.profile}  />
            }
          </Async.Fulfilled>
          <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
        </Async>
  )
};
