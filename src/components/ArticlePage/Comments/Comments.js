import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../../redux/Actions';

export const Comments = ({ slug, token }) => {
  const comments = useSelector((i) => i.comments.comments),
    [text, setText] = useState(),
    dispatch = useDispatch();

  const postComment = async (e) => {
    e.preventDefault();
    await fetch(
      `https://conduit.productionready.io/api/articles/${slug}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({ body: text }),
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    );
    dispatch(getComments(slug));
  };
  useEffect(() => {});
  console.log(comments);
  return (
    <>
      <form className="add-comment" onSubmit={postComment}>
        <div className="form-group">
          <label>Write your article (in markdown)</label>
          <textarea
            className="form-control"
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-danger">
          Post
        </button>
      </form>
      <div className="comments">
        {comments &&
          comments.map((i, ind) => (
            <Card key={ind}>
              <CardContent>
                <div className="author-comment">
                  <Avatar alt="Remy Sharp" src={i.author.image} />
                  <Typography color="textSecondary" gutterBottom>
                    {i.author.username}
                  </Typography>
                </div>
                <hr />
                <Typography variant="body2" component="p">
                  {i.body}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
};
