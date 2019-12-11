import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePostInit } from "../../../store/rootActions";
import Button from "../../Button/Button";

const EditField = props => {
  const {
    post: { title, author, body },
    id,
    setIsEditMode
  } = props;
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newBody, setNewBody] = useState(body);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    const requestBody = {
      title: newTitle,
      author: newAuthor,
      body: newBody,
      id: id
    };
    dispatch(updatePostInit(id, requestBody));
    setIsEditMode(false);
  };
  return (
    <>
      <div className="inputField">
        <label>Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={event => setNewTitle(event.target.value)}
        ></input>
      </div>
      <div className="inputField">
        <label>Author</label>
        <input
          type="text"
          value={newAuthor}
          onChange={event => setNewAuthor(event.target.value)}
        ></input>
      </div>
      <div className="inputField">
        <label>Body</label>
        <input
          type="text"
          className="body-input"
          size="4000"
          value={newBody}
          onChange={event => setNewBody(event.target.value)}
        ></input>
      </div>
      <Button onClick={handleUpdate}>Post</Button>
    </>
  );
};

export default EditField;
