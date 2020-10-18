import { Avatar, Chip } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { currentProfile, currentUrl, prevArticleValues } from "../../redux/Actions";
import { deleteArticle } from "../../services/deleteArticle";
import { Like } from "../../services/LikeService";
import "./ArticlePage.scss";

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
    let method;
    setLike((prev) => !prev);
    if (like) {
      method = "DELETE";
      setLikeCount((prev) => --prev);
    } else {
      method = "POST";
      setLikeCount((prev) => ++prev);
    }
    Like(likeUrl, method, user);
  };
  const onDelete = () => {
    deleteArticle(slug, user)
    history.push('/')
  };
  const onEdit = () => {
    history.push('/new-post')
    dispatch(prevArticleValues({
      title: state.title,
      about: state.description,
      text: state.body,
      tags: state.tagList,
      slug: slug}))
  };
  const onFollow = () => {
    let method;
    setFollow((prev) => !prev);
    if (follow) {
      method = "DELETE";
    } else {
      method = "POST";
    }
    Like(followUrl, method, user);
  };
  const ifFollow = () => {
    if (follow) {
      return <Chip label="Unfollow" onClick={onFollow} />;
    }
    return <Chip label="Follow" onClick={onFollow} />;
  };

  const ifAutorize = () => {
    if (currentUser === athor) {
      return (
        <div className="buttons">
          <Chip label="Edit Article" onClick={onEdit} />
          <Chip label="Delete Article" onClick={onDelete} />
        </div>
      );
    } else {
      return (
        <div className="buttons">
          {ifFollow()}
          <Chip label={`Like (${likeCount})`} onClick={onLike} />
        </div>
      );
    }
  };
  const linkProfile = ()=>{
    dispatch(currentProfile(athor))
    dispatch(currentUrl(profileUrl))
    history.push(`/profile/${athor}`)
  }
  return (
    <article className="article-page">
      <div className="container ">
        <div className="who">
          <Avatar alt="user" src={state.author.image} />
          <div className="info">
            <span className="userN" onClick={linkProfile}>{athor}</span>
            <span className="date">
              {new Date(state.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="row header-article">
          <div className="col-md-8 header">
            <h1>{state.title}</h1>
          </div>
          <div className="offset-1 col-md-2 other">
          {ifAutorize()}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 article-text">
            <p>{state.body}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
