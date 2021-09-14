import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
