import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: String
  }
});
