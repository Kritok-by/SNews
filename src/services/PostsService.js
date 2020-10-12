import { LinearProgress } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useState } from 'react'
import { Async } from 'react-async';
import { useSelector } from 'react-redux';
import Post from '../components/Main/Posts/Post/Post';



export const PostService = () => {
  const token = useSelector(i=>i.autorize.currentUser.token);
  const header = () => {
    if(token){
      return  {
        'Authorization' : `Token ${token}`,
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
      return {
        'Content-Type': 'application/json; charset=utf-8'
      }
  }
  const [page, setPage] = useState(0),
          url = useSelector(i=>i.articles.url);
  const loadPosts = () =>
    fetch(`${url}${page}`,{
      headers: header()
    })
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
  return (
    <Async promiseFn={loadPosts}>
          <Async.Pending>
            <LinearProgress />
          </Async.Pending>
          <Async.Fulfilled>
            {(data) =>{
              console.log(data)
              return (
                <>
                {data.articles.map((i, ind) => {
                  return <Post data={i} key={ind} />
                })}
                <Pagination
              count={data.articlesCount/10}
              shape="rounded"
              page={page}
              onChange={(e, value) => setPage(value)}
            />
                </>
              )}
            }
          </Async.Fulfilled>
          <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
        </Async>
  )
};
