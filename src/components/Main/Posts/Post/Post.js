import React from 'react'

export default function Post() {
    return(
      <div className="post">
        <div className="who-when">
          <div className="who">
            <a href="http://"><img src="http" alt="avatar"/></a>
          </div>
          <span className="when"></span>
        </div>
        <div className="about-post">
          <h3></h3>
          <p></p>
        </div>
        <div className="more-buttons">
          <span>Read more...</span>
          <span><img src={require('../../img/likeTab.svg')} alt="like"/></span>
        </div>
      </div>
    )
};
