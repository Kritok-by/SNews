import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  currentProfile,
  currentUrl,
  getComments,
} from '../../../redux/Actions';

export const Comments = ({ slug, token }) => {
  const comments = useSelector((i) => i.comments.comments),
    [text, setText] = useState(),
    dispatch = useDispatch(),
    currentUser = useSelector((i) => i.autorize.currentUser.username),
    history = useHistory();
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
    setText('');
  };
  const delPost = async (id) => {
    await fetch(
      `https://conduit.productionready.io/api/articles/${slug}/comments/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    );
    dispatch(getComments(slug));
  };
  const linkProfile = (user) => {
    dispatch(currentProfile(user));
    dispatch(
      currentUrl(
        `https://conduit.productionready.io/api/articles?author=${user}&limit=10&offset=`
      )
    );
    history.push(`/profile/${user}`);
  };
  return (
    <>
      <form className="add-comment" onSubmit={postComment}>
        <div className="form-group">
          <label>Write your comment</label>
          <textarea
            className="form-control"
            rows="2"
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
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    onClick={() => linkProfile(i.author.username)}
                  >
                    {i.author.username}
                  </Typography>
                </div>
                <hr />
                <Typography variant="body2" component="p">
                  {i.body}
                </Typography>
              </CardContent>
              {i.author.username === currentUser ? (
                <IconButton aria-label="delete" onClick={() => delPost(i.id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              ) : (
                <></>
              )}
            </Card>
          ))}
      </div>
    </>
  );
};
