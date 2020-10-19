import { Avatar, Chip } from "@material-ui/core";
import React, { useState } from "react";
import "./ProfilePage.scss";
import { useSelector } from "react-redux";
import { Like } from "../../services/LikeService";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import { Link, useHistory } from "react-router-dom";

export const ProfilePage = ({ data }) => {
  const currentUser = useSelector((i) => i.autorize.currentUser.username),
    [follow, setFollow] = useState(data.following),
    user = useSelector((i) => i.autorize.currentUser.token),
    history = useHistory(),
    followUrl = `https://conduit.productionready.io/api/profiles/${data.username}/follow`;

  const buttons = () => {
    if (currentUser === data.username) {
      return (
        <Link to="/settings">
          <Chip icon={<i className="fas fa-cog"/>} label="Settings profile" />
        </Link>
      );
    }
    if (follow) {
      return <Chip icon={<i className="fas fa-minus"/>} label="Unfollow" onClick={onFollow} />;
    }
    return <Chip icon={<i className="fas fa-plus"/>} label="Follow" onClick={onFollow} />;
  };
  const onFollow = () => {
    if(!currentUser){
      history.push('/signIn')}
      else{
    let method;
    setFollow((prev) => !prev);
    if (follow) {
      method = "DELETE";
    } else {
      method = "POST";
    }
    Like(followUrl, method, user);}
  };
  return (
    <article className="profile">
      <div className="header-block">
        <div className="center">
          <Avatar alt="user" src={data.image} />
          <h2 className="header-user-name">{data.username}</h2>
          {buttons()}
        </div>
      </div>
      <div className="container main-container">
        <div className="row">
          <div className=" offset-1 col-md-10">
            <ProfilePosts data={data} />
          </div>
        </div>
      </div>
    </article>
  );
};
