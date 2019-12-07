import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  SET_POSTS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_FAILURE,
  DELETE_POST,
  ADD_POST_FAILURE,
  ADD_POST,
  UPDATE_POST
} from "./rootTypes";

const initialState = {
  posts: []
};

const rootReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_POST:
      const postsC = [...state.posts];
      const newPs = postsC.filter(post => post.id !== payload.id);
      return {
        ...state,
        posts: newPs.concat(payload)
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(payload)
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        error: payload
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        error: payload
      };
    case DELETE_POST:
      const postsClone = [...state.posts];
      const newPosts = postsClone.filter(post => post.id !== payload);
      return {
        ...state,
        posts: newPosts
      };
    case SET_POSTS:
      return {
        ...state,
        posts: payload
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

const logger = store => next => action => {
  console.log("[MIDDLEWARE]", action);
  const result = next(action);
  console.log("[MIDDLEWARE] next state", store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
