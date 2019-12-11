import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import PostsPage from "./components/Pages/Posts/PostsPage";
import AboutPage from "./components/Pages/About/AboutPage";
import NavBar from "./components/NavBar/NavBar";
import Post from "./components/Pages/Post/Post";
import NewPost from "./components/Pages/NewPost/NewPostPage";
import { fetchPostsInit } from "./store/rootActions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPostsInit()), []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/posts" component={PostsPage} exact />
          <Route path="/new-post" component={NewPost} exact />
          <Route path="/post/:id" component={Post} exact />
          <ErrorPage />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
