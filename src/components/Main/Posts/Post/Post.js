import { Avatar, Chip } from "@material-ui/core";
import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import "./Post.scss";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { currentPost, currentProfile } from "../../../../redux/Actions";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

 function Post({ data }) {
   const dispatch = useDispatch()
   console.log(data)
  return (
    <div className="post">
      <div className="who-when">
        <div className="who">
          <Avatar alt="user" src={data.author.image} />
          <Link to={`/profile/${data.author.username}`} ><span className="userN" onClick={()=>dispatch(currentProfile(data.author.username))}>{data.author.username}</span></Link>
        </div>
        <span className="when">{data.createdAt}</span>
      </div>
      <hr />
      <Link to={`/post/${data.slug}`}><div className="about-post" onClick={()=>dispatch(currentPost(data.slug))}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div></Link>
      <hr />
      <div className="more-buttons">
        <span>
          <BookmarkBorderIcon />
        </span>
        <div>
        {data.tagList.map((i, ind) => (
          <Chip label={i} onClick={handleClick} variant="outlined" key={ind} />
        ))}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  currentProfile
}

export default connect(null, mapDispatchToProps)(Post)
