import { LinearProgress } from '@material-ui/core';
import React from 'react'
import { Async } from 'react-async';
import { useSelector } from 'react-redux';
import { ArticlePage } from '../components/ArticlePage/ArticlePage';



export const ArticlePageService = () => {
  const post = useSelector(i=>i.articles.slug);
  const loadPost = () =>
    fetch(`https://conduit.productionready.io/api/articles/${post}`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
  return (
    <Async promiseFn={loadPost}>
          <Async.Pending>
            <LinearProgress />
          </Async.Pending>
          <Async.Fulfilled>
            {(data) => <ArticlePage state={data.article}/>}
          </Async.Fulfilled>
          <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
        </Async>
  )
};
