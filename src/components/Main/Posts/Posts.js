
import React from "react";
import Tabes from "./Tabs/Tabes";
import "./Posts.scss";
import { PostService } from "../../../services/PostsService";



export default function Posts() {
  return (
    <div className="all-posts">
      <Tabes />
      <hr />
      <div className="posts">
      <PostService/>
      </div>
    </div>
  );
}
