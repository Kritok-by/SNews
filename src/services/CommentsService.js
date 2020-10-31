import {
  Avatar,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import { Async } from 'react-async';
import React from 'react';

export const CommentsService = ({ data }) => {
  const loadPosts = () =>
    fetch(
      `https://conduit.productionready.io/api/articles/${data.slug}/comments`
    )
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json());

  return (
    <Async promiseFn={loadPosts}>
      <Async.Pending>
        <LinearProgress />
      </Async.Pending>
      <Async.Fulfilled>
        {(data) => (
            <>
              {data.comments.map((i, ind) => {
                return (
                  <Card key={ind}>
                    <CardContent>
                      <Avatar alt="Remy Sharp" src={i.author.image} />
                      <Typography color="textSecondary" gutterBottom>
                        {i.author.username}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {i.body}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </>
          );
        }
      </Async.Fulfilled>
      <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
    </Async>
  );
};
