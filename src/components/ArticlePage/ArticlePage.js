import { Avatar, Chip } from '@material-ui/core';
import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import './ArticlePage.scss'

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export const ArticlePage = ({state}) => {
  console.log(state)
  return(
    <article className='article-page'>
      <div className="container ">
        <div className="row header-article">
          <div className="col-md-8 header">
            <h2>{state.title}</h2>
          </div>
          <div className="col-md-4 other">
          <div className="who">
            <Avatar alt="user" url={state.author.image}/>
            <span className="userN">{state.author.username}</span>
          </div>
            <div className="buttons">
            <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
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
