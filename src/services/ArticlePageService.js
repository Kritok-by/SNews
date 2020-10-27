import { LinearProgress } from '@material-ui/core';
import React from 'react';
import { Async } from 'react-async';
import { useDispatch, useSelector } from 'react-redux';
import { ArticlePage } from '../components/ArticlePage/ArticlePage';
import { getComments } from '../redux/Actions';

export const ArticlePageService = ({ match }) => {
  const token = useSelector((i) => i.autorize.currentUser.token),
    dispatch = useDispatch();

  dispatch(getComments(match.params.article));

  const headers = () => {
    if (token) {
      return {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
      };
    }
    return { 'Content-Type': 'application/json; charset=utf-8' };
  };
  const loadPost = () =>
    fetch(
      `https://conduit.productionready.io/api/articles/${match.params.article}`,
      {
        headers: headers(),
      }
    )
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json());
  return (
    <Async promiseFn={loadPost}>
      <Async.Pending>
        <LinearProgress />
      </Async.Pending>
      <Async.Fulfilled>
        {(data) => {
          return <ArticlePage state={data.article} />;
        }}
      </Async.Fulfilled>
      <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
    </Async>
  );
};
