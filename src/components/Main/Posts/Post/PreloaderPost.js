import React from 'react';
import './Post.scss';
import 'semantic-ui-css/semantic.min.css';
import { Skeleton } from '@material-ui/lab';

export default function PreloaderPost() {
  return (
    <div className="post">
      <div className="who-when">
        <div className="who">
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="text" width={100} />
        </div>
        <span className="when">
          <Skeleton variant="text" width={100} />
        </span>
      </div>
      <hr />
      <div className="about-post">
        <Skeleton
          variant="text"
          width="100%"
          height={35}
          style={{ marginBottom: 20 }}
        />
        <Skeleton variant="text" width="100%" height={20} />
      </div>
      <hr />
      <div className="more-buttons">
        <Skeleton variant="text" width="100%" height={20} />
      </div>
    </div>
  );
}
