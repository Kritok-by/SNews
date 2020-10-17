import { Avatar, Button, Chip } from '@material-ui/core'
import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from '@material-ui/icons';

const handleClick = () => {
  console.info('You clicked the Chip.');
};


export default function Post({data}) {
    return(
      <div className="post">
      <div className="who-when">
        <div className="who">
          <Avatar alt="user" src={data.author.image} />
          <Link to={`/profile/${data.author.username}`} ><span className="userN" onClick={linkProfile}>{data.author.username}</span></Link>
        </div>
        <span className="when">{new Date(data.createdAt).toLocaleDateString()}</span>
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
    )
};
