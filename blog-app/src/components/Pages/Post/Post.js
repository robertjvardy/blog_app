import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deletePostInit, updatePostInit } from "../../../store/rootActions";
import Button from "../../Button/Button";
import PageTemplate from "../PageTemplate/PageTemplate";
import "./Post.css";

const Post = props => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const post = posts.find(item => item["id"] == id);
  const dispatch = useDispatch();
  const handleRemovePost = () => {
    dispatch(deletePostInit(id));
    props.history.goBack();
  };
  const handleEditPost = () => {
    setIsEditMode(true);
  };
  const bodyOrSpiner = post ? (
    <div>
      <h3>{post.title}</h3>
      <h4>Written By: {post.author}</h4>
      <p>{post.body}</p>
      <Button onClick={handleRemovePost}>Remove Post</Button>
      <Button onClick={handleEditPost}>Edit Post</Button>
    </div>
  ) : (
    <h1>Add a Spinner Component Here!!!!!</h1>
  );

  const EditField = props => {
    const { post } = props;
    const [title, setTitle] = useState(post.title);
    const [author, setAuthor] = useState(post.author);
    const [body, setBody] = useState(post.body);
    const dispatch = useDispatch();
    const handleUpdate = () => {
      const requestBody = {
        title: title,
        author: author,
        body: body,
        id: id
      };
      dispatch(updatePostInit(id, requestBody));
      setIsEditMode(false);
    };
    return (
      <>
        <h1>Edit Mode</h1>
        <div className="inputField">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          ></input>
        </div>
        <div className="inputField">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={event => setAuthor(event.target.value)}
          ></input>
        </div>
        <div className="inputField">
          <label>Body</label>
          <input
            type="text"
            className="body-input"
            size="4000"
            value={body}
            onChange={event => setBody(event.target.value)}
          ></input>
        </div>
        <Button onClick={handleUpdate}>Post</Button>
      </>
    );
  };

  return (
    <PageTemplate title="">
      {isEditMode ? <EditField post={post} /> : bodyOrSpiner}
    </PageTemplate>
  );
};

export default Post;
