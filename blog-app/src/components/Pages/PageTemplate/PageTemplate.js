import React from "react";
import { useSelector } from "react-redux";
import "./PageTemplate.css";
import ErrorPage from "../ErrorPage";

const PageTemplate = props => {
  const error = useSelector(state => state.error);
  const { title, children } = props;
  return (
    <div className="page-container">
      {error ? (
        <ErrorPage />
      ) : (
        <div>
          <h1 className="title">{title}</h1>
          {children}
        </div>
      )}
    </div>
  );
};

export default PageTemplate;
