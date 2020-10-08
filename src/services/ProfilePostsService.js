import { LinearProgress } from "@material-ui/core";
import React from "react";
import Async from "react-async";
import Post from "../components/Main/Posts/Post/Post";

const ProfilePostService = ({ page, user }) => {
  const getData = async () => {
    return await fetch(
      `https://conduit.productionready.io/api/articles?author=${user}&limit=10&offset=${page}`
    )
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json());
  };

  return (
    <Async promiseFn={getData}>
      <Async.Loading>
        <LinearProgress />
      </Async.Loading>

      <Async.Resolved>
        {(data) => (
          <section className="all-tags">
            {data.articles.map((elem, index) => (
              <Post key={index} data={elem} />
            ))}
          </section>
        )}
      </Async.Resolved>

      <Async.Rejected>
        {(error) => `Something went wrong: ${error.message}`}
      </Async.Rejected>
    </Async>
  );
};

export default ProfilePostService;
