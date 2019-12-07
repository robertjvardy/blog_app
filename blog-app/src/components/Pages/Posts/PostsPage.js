import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PostTile from "../../PostTile/PostTile";
import PageTemplate from "../PageTemplate/PageTemplate";
import "./PostsPage.css";

const PostsPage = () => {
  const posts = useSelector(state => state.posts);
  const emptyPostsPage = (
    <p>
      Looks like there are no posts yet! Head over to the New Post Page and
      create some!
    </p>
  );
  return (
    <PageTemplate title="Posts">
      <div className="posts-page-body">
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
    </PageTemplate>
  );
};

export default PostsPage;
