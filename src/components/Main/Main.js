import React from 'react';
import './Main.scss';
import Posts from './Posts/Posts';
import Tags from './Tags/Tags';

export default function Main() {
  return(
    <article className='container'>
      <div className="row">
        <div className="col-md-9">
          <Posts/>
        </div>
        <div className="col-md-3">
          {/* <Tags/> */}
        </div>
      </div>
    </article>
  )
};
