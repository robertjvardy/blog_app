import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import uniqid from "uniqid";
import { addPostInit } from "../../../store/rootActions";
import Button from "../../Button/Button";
import PageTemplate from "../PageTemplate//PageTemplate";
import "./NewPostPage.css";

const NewPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // convert this to a form
  const title = useRef(null);
  const body = useRef(null);
  const author = useRef(null);
  const handlePost = event => {
    const id = uniqid();
    dispatch(
      addPostInit({
        id: id,
        title: title.current.value,
        body: body.current.value,
        author: author.current.value
      })
    );
    history.push(`post/${id}`);
    title.current.value = "";
    body.current.value = "";
    author.current.value = "";
  };
  return (
    <PageTemplate title="New Post">
      <div className="inputField">
        <label>Title</label>
        <input type="text" ref={title}></input>
      </div>
      <div className="inputField">
        <label>Author</label>
        <input type="text" ref={author}></input>
      </div>
      <div className="inputField">
        <label>Body</label>
        <input
          type="text"
          className="body-input"
          ref={body}
          size="4000"
        ></input>
      </div>
      <Button onClick={handlePost}>Post</Button>
    </PageTemplate>
  );
};

export default NewPost;
