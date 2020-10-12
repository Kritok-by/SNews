import { Avatar, Chip } from "@material-ui/core";
import React from "react";
import "./Post.scss";
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { currentPost, currentProfile, currentUrl, hashTag, numberTab } from "../../../../redux/Actions";
import { Like } from "../../../../services/LikeService";


 function Post({ data }) {
   const dispatch = useDispatch(),
          user = useSelector(i=>i.autorize.currentUser.token),
          slug = data.slug;


  const handleClick = (i) => {
    dispatch(hashTag(i))
    dispatch(numberTab(2));
    dispatch(currentUrl(`https://conduit.productionready.io/api/articles?tag=${i}&limit=10&offset=`))
  };
  const onLike = ()=>{
    let method;
    data.favorited?method='DELETE':method='POST';
    console.log(method)
    Like(slug,method,user)
  }
  const color = ()=>data.favorited?'red':'grey'
  console.log()
  return (
    <div className="post">
      <div className="who-when">
        <div className="who">
          <Avatar alt="user" src={data.author.image} />
          <Link to={`/profile/${data.author.username}`} ><span className="userN" onClick={()=>dispatch(currentProfile(data.author.username))}>{data.author.username}</span></Link>
        </div>
        <span className="when">{new Date(data.createdAt).toLocaleDateString()}</span>
      </div>
      <hr />
      <Link to={`/post/${data.slug}`}><div className="about-post" onClick={()=>dispatch(currentPost(data.slug))}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div></Link>
      <hr />
      <div className="more-buttons">
        <div>
        {data.tagList.map((i, ind) => (
          <Chip label={i} onClick={()=>handleClick(i)} variant="outlined" key={ind} />
        ))}
        </div>
      <Button
      onClick={onLike}
      color={color()}
      icon='heart'
      label={{ as: 'a', basic: true, content: data.favoritesCount}}
      labelPosition='left'
    />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  currentProfile
}

export default connect(null, mapDispatchToProps)(Post)
