import { Avatar, Chip } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.scss";
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { currentPost, currentProfile, currentUrl, hashTag, numberTab } from "../../../../redux/Actions";
import { Like } from "../../../../services/LikeService";


 function Post({ data }) {
   const dispatch = useDispatch(),
          user = useSelector(i=>i.autorize.currentUser.token),
          slug = data.slug,
          url = `https://conduit.productionready.io/api/articles/${slug}/favorite`,
          [like, setLike] = useState(data.favorited),
          profileUrl = `https://conduit.productionready.io/api/articles?author=${data.author.username}&limit=10&offset=`,
          [likeCount, setLikeCount] = useState(data.favoritesCount),
          history = useHistory();


  const handleClick = (i) => {
    dispatch(hashTag(i))
    dispatch(numberTab(2));
    dispatch(currentUrl(`https://conduit.productionready.io/api/articles?tag=${i}&limit=10&offset=`))
  };
  const onLike = ()=>{
    if(user){
      let method;
      setLike(prev=>!prev)
      if(like){
        method='DELETE'
        setLikeCount(prev=>--prev)
      } else{
        method='POST'
        setLikeCount(prev=>++prev)
      }
      Like(url,method,user)
    } else {
      history.push('/signIn')
    }
  }

  const color = ()=>like?'red':'grey'

  const linkProfile = ()=>{
    dispatch(currentProfile(data.author.username))
    dispatch(currentUrl(profileUrl))
  }
  const thisDate = () => {
    const date = new Date(data.createdAt)
    return `${date.getDate()} ${date.toLocaleString('en', { month: 'long' })} ${date.getFullYear()}`
  }
  console.log(new Date(data.createdAt))
  return (
    <div className="post">
      <div className="who-when">
        <div className="who">
          <Avatar alt="user" src={data.author.image} />
          <Link to={`/profile/${data.author.username}`} ><span className="userN" onClick={linkProfile}>{data.author.username}</span></Link>
        </div>
        <span className="when">{thisDate()}</span>
      </div>
      <hr />
      <Link to={`/post/${slug}`}><div className="about-post" onClick={()=>dispatch(currentPost(slug))}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div></Link>
      <hr />
      <div className="more-buttons">
        <div>
        {data.tagList.map((i, ind) => (
          <Chip label={`#${i}`} onClick={()=>handleClick(i)} variant="outlined" key={ind} />
        ))}
        </div>
      <Button
      onClick={onLike}
      color={color()}
      icon='heart'
      label={{ as: 'a', basic: true, content: likeCount}}
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
