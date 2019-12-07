import express from "express";
// import routes from 'mongoose'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import {
  addNewPost,
  getPosts,
  removePost,
  updatePost
} from "./src/controllers/postsController";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/POSTdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.unsubscribe(bodyParser.urlencoded({ extended: true }));

// dont forget to add routes
// dont forget to add code for static files

app.post("/new-post", addNewPost);
app.get("/get-posts", getPosts);
app.delete("/remove-post/:postId", removePost);
app.put("/update-post/:postId", updatePost);

app.listen(PORT, () => {
  console.log(`Your servr is running on port ${PORT}`);
});
