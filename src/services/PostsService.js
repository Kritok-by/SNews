import React from 'react'
import Async from 'react-async'
import Post from '../components/Main/Posts/Post/Post'
import getData from './getData'

const link = 'https://conduit.productionready.io/api/articles?limit=10&offset=0'

const PostService = () => (
  <Async promiseFn={getData(link)}>
    <Async.Loading>
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Async.Loading>

    <Async.Resolved>
      {(data) => (
        <section className="all-tags">
        {data.articles.map((elem, index)=><Post key={index} data={elem}/>)}
      </section>
      )}
    </Async.Resolved>

    <Async.Rejected>
      {(error) => `Something went wrong: ${error.message}`}
    </Async.Rejected>
  </Async>
);


export default PostService;
