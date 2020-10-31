import React from 'react';
import Async from 'react-async';
import { Tag } from '../components/Main/Tags/Tag/Tag';

const getData = async () => {
  return await fetch('https://conduit.productionready.io/api/tags')
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());
};

const TagsService = () => (
  <Async promiseFn={getData}>
    <Async.Loading>
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Async.Loading>

    <Async.Resolved>
      {(data) => (
        <section className="all-tags">
          {data.tags.map((elem, index) => (
            <Tag key={index} data={elem} />
          ))}
        </section>
      )}
    </Async.Resolved>

    <Async.Rejected>
      {(error) => `Something went wrong: ${error.message}`}
    </Async.Rejected>
  </Async>
);

export default TagsService;
