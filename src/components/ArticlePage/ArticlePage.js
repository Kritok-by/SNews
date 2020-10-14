import { Avatar, Chip } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Like } from '../../services/LikeService';
import './ArticlePage.scss'


export const ArticlePage = ({state}) => {
  const [like, setLike] = useState(state.favorited),
          [follow, setFollow] = useState(state.author.following),
          dispatch = useDispatch(),
          user = useSelector(i=>i.autorize.currentUser.token),
          athor = state.author.username,
          slug = state.slug,
          likeUrl = `https://conduit.productionready.io/api/articles/${slug}/favorite`,
          followUrl = `https://conduit.productionready.io/api/profiles/${athor}/follow`,
          [likeCount, setLikeCount] = useState(state.favoritesCount);

  const onLike = ()=>{
    let method;
    setLike(prev=>!prev)
    if(like){
      method='DELETE'
      setLikeCount(prev=>--prev)
    } else{
      method='POST'
      setLikeCount(prev=>++prev)
    }
    Like(likeUrl,method,user)
  }
  const onFollow = ()=>{
    let method;
    setFollow(prev=>!prev)
    if(follow){
      method='DELETE'
    } else{
      method='POST'
    }
    Like(followUrl,method,user)
  }

  return(
    <article className='article-page'>
      <div className="container ">
          <div className="who">
            <Avatar alt="user" src={state.author.image} />
            <div className="info">
              <span className="userN">{state.author.username}</span>
              <span className="date">{new Date(state.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>
        <div className="row header-article">
          <div className="col-md-8 header">
            <h1>{state.title}</h1>
          </div>
          <div className="offset-1 col-md-2 other">
            <div className="buttons">
            <Chip
        label="Follow"
        onClick={onFollow}
      />
      <Chip
        label={`Like (${likeCount})`}
        onClick={onLike}
      />
            </div>
          </div>
        </div>
        <hr/>
      <div className="row">
        <div className="col-md-12 article-text">
          <p>{state.body}</p>
        </div>
      </div>
      </div>
    </article>
  )
};
