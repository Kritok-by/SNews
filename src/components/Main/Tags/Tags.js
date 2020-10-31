import React from 'react';
import TagsService from '../../../services/TagsService';
import './Tags.scss';

export default function Tags() {
  return (
    <div className="tags">
      <h2>Tags</h2>
      <TagsService />
    </div>
  );
}
