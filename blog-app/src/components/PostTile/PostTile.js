import React from "react";
import { useHistory } from "react-router-dom";
import "./PostTile.css";

const PostTile = props => {
  const history = useHistory();
  const { id, title, author, body } = props;
  const handleClick = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div className="post-container" onClick={() => handleClick()}>
      <h3 className="post-title">{title}</h3>
      <h5>By: {author}</h5>
      <p>{body}</p>
    </div>
  );
};

export default PostTile;
