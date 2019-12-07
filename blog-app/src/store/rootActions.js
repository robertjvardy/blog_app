import Axios from "axios";
import {
  SET_POSTS,
  FETCH_POSTS_FAILURE,
  DELETE_POST,
  DELETE_POST_FAILURE,
  ADD_POST,
  ADD_POST_FAILURE,
  UPDATE_POST,
  UPDATE_POST_FAILURE
} from "./rootTypes";

export const updatePost = post => {
  return {
    type: UPDATE_POST,
    payload: post
  };
};

export const updatePostFailure = error => {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error
  };
};

export const updatePostInit = (postId, body) => {
  return dispatch => {
    Axios.put("/update-post/" + postId, body)
      .then(response => {
        dispatch(updatePost(body));
      })
      .catch(error => {
        dispatch(updatePostFailure(error));
      });
  };
};

export const addPost = post => {
  return {
    type: ADD_POST,
    payload: post
  };
};

export const addPostFailure = error => {
  return {
    type: ADD_POST_FAILURE,
    payload: error
  };
};

export const addPostInit = post => {
  return dispatch => {
    Axios.post("/new-post", post)
      .then(request => {
        dispatch(addPost(post));
      })
      .catch(error => {
        console.log(error);
        dispatch(addPostFailure(error));
      });
  };
};

export const deletePost = postId => {
  return {
    type: DELETE_POST,
    payload: postId
  };
};

export const deletePostFailure = error => {
  return {
    type: DELETE_POST_FAILURE,
    payload: error
  };
};

export const deletePostInit = postId => {
  return dispatch => {
    Axios.delete("/remove-post/" + postId)
      .then(response => {
        dispatch(deletePost(postId));
      })
      .catch(error => {
        console.log(error);
        dispatch(deletePostFailure(error));
      });
  };
};

export const fetchPostsFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
};

export const setPosts = posts => {
  return { type: SET_POSTS, payload: posts };
};

export const fetchPostsInit = () => {
  return dispatch => {
    Axios.get("/get-posts")
      .then(response => {
        dispatch(setPosts(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchPostsFailure(error));
      });
  };
};
