import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deletePostInit, updatePostInit } from "../../../store/rootActions";
import Button from "../../Button/Button";
import PageTemplate from "../PageTemplate/PageTemplate";
import SuggestedPosts from "../Posts/SuggestedPosts/SuggestedPosts";
import EditField from "./EditField";
import Spinner from "../../Spinner/Spinner";
import "./Post.css";

const Post = props => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const post = posts.find(post => post.id == id);
  const dispatch = useDispatch();
  const handleRemovePost = () => {
    dispatch(deletePostInit(id));
    props.history.goBack();
  };
  const handleEditPost = () => {
    setIsEditMode(true);
  };

  const FullPost = props => {
    const { title, author, body } = props.post;
    return (
      <>
        <h3>{title}</h3>
        <h4>Written By: {author}</h4>
        <p>{body}</p>
      </>
    );
  };

  const postSection = post ? <FullPost post={post} /> : <Spinner />;

  return (
    <PageTemplate title={isEditMode ? "Edit Mode" : ""}>
      {isEditMode ? (
        <EditField post={post} id={id} setIsEditMode={setIsEditMode} />
      ) : (
        <div>
          {postSection}
          <Button onClick={handleRemovePost}>Remove Post</Button>
          <Button onClick={handleEditPost}>Edit Post</Button>
          <SuggestedPosts currentPostId={id} posts={posts} />
        </div>
      )}
    </PageTemplate>
  );
};

export default Post;
