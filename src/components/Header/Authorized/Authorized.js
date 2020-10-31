import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import {
  currentProfile,
  currentUrl,
  prevArticleValues,
} from '../../../redux/Actions';

export default function Authorized() {
  const userName = useSelector((i) => i.autorize.currentUser.username),
    img = useSelector((i) => i.autorize.currentUser.image),
    dispatch = useDispatch(),
    url = `https://conduit.productionready.io/api/articles?author=${userName}&limit=10&offset=`;

  const linkProfile = () => {
    dispatch(currentProfile(userName));
    dispatch(currentUrl(url));
  };

  const toDefoltValues = () => {
    dispatch(
      prevArticleValues({
        title: '',
        about: '',
        text: '',
        tags: [],
        slug: '',
      })
    );
  };

  return (
    <nav className="header-nav">
      <ul>
        <Link to="/new-post">
          <li onClick={toDefoltValues}>
            <i className="far fa-edit" />
            <span>New Post</span>
          </li>
        </Link>
        <Link to="/settings">
          <li>
            <i className="fas fa-cog" /> <span>Settings</span>
          </li>
        </Link>
        <Link to={`/profile/${userName}`} onClick={linkProfile}>
          <li>
            <Avatar alt="user" src={img} />
            <span>{userName}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
