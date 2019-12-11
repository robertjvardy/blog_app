import React from "react";
import PostTile from "../../../PostTile/PostTile";
import { emptyPostsPage } from "../../Posts/PostsPage";
import "./SuggestedPosts.css";

const SuggestedPosts = props => {
  const posts = props.posts
    .filter(post => post.id !== props.currentPostId)
    .slice(0, 3);
  return (
    <>
      <h2>Suggestions:</h2>
      <div className="suggestions-container">
        {posts.length === 0
          ? emptyPostsPage
          : posts.map(item => (
              <PostTile
                title={item.title}
                body={item.body}
                id={item.id}
                author={item.author}
              />
            ))}
      </div>
    </>
  );
};

export default SuggestedPosts;
