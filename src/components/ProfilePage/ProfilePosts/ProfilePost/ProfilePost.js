import { Avatar, Chip } from '@material-ui/core'
import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export default function Post({data}) {
    return(
      <div className="post">
        <div className="who-when">
          <div className="who">
            <Avatar alt="user" src={data.author.image}/>
            <span className="userN">{data.author.username}</span>
          </div>
          <span className="when">{data.createdAt}</span>
        </div>
        <hr/>
        <div className="about-post">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <hr/>
        <div className="more-buttons">
          <span><BookmarkBorderIcon/></span>
          {data.tagList.map(i=><Chip
        label={i}
        onClick={handleClick}
        variant="outlined"
      />)}
        </div>
      </div>
    )
};
