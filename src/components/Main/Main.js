import React from 'react';
import './Main.scss';
import { MainHeader } from './MainHeader/MainHeader';
import Posts from './Posts/Posts';
import Tags from './Tags/Tags';

export default function Main() {
  return(
    <article>
      <div className="header-block">
        <MainHeader/>
      </div>
      <div className="container main-container">
      <div className="row">
        <div className="col-md-9">
          <Posts/>
        </div>
        <div className="col-md-3">
          <Tags/>
        </div>
      </div>
      </div>
    </article>
  )
};
