import mongoose from "mongoose";
import { PostSchema } from "../models/posts";

const Post = mongoose.model("Post", PostSchema);

// doesn't check to make sure ID is not already in the database but uses a random id generator lib
export const addNewPost = (req, res) => {
  let newPost = new Post(req.body);

  newPost.save((error, post) => {
    if (error) {
      res.send(error);
    }
    res.json(post);
  });
};

export const getPosts = (req, res) => {
  Post.find({}, (error, post) => {
    if (error) {
      res.send(error);
    }
    res.json(post);
  });
};

export const updatePost = (req, res) => {
  Post.findOneAndUpdate(
    { id: req.params.postId },
    req.body,
    { new: true, useFindAndModify: false },
    (error, post) => {
      if (error) {
        res.send(error);
      }
      res.json(post);
    }
  );
};

export const removePost = (req, res) => {
  Post.deleteOne({ id: req.params.postId }, (error, post) => {
    if (error) {
      res.send(error);
    }
    res.json({ id: req.params.postId });
  });
};
