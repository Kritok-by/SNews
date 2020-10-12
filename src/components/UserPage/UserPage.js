import { Avatar, Chip } from '@material-ui/core'
import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import Posts from '../Main/Posts/Posts';
import './UserPage.scss'

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export const UserPage = ({data}) => {

  return(
    <article className='profile'>
      <div className="header-block">
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Avatar alt="user" src={data.image}/>
      <h2 className="header-user-name">{data.username}</h2>
      </div>
      <div className="container main-container">
      <div className="row">
        <div className=" offset-1 col-md-10">
          <Posts/>
        </div>
      </div>
      </div>
    </article>
  )
};
