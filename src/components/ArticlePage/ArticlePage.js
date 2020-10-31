import { Avatar, Chip } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  currentProfile,
  currentUrl,
  prevArticleValues,
} from '../../redux/Actions';
import { deleteArticle } from '../../services/deleteArticle';
import { Like } from '../../services/LikeService';
import './ArticlePage.scss';
import { Comments } from './Comments/Comments';

export const ArticlePage = ({ state }) => {
  const [like, setLike] = useState(state.favorited),
    [follow, setFollow] = useState(state.author.following),
    user = useSelector((i) => i.autorize.currentUser.token),
    currentUser = useSelector((i) => i.autorize.currentUser.username),
    athor = state.author.username,
    slug = state.slug,
    dispatch = useDispatch(),
    history = useHistory(),
    profileUrl = `https://conduit.productionready.io/api/articles?author=${athor}&limit=10&offset=`,
    likeUrl = `https://conduit.productionready.io/api/articles/${slug}/favorite`,
    followUrl = `https://conduit.productionready.io/api/profiles/${athor}/follow`,
    [likeCount, setLikeCount] = useState(state.favoritesCount);

  const onLike = () => {
    if (!currentUser) {
      history.push('/signIn');
    } else {
      let method;
      setLike((prev) => !prev);
      if (like) {
        method = 'DELETE';
        setLikeCount((prev) => --prev);
      } else {
        method = 'POST';
        setLikeCount((prev) => ++prev);
      }
      Like(likeUrl, method, user);
    }
  };

  const onDelete = () => {
    deleteArticle(slug, user);
    history.push('/');
  };

  const onEdit = () => {
    history.push('/new-post');
    dispatch(
      prevArticleValues({
        title: state.title,
        about: state.description,
        text: state.body,
        tags: state.tagList,
        slug: slug,
      })
    );
  };
  const onFollow = () => {
    if (!currentUser) {
      history.push('/signIn');
    } else {
      let method;
      setFollow((prev) => !prev);
      if (follow) {
        method = 'DELETE';
      } else {
        method = 'POST';
      }
      Like(followUrl, method, user);
    }
  };
  const ifFollow = () =>
    follow ? (
      <Chip
        icon={<i className="fas fa-minus" />}
        label="Unfollow"
        onClick={onFollow}
      />
    ) : (
      <Chip
        icon={<i className="fas fa-plus" />}
        label="Follow"
        onClick={onFollow}
      />
    );

  const ifAutorize = () =>
    currentUser === athor ? (
      <div className="buttons">
        <Chip
          icon={<i className="fas fa-pen" />}
          label="Edit Article"
          onClick={onEdit}
        />
        <Chip
          icon={<i className="far fa-trash-alt" />}
          label="Delete Article"
          onClick={onDelete}
        />
      </div>
    ) : (
      <div className="buttons">
        {ifFollow()}
        <Chip label={`Like (${likeCount})`} onClick={onLike} />
      </div>
    );

  const linkProfile = () => {
    dispatch(currentProfile(athor));
    dispatch(currentUrl(profileUrl));
    history.push(`/profile/${athor}`);
  };

  const thisDate = () => {
    const date = new Date(state.updatedAt);
    return `${date.getDate()} ${date.toLocaleString('en', {
      month: 'long',
    })} ${date.getFullYear()}`;
  };

  return (
    <article className="article-page">
      <div className="container ">
        <div className="who">
          <Avatar alt="user" src={state.author.image} />
          <div className="info">
            <span className="userN" onClick={linkProfile}>
              {athor}
            </span>
            <span className="date">{thisDate()}</span>
          </div>
        </div>
        <div className="row header-article">
          <div className="col-md-8 header">
            <h1>{state.title}</h1>
          </div>
          <div className="offset-1 col-md-2 other">{ifAutorize()}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 article-text">
            <p>{state.body}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="offset-2 col-md-8 article-comments">
            <Comments slug={slug} token={user} />
          </div>
        </div>
      </div>
    </article>
  );
};
