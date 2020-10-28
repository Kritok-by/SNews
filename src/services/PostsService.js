import { Pagination } from '@material-ui/lab';
import React, { useState } from 'react';
import { Async } from 'react-async';
import { useSelector } from 'react-redux';
import Post from '../components/Main/Posts/Post/Post';
import PreloaderPost from '../components/Main/Posts/Post/PreloaderPost';

export const PostService = () => {
  const token = useSelector((i) => i.autorize.currentUser.token);
  const preArr = [...'qwertyuiop'];
  const header = () => {
    if (token) {
      return {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
      };
    }
    return {
      'Content-Type': 'application/json; charset=utf-8',
    };
  };
  const [page, setPage] = useState(
      sessionStorage.getItem('page') ? +sessionStorage.getItem('page') : 0
    ),
    url = useSelector((i) => i.articles.url);
  sessionStorage.setItem('page', page);
  const loadPosts = () =>
    fetch(`${url}${page * 10}`, {
      headers: header(),
    })
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json());
  return (
    <Async promiseFn={loadPosts}>
      <Async.Pending>
        {preArr.map((i, ind) => (
          <PreloaderPost key={ind} />
        ))}
      </Async.Pending>
      <Async.Fulfilled>
        {(data) => {
          if (data.articlesCount !== 0) {
            return (
              <>
                {data.articles.map((i, ind) => {
                  return <Post data={i} key={ind} />;
                })}
                <>
                  {data.articlesCount > 10 ? (
                    <Pagination
                      count={Math.ceil(data.articlesCount / 10)}
                      shape="rounded"
                      page={page + 1}
                      onChange={(e, value) => {
                        setPage(value - 1);
                        window.scrollTo(0, 0);
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </>
              </>
            );
          }
          return <h3>Articles not yet...</h3>;
        }}
      </Async.Fulfilled>
      <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
    </Async>
  );
};
